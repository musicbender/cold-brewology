import express from 'express';
import path from 'path';
import { apiResponse } from '../util';
import { OperationHelper } from 'apac';
import products from '../data/products';
import config from '../config';

const router = express.Router();
const APAC = new OperationHelper(config.APAC);

router.get('/get-shop/:type/:page', (req, res) => {
  APAC.execute('ItemLookup', {
    ItemId: products[req.params.type],
    idType: 'ASIN',
  })
  .then((data) => {
    apiResponse(res, 200, 0, 'success', data);
  })
  .catch((err) => {
    apiResponse(res, 500, 0, 'error', err);
  });
});

export default router;
