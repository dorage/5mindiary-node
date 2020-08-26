import { Router } from 'express';
import { postGoogleAuth, postKakaoAuth } from '../controller/authController';

const router = new Router();

router.post('/google', postGoogleAuth);
router.post('/kakao', postKakaoAuth);

export default router;
