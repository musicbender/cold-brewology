import express from 'express';
import articles from './articles';
import shop from './shop';
const router = express.Router();

router.use('/', articles);
router.use('/', shop);

export default router;
