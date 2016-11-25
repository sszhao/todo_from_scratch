import TodoItem from './models/todoItem';
import config from './config';

export default function () {
  TodoItem.count().exec((err, count) => {
    if (count > 0) {
      return;
    }

    const item1 = new TodoItem({ id: config.itemIndex, text: 'Hello MERN', completed: false });
    config.itemIndex++;
    const item2 = new TodoItem({ id: config.itemIndex, text: 'Lorem Ipsum', completed: false });
    config.itemIndex++;

    TodoItem.create([item1, item2], (error) => {
      if (!error) {
        console.log('ready to go....');
      }
    });
  });
}
