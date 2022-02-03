import cors from 'cors';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import express, { Express } from 'express';

import { config } from '../config';
import { todosRouter } from '../api';

export async function startHttpServer(app: Express) {
  try {
    await mongoose.connect(config.mongoUrl);

    app.use(express.json());

    app.use(express.urlencoded({ extended: true }));

    app.use(bodyParser.json());

    app.use(bodyParser.urlencoded({ extended: true }));

    app.use(todosRouter);

    app.use(
      cors({
        origin: true,
        credentials: true,
      }),
    );

    app.listen(config.workingPort, () => {
      console.log(`Server has been started on ${config.workingPort} port`);
    });
  } catch (err) {
    console.error(err);
  }
}
