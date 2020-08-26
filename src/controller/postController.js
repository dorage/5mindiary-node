import Post from '../model/Post';
import MorningPost from '../model/MorningPost';
import NightPost from '../model/NightPost';

export const getPost = async (req, res) => {
    const { user, isToday, createdDate } = res.locals;
    const post = await Post.findOne({ user, createdDate }, { _id: 0, user: 0 });
    if (post === null) {
        res.send({
            createdDate,
            editable: isToday,
            morning: null,
            night: null,
        });
        return;
    }
    res.send(post);
};

export const putMorning = async (req, res) => {
    const { user, isToday, createdDate } = res.locals;
    const { answers } = req.body;

    if (!isToday) {
        res.sendStatus(500);
    }
    // post 확인
    let post = await Post.findOne({ user, createdDate });
    if (post === null) {
        post = new Post({
            user,
            createdDate,
            morning: null,
            night: null,
        });
    }
    // morningPost 확인
    let morning = await MorningPost.findById(post.morning);
    console.log(morning);
    if (morning === null) {
        morning = new MorningPost({
            q1: null,
            q2: null,
            q3: null,
        });
    }
    [morning.q1, morning.q2, morning.q3] = answers;
    morning.save();

    post.morning = morning;
    post.save();

    res.send(post);
};
export const putNight = async (req, res) => {
    const { user, isToday, createdDate } = res.locals;
    const { answers } = req.body;

    if (!isToday) {
        res.sendStatus(500);
    }
    // post 확인
    let post = await Post.findOne({ user, createdDate });
    if (post === null) {
        post = new Post({
            user,
            createdDate,
            morning: null,
            night: null,
        });
    }
    // nightPost 확인
    let night = await NightPost.findById(post.night);
    if (night === null) {
        night = new NightPost({
            q1: null,
            q2: null,
            q3: null,
        });
    }
    [night.q1, night.q2, night.q3] = answers;
    night.save();

    post.night = night;
    post.save();

    res.send(post);
};
