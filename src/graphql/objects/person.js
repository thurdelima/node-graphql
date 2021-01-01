import { GraphQLObjectType, GraphQLID, GraphQLString} from 'graphql';

export default new GraphQLObjectType({
    name: 'person',
    description: 'person object',
    fields() {
        return {
            id: {
                type: GraphQLID,
                description: 'unique_id',
                resolve: (person) => person.id
            },
            name: {
                type: GraphQLString,
                description: 'person_name',
                resolve: (person) => person.name
            }
        }
    }

})