import { ObjectId } from 'mongodb';
import { RequestHandler } from 'express';

import { todosCollection } from './index';

export const deleteTodo: RequestHandler = async (req, res) => {
  try {
    console.log('[TODOS] trying delete todo');

    const todoId = req.params.id;

    if (!todoId) {
      res.status(400);
      res.send('fake id');
      return;
    }

    await todosCollection.deleteOne({ _id: new ObjectId(todoId) });

    res.status(200);

    res.send('post has been deleted');

    console.log('[TODOS] delete successful');
  } catch (err) {
    console.log('[TODOS] delete error');

    res.status(500);
    res.send('smt happened');

    console.error(err);
  }
};
