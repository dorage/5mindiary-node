import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import session from 'express-session';

import './db';
import morgan from 'morgan';
import mainRouter from './router/main';
import authRouter from './router/authRouter';
import userRouter from './router/userRouter';
import postRouter from './router/postRouter';
import { configs } from './config';
import { checkAuth } from './middleware/authMiddleware';
import { isToday } from './middleware/postMiddleware';

const app = express();

app.use(helmet());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(
    session({
        secret: configs.cookieSecret,
        resave: true,
        saveUninitialized: false,
    }),
);
app.use(morgan('dev'));
app.use(cors({ origin: '*' }));
app.options('*', cors());

app.use(mainRouter);
app.use('/auth', authRouter);
app.use('/user', checkAuth, userRouter);
app.use('/post/:createdDate', isToday, postRouter);

export default app;
