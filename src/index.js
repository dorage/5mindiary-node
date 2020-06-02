import { configs } from './config';
import app from './ExpressApp';

const { port } = configs;

const handleListen = () => {
    console.log(`Listening On : http://localhost:${port}`);
};

app.listen(port, handleListen);
