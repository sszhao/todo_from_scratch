import TodoItem from '../models/todoItem';

/**
 * Get all posts
 * @param req
 * @param res
 * @returns void
 */
export function getTodos(req, res) {
  TodoItem.find().exec((err, todos) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ todos });
  });
}



export function addTodoItem(req, res) {
  if (!req.body.todoItem.id || !req.body.todoItem.text || !req.body.todoItem.completed) {
    res.status(403).end();
  }

  const newItem = new TodoItem(req.body.todoItem);

  // Let's sanitize inputs
  newItem.id = sanitizeHtml(newItem.id);
  newItem.text = sanitizeHtml(newItem.text);
  newItem.completed = sanitizeHtml(newItem.completed);

  newItem.save((err, saved) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ todoItem:saved });
  });
}
