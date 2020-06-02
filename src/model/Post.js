import mongoose from 'mongoose';

const schema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    year: Number,
    month: Number,
    day: Number,
    morning: { type: mongoose.Schema.Types.ObjectId, ref: 'MorningPost' },
    night: { type: mongoose.Schema.Types.ObjectId, ref: 'NightPost' },
});

const model = mongoose.model('Post', schema);

export default model;
