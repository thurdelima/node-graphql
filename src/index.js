import express from 'express';
import bodyParser  from 'body-parser';
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
import mongoose from 'mongoose';
import routes from './routes/index';
import Schema from './graphql/index';

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use('/graphql' ,graphqlHTTP({
    schema: Schema,
    // schema: buildSchema('type Query {msg: String}'),
    // rootValue: {msg: () => 'Hello world'},
    graphiql: true,
    pretty: true
}));

mongoose.connect('mongodb://user:password@localhost:27017/mongodb?authSource=admin', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

routes(app)
app.listen(3333, () => console.log('Express on'));