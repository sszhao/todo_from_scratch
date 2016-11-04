import React from 'react';

const TodoItem = ({id, text, completed}) => {
    return (
        <li
            //the first {} is for expression, the second one is for object 
            style = {{ textDecoration: completed ? "line-through" : "none"}} 
        >{text}</li>
    );
}

export default TodoItem;