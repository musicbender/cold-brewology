import express from 'express';
import pug from 'pug';
import path from 'path';
const Article = require('../modals/articles');
import { apiResponse } from '../util';
const router = express.Router();

router.get('/get-articles', (req, res) => {
  Article.find({}, null, {sort: {date: -1}}, (err, articles) => {
    if (err) {
      apiResponse(res, 400, 1, 'error', err);
    }

    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    apiResponse(res, 200, 0, 'success', articles);
  });
});

router.post('/test-post', (req, res) => {
  const bodyFile = path.join(__dirname, '../views/posts/') + req.body.post_id + '.pug';
  const body = pug.renderFile(bodyFile);

  const post = new Article({
    title: req.body.title,
    author: 'Pat Jacobs',
    body
  });

  post.save((err, results) => {
    if (err) console.log(err);
    console.log(results);
  });

  apiResponse(res, 200, 0, 'success', body);
})

export default router;
