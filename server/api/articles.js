import express from 'express';
import { Article } from '../modals/articles';
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
  console.log(req.body.post_id);
  apiResponse(res, 200, 0, 'success', req.body.post_id);
})

export default router;
