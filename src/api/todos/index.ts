import { Router } from 'express';

import { addTodo } from './add-todo';
import { getTodos } from './get-todos';
import { dbClient } from '../../helpers';

export const todosRouter = Router();

todosRouter.get('/todos', getTodos);

todosRouter.post('/todos', addTodo);

export const todosCollection = dbClient.db().collection('todos');
