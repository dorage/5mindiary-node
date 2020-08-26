import mongoose from 'mongoose';

const schema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    createdDate: Number,
    editable: Boolean,
    morning: { type: mongoose.Schema.Types.ObjectId, ref: 'MorningPost' },
    night: { type: mongoose.Schema.Types.ObjectId, ref: 'NightPost' },
});

const model = mongoose.model('Post', schema);

export default model;
