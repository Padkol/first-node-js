import {Router} from "express";

import {getTodos} from "./get-todos";

export const todosRouter = Router();

todosRouter.get('/',getTodos)
