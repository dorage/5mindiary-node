import { Router } from 'express';
import { getPost, putMorning, putNight } from '../controller/postController';

const router = new Router();

router.get('/', getPost);

router.put('/morning', putMorning);
router.put('/night', putNight);

export default router;
