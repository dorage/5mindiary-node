import { Router } from 'express';
import {
    getUserMe,
    putUserMe,
    getUserHome,
} from '../controller/userController';

const router = new Router();

router.get('/', getUserHome);
router.get('/me', getUserMe);
router.put('/me', putUserMe);

export default router;
