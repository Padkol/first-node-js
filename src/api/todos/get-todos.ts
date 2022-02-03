import { RequestHandler } from 'express';

import { todosCollection } from './index';

export const getTodos: RequestHandler = async (req, res) => {
  try {
    console.log('[TODOS] trying get todos');

    let page = Number(req.query.page) || 1;

    let limit = Number(req.query.limit) || 10;

    const todos = await todosCollection
      .find()
      .skip((page - 1) * limit)
      .limit(limit)
      .toArray();

    const total = limit ? Math.ceil((await todosCollection.countDocuments()) / limit) : 1;

    res.send({ data: todos, total });

    console.log('[TODOS] get successful');
  } catch (err) {
    console.log('[TODOS] get error');

    res.status(500);

    console.error(err);
  }
};
