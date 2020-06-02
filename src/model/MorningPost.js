import mongoose from 'mongoose';

const schema = new mongoose.Schema({
    q1: String,
    q2: String,
    q3: String,
});

const model = mongoose.model('Post', schema);

export default model;
