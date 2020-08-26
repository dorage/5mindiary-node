import mongoose from 'mongoose';

const schema = new mongoose.Schema({
    name: String,
    email: String,
    morning_alert: { type: mongoose.Schema.Types.ObjectId, ref: 'Time' },
    night_alert: { type: mongoose.Schema.Types.ObjectId, ref: 'Time' },
});

const model = mongoose.model('User', schema);

export default model;
