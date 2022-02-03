import { MongoClient } from 'mongodb';

import { config } from '../config';

export const dbClient = new MongoClient(config.mongoUrl);

export const initDb = async () => {
  try {
    await dbClient.connect();

    console.log('[DB] connected successful');
  } catch (err) {
    console.log('[DB] connected failed');
    console.log(err);
  }
};
