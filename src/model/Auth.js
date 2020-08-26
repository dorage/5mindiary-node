import mongoose from 'mongoose';

const schema = new mongoose.Schema({
    access_token: String,
    service_token: String,
    device_info: String,
    expires_in: Date,
    is_new: Boolean,
    signed_in: { type: Date, default: Date.now },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

const model = mongoose.model('Auth', schema);

export default model;
