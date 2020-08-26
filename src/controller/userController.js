import User from '../model/User';

export const getUserHome = (req, res) => {
    res.send(res.locals.user);
};

export const getUserMe = async (req, res) => {
    const {
        user: { name, email, morning_alert, night_alert },
    } = res.locals;
    console.log(morning_alert);
    const user = {
        name,
        email,
        morning_alert,
        night_alert,
    };
    res.send(user);
};

export const putUserMe = async (req, res) => {
    const { user } = res.locals;
    await User.update();
    res.send(user);
};
