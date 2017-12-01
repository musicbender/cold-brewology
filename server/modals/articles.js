import mongoose, { Schema } from 'mongoose';

const ArticleSchema = new Schema({
  title:  String,
  author: {
    type: String,
    default: 'Pat Jacobs'
  },
  date: {
    type: Date,
    default: Date.now
  },
  body: String,
  comments: [{
    body: String,
    date: Date
  }],
  hidden: Boolean,
  likes: Number
});

ArticleSchema.method('like', (like, cb) => {
  this.likes += 1;
  this.parent().save(cb);
});

const Article = mongoose.model('Article', ArticleSchema);

export default Article;
