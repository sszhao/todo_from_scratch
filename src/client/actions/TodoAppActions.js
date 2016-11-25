//This todoApp has three simple actions
//addTodoItem
//toggleTodoStatus
//setFilter 
//I will export each action as function out 
import { callApi } from '../util/apiCaller';

//This function will take the text submitted as argument
//And send out an object expression with the type equal to action name
//and payload equal to text. Note that since it's an object, need to add () 
//outside of {}
export const addTodoItem  = (text) => ({
    type: 'ADD_TODO_ITEM', 
    text 
}); 

export const addTodoItemRequest = (id, text) => {
    return (dispatch) => {
        callApi('todos', 'post', {
            todoItem: {
                id: id,
                text: text,
                completed: false
            }
        }).then(response => {
            console.log(response)
            dispatch(addTodoItem(text))
        })
    }
};

//I need to think about this method. 
export const getTodos = (todos) => ({
    type: 'GET_TODOS',
    todos
})


export const toggleTodoStatus = (id) => ({
    type: 'TOGGLE_TODO_STATUS', 
    id
});

export const removeTodoItem = (id) => ({
    type: 'REMOVE_TODO_ITEM', 
    id
});

export const setFilter = (filter) => ({
    type: 'SET_FILTER', 
    filter
})