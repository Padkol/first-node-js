import { ObjectId } from 'mongodb';
import { RequestHandler } from 'express';

import { todosCollection } from './index';

export const updateTodo: RequestHandler = async (req, res) => {
  try {
    console.log('[TODOS] trying update todo');

    const todoId = req.params.id;

    if (!todoId) {
      res.status(400);
      res.send('invalid id');
      return;
    }

    if (!req.body || !req.body.title || !req.body.body) {
      res.status(400);
      res.send('invalid data');
      return;
    }

    const { title, body } = req.body;

    await todosCollection.updateOne({ _id: new ObjectId(todoId) }, { $set: { title, body } });

    res.status(200);

    res.send('post has been updated');

    console.log('[TODOS] updated successful');
  } catch (err) {
    console.log('[TODOS] updated error');

    res.status(500);
    res.send('smt happened');

    console.error(err);
  }
};
