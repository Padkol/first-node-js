import { RequestHandler } from 'express';

import { todosCollection } from './index';
import { ObjectId } from 'mongodb';

export const getTodo: RequestHandler = async (req, res) => {
  try {
    console.log('[TODOS] trying get todo by id');

    const idTodo = req.params.id;

    if (!idTodo) {
      res.status(400);
    }

    const todo = await todosCollection.findOne({ _id: new ObjectId(idTodo) });

    console.log(todo, idTodo);

    if (!todo) {
      res.status(404);
    }

    res.send(todo);

    console.log('[TODOS] get one successful');
  } catch (err) {
    console.log('[TODOS] get one error');
    res.status(500);
    console.error(err);
  }
};
