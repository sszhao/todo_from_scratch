import { Router } from 'express';
import * as TodoController from '../controllers/todos.controller';
const router = new Router();

// Get all Posts
router.route('/api/todos').get(TodoController.getTodos);

router.route('/api/todos').post(TodoController.addTodoItem);


export default router;