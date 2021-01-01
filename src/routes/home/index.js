import { Router } from 'express';

const router = Router();

router.get('/',(req, res) => {
    return res.json({
        msg: 'another route without graphql'
    })
})

export default router;