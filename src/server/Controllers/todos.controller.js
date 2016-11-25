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
  // console.log('add to do item');
  // console.log(req.body.todoItem);
  if (req.body.todoItem.id == null || req.body.todoItem.text == null) {
    res.status(403).end();
    return;
  }

  const newItem = new TodoItem(req.body.todoItem);

  // Let's sanitize inputs
  // newItem.id = sanitizeHtml(newItem.id);
  // newItem.text = sanitizeHtml(newItem.text);
  // newItem.completed = sanitizeHtml(newItem.completed);

  newItem.save((err, saved) => {
    if (err) {
      res.status(500).send(err);
      console.log('error msg:' + err);
      return;
    }
    res.json({"todoItem": req.body.todoItem});
    console.log('success: server has sent the response.');
  });
}
