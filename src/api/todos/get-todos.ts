import { RequestHandler } from 'express';

import { todosCollection } from './index';

export const getTodos: RequestHandler = async (req, res) => {
  try {
    console.log('[TODOS] trying get todos');

    let page = Number(req.query.page) || 0;
    let limit = Number(req.query.limit) || 10;

    const todos = await todosCollection
      .find()
      .skip(page * limit)
      .limit(limit)
      .toArray();

    const total = Math.ceil((await todosCollection.countDocuments()) / limit);

    res.send({ data: todos, total });

    console.log('[TODOS] get successful');
  } catch (err) {
    console.log('[TODOS] get error');

    console.error(err);
  }
};
