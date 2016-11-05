import React, {PropTypes} from 'react';
import TodoItem from './TodoItem';

const TodoList = ({todos}) => {
    return (
        <ul>
        {todos.map(todo => 
            <TodoItem
                key={todo.id}
                {...todo} 
            />
        )}
        </ul>
    );
};

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        completed: PropTypes.bool.isRequired,
        text: PropTypes.string.isRequired
    }).isRequired).isRequired
}

export default TodoList;