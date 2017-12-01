import mongoose, { Schema } from 'mongoose';

const CommentsSchema = new Schema({
  author: {
    type: String,
    default: '???'
  },
  date: {
    type: Date,
    default: Date.now
  },
  body: String,
  hidden: {
    type: Boolean,
    default: false
  },
  likes: {
    type: Number,
    default: 0
  },
});

CommentsSchema.method('like', (like, cb) => {
  this.likes += 1;
  this.parent().save(cb);
});

export default CommentsSchema;
