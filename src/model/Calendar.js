import mongoose from 'mongoose';

const schema = new mongoose.Schema({
    year: Number,
    month: Number,
    date: Number,
});

const model = mongoose.model('Calendar', schema);

export default model;
