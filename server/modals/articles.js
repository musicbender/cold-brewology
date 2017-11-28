import mongoose, { Schema } from 'mongoose';

const ArticleSchema = new Schema({
  title:  String,
  author: {
    type: String,
    default: 'Pat Jacobs'
  },
  body: String,
  comments: [{
    body: String,
    date: Date
  }],
  date: {
    type: Date,
    default: Date.now
  },
  hidden: Boolean,
  likes: Number
});

ArticleSchema.method('like', (like, cb) => {
  this.likes += 1;
  this.parent().save(cb);
});

const Article = mongoose.model('Article', ArticleSchema);
