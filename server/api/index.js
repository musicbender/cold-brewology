import express from 'express';
const router = express.Router();

router.get('/getArticle', (req, res) => {
  res.status(500).send('<p>SENT, BRAH!</p>');
});

export default router;
