import { Router } from 'express';

const router = new Router();

router.get('/', (req, res) => {
    const { headers } = req;
    console.log(req.connection.remoteAddress);
    console.log(headers['X-Forwarded-For']);
    console.log(headers['user-agent']);
    res.send('hello, boilerplate');
});

export default router;
