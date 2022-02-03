import { ObjectId } from 'mongodb';
import { RequestHandler } from 'express';

import { todosCollection } from './index';

export const deleteTodo: RequestHandler = async (req, res) => {
  try {
    console.log('[TODOS] trying delete todo');

    const todoId = req.params.id;

    if (!todoId) {
      res.status(400);
    }

    await todosCollection.deleteOne({ _id: new ObjectId(todoId) });

    res.status(200);

    console.log('[TODOS] delete successful');
  } catch (err) {
    console.log('[TODOS] delete error');

    res.status(500);

    console.error(err);
  }
};
