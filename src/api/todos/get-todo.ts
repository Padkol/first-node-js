import { RequestHandler } from 'express';

import { todosCollection } from './index';
import { ObjectId } from 'mongodb';

export const getTodo: RequestHandler = async (req, res) => {
  try {
    console.log('[TODOS] trying get todo by id');

    const idTodo = req.params.id;

    if (!idTodo) {
      res.status(400);
      res.send('please add normal id');
      return;
    }

    const todo = await todosCollection.findOne({ _id: new ObjectId(idTodo) });

    if (!todo) {
      res.status(404);
      res.send('fake id');
      return;
    }

    res.send(todo);

    console.log('[TODOS] get one successful');
  } catch (err) {
    console.log('[TODOS] get one error');

    res.status(500);
    res.send('smt happened');

    console.error(err);
  }
};
