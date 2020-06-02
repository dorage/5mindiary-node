import mongoose from 'mongoose';

const schema = new mongoose.Schema({
    name: String,
    email: String,
    sex: String,
    signedDate: { type: Date, default: Date.now },
});

const model = mongoose.model('User', schema);

export default model;
