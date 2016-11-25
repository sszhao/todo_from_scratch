import { Router } from 'express';
import * as TodoController from '../controllers/todos.controller';
const router = new Router();

// Get all Posts
router.route('/todos').get(TodoController.getTodos);

router.route('/todos').post(TodoController.addTodoItem);

router.route('/todos/:id').delete(TodoController.deleteItem);

export default router;