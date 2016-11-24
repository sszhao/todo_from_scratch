import TodoItem from './models/todoItem';

export default function () {
  TodoItem.count().exec((err, count) => {
    if (count > 0) {
      return;
    }

    const item1 = new TodoItem({ id: 1, text: 'Hello MERN', completed: false });
    const item2 = new TodoItem({ id: 2, text: 'Lorem Ipsum', completed: false });

    TodoItem.create([item1, item2], (error) => {
      if (!error) {
        console.log('ready to go....');
      }
    });
  });
}
