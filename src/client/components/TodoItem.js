import React, {PropTypes} from 'react';

const TodoItem = ({text, completed, onClick, removeItem}) => {
    return (
        <div>
            <li 
                //the first {} is for expression, the second one is for object
                onClick = {onClick} 
                style = {{ textDecoration: completed ? "line-through" : "none"}}
            >
                {text}
                {' '}
            </li>
            <button onClick = {removeItem}>X</button>
        </div>
    )
}

TodoItem.propTypes = {
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    removeItem: PropTypes.func.isRequired
}

export default TodoItem;