import Auth from '../model/Auth';

export const checkAuth = async (req, res, next) => {
    const { authorization } = req.headers;
    const serviceToken = authorization.replace('Bearer ', '');
    const auth = await Auth.findOne({ service_token: serviceToken }).populate(
        'user',
    );
    // delete expired token
    if (Date.now() - Date(auth.expires_in) < 0) {
        await Auth.deleteOne({ service_token: serviceToken });
        res.sendStatus(500);
    }
    // next
    res.locals.user = auth.user;
    next();
};

export const nothing = null;
