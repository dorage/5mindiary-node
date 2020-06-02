import { Router } from 'express';

const router = new Router();

router.get('/postPost', (req, res) => res.send('hello, boilerplate'));
router.get('/getPost', (req, res) => res.send('hello, boilerplate'));

export default router;
