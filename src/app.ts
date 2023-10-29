require('dotenv').config();

import express from 'express';
import config from 'config';
import router from './router'

const app = express();

app.use(express.json());
app.use('/api', router)

import connectDb from '../config/db';

const port = config.get<number>('port');

app.listen(port, async () => {

  await connectDb();

  console.log(`Rodando na porta ${port}`)
});