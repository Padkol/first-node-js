import cors from 'cors';
import bodyParser from 'body-parser';
import express, { Express } from 'express';

import { config } from '../config';
import { todosRouter } from '../api';
import { initDb } from './init-db';

export async function startHttpServer(app: Express) {
  try {
    await initDb();

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
