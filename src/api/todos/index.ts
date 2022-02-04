import { Router } from 'express';

import { getTodo } from './get-todo';
import { addTodo } from './add-todo';
import { getTodos } from './get-todos';
import { dbClient } from '../../helpers';
import { deleteTodo } from './delete-todo';
import { updateTodo } from './update-todo';

export const todosRouter = Router();

todosRouter.get('/todos', getTodos);

todosRouter.get(`/todos/:id`, getTodo);

todosRouter.delete(`/todos/:id`, deleteTodo);

todosRouter.post('/todos', addTodo);

todosRouter.put('/todos/:id', updateTodo);

export const todosCollection = dbClient.db().collection('todos');
