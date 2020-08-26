import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import shajs from 'sha.js';
import User from '../model/User';
import Auth from '../model/Auth';

export const postGoogleAuth = async (req, res) => {
    const { accessToken } = req.body;

    try {
        // get a userInfo from google auth
        const { data: userInfo } = await axios.get(
            'https://www.googleapis.com/oauth2/v3/userinfo',
            {
                params: { access_token: `${accessToken}` },
            },
        );
        // find user from db
        let user = await User.findOne({ email: userInfo.email });
        let isNew = false;
        if (user === undefined || user === null) {
            user = new User({
                name: userInfo.name,
                email: userInfo.email,
                morning_alert: '0800',
                night_alert: '2100',
            });
            isNew = true;
        }

        const serviceToken = shajs('sha256').update(uuidv4()).digest('hex');
        const expiresIn = new Date();
        expiresIn.setDate(expiresIn.getDate() + 180);

        const auth = new Auth({
            access_token: accessToken,
            service_token: serviceToken,
            // device_info:'',
            expires_in: expiresIn,
            is_new: isNew,
            user,
            signed_in: Date.now(),
        });

        user.save();
        auth.save();

        res.send(auth);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
};

export const postKakaoAuth = async (req, res) => {
    const { accessToken } = req.body;
    try {
        const {
            data: { kakao_account: userInfo },
        } = await axios.get({
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
        // 서비스 액세스토큰
        const serviceToken = shajs('sha256').update(uuidv4()).digest('hex');

        const user = new User({
            name: userInfo.profile.nickname,
            email: userInfo.email,
        });
        const auth = new Auth({
            accessToken,
            serviceToken,
            user,
            signed_in: Date.now(),
        });

        res.send({ okay: true });
        // user.save();
        // auth.save();
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
};
