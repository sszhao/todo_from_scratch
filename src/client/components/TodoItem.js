import React, {PropTypes} from 'react';

const TodoItem = ({id, text, completed}) => {
    return (
        <li
            //the first {} is for expression, the second one is for object 
            style = {{ textDecoration: completed ? "line-through" : "none"}} 
        >{text}</li>
    );
}

TodoItem.propTypes = {
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
}

export default TodoItem;