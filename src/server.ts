import express from 'express';
import cors from 'cors';
import serverless from 'serverless-http';

import { phonesRouter } from './routers/phones';

const BASE_URL = '/.netlify/functions/server';

const app = express();

app.use(cors());

app.use(`${BASE_URL}/phones`, phonesRouter);

export const handler = serverless(app);
