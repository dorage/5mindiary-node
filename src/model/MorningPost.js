import mongoose from 'mongoose';

// 지금 이 순간 감사한 일 3가지 (3가지)
// 어떻게 하면 더 좋은 하루를 보낼 수 있을까요?
// 나를 위한 긍정의 한 줄

const schema = new mongoose.Schema({
    q1: Array,
    q2: String,
    q3: String,
});

const model = mongoose.model('MorningPost', schema);

export default model;
