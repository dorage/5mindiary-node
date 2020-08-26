import mongoose from 'mongoose';

const schema = new mongoose.Schema({
    am: Boolean,
    hour: Number,
    minute: Number,
});

const model = mongoose.model('Time', schema);

export default model;
