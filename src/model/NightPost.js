import mongoose from 'mongoose';

// 오늘 하루는 어땠나요?
// 오늘 일어난 멋진 일 3가지 (3가지)
// 무얼 했더라면 오늘 하루가 더 만족스러웠을까요?

const schema = new mongoose.Schema({
    q1: String,
    q2: Array,
    q3: String,
});

const model = mongoose.model('NightPost', schema);

export default model;
