import express from 'express';
import cors from 'cors';
import serverless from 'serverless-http';

import { productsRouter } from './routers/products';

const BASE_URL = '/.netlify/functions/server';

const app = express();

app.use(cors());

app.use(`${BASE_URL}/products`, productsRouter);

export const handler = serverless(app);
