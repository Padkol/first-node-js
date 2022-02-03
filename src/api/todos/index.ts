import { Router } from 'express';

import { getTodo } from './get-todo';
import { addTodo } from './add-todo';
import { getTodos } from './get-todos';
import { dbClient } from '../../helpers';

export const todosRouter = Router();

todosRouter.get('/todos', getTodos);

todosRouter.get(`/todos/:id`, getTodo);

todosRouter.delete(`/todos/:id`);

todosRouter.post('/todos', addTodo);

export const todosCollection = dbClient.db().collection('todos');
