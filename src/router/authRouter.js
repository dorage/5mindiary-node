import { Router } from 'express';

const router = new Router();

router.post('/sign-up', (req, res) => res.send('hello, boilerplate'));
router.post('/sign-in', (req, res) => res.send('hello, boilerplate'));
router.get('/check', (req, res) => res.send('hello, boilerplate'));

export default router;
