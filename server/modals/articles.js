import mongoose, { Schema } from 'mongoose';
import CommentsSchema from './comments';

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
  comments: [CommentsSchema],
  hidden: {
    type: Boolean,
    default: false
  },
  likes: {
    type: Number,
    default: 0
  }
});

ArticleSchema.method('like', (like, cb) => {
  this.likes += 1;
  this.parent().save(cb);
});

const Article = mongoose.model('Article', ArticleSchema);

export default Article;
