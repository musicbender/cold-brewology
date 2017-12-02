import express from 'express';
import pug from 'pug';
import path from 'path';
const Article = require('../modals/articles');
import { apiResponse } from '../util';
const router = express.Router();

router.get('/get-article', (req, res) => {
  Article.find({}, null, {sort: (date: -1)}, (err, articles) => {
    if (err) { console.error(err); }
    apiResponse(res, 200, 0, 'success', articles);
  });

  apiResponse(res, 200, 0, 'success', 'article data sent');
});

router.post('/test-post', (req, res) => {
  const bodyFile = path.join(__dirname, '../views/posts/') + req.body.post_id + '.pug';
  const body = pug.renderFile(bodyFile) || 'file does not exist';

  const post = new Article({
    title: req.body.title,
    author: 'Pat Jacobs',
    body
  })

  post.save((err, results) => {
    if (err) console.log(err);
    console.log(results);
  })

  apiResponse(res, 200, 0, 'success', body);
})

export default router;
