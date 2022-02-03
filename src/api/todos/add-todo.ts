import { RequestHandler } from 'express';

import { todosCollection } from './index';

export const addTodo: RequestHandler = async (req, res) => {
  try {
    console.log('[TODOS] trying add todo');

    if (!req.body || !req.body.title || !req.body.body) {
      res.status(400);
      res.send('invalid data');
      return;
    }

    const { title, body } = req.body;

    await todosCollection.insertOne({ title, body });

    res.status(200);

    res.send('post has been created');

    console.log('[TODOS] created successful');
  } catch (err) {
    console.log('[TODOS] created error');

    res.status(500);
    res.send('smt happened');

    console.error(err);
  }
};
