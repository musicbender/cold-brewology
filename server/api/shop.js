import express from 'express';
import path from 'path';
import { apiResponse } from '../util';
import { OperationHelper } from 'apac';
import config from '../config';

const router = express.Router();
const APAC = new OperationHelper(config.APAC);

router.get('/get-shop/:type/:page', (req, res) => {
  APAC.execute('ItemLookup', {
    idType: 'ASIN',
    itemId: 'B0001GSSIO',
  })
  .then((data) => {
    apiResponse(res, 200, 0, 'success', data);
  })
  .catch((err) => {
    apiResponse(res, 200, 0, 'error', err);
  })
});

export default router;
