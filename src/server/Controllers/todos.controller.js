import TodoItem from '../models/todoItem';

/**
 * Get all posts
 * @param req
 * @param res
 * @returns void
 */
export function getTodos(req, res) {
  console.log('using this code')
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


export function deleteItem(req, res) {
  console.log("todo request id is " + req.params.id);
  
  TodoItem.findOne({ id: req.params.id }).exec((err, todo) => {
    if (err) {
      res.status(500).send(err);
    }
    console.log("todo id " + todo.id + " and text is " + todo.text);
    todo.remove(() => {
      res.status(200).end();
    });
  });

  //console.log('success: server has sent the response.');
}

// export function toggleItem(req, res) {
//   TodoItem.findOneAndUpdate(
//     { 
//       id: req.params.id, 
//       text: req.params.text,
//       completed: req.params.completed
//      }
//   ).exec((err, todo) => {
//     if (err) {
//       res.status(500).send(err);
//     }
//   }
// }
    

export function toggleItem(req, res) {

  // return all rows matching id obtained from the id in request
  var query = TodoItem.findOne(
                 { id: req.params.id }  // condition
              )
  
  // execute the query 
  query.exec(function (err, todo) {
    if (err) 
      res.status(500).send(err)
    todo.update(
      {
        completed: !todo.completed
      },
      
      (err, res) => {
        if (err)
          console.log('error from update ' + err)
        else
          console.log('response from update ' + res)
      }
    )
  })

}