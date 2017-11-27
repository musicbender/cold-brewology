import express from 'express';
import { apiResponse } from '../util';
const router = express.Router();

router.get('/getArticle', (req, res) => {
  const data = {
    worked: 'yup',
    waddup: 'brah',
    goats: 7
  }

  apiResponse(res, 200, 0, 'success', data);
});

export default router;
