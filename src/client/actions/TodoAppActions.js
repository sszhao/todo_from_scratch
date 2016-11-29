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
                id: id+1,
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

// export const toggleTodoRequest = (id) => {
//     console.log("Toggle Todo Requested on id " + id)
//     return (dispatch) => {
//         callApi('todos', 'get'
//         )
//         .then( (res) => res.json())
//         .then( obj => obj.todos.filter(t => t.id === id) )
//         .then( todo => {
//             console.log(todo[0].text) 
//             callApi(`todos/${id}`, 'post', 
//                 {
//                     id,
//                     //text: todo[0].text,
//                     //completed: !(todo[0].completed)
//                 }
//             )
//         }
//         ).
//         then( () => dispatch(toggleTodoStatus(id)))
//         .catch( err => console.log(err) )
        
//     }
// }


export const toggleTodoRequest = (id) => {
    console.log("Toggle Todo Requested on id " + id)
    return (dispatch) => {
        callApi( `todos/${id}`, 'post', {id} )
        .then(dispatch(toggleTodoStatus(id)))
        .catch( err => console.log(err) )
    }
}


export const removeTodoItem = (id) => ({
    type: 'REMOVE_TODO_ITEM', 
    id
});

export const deleteItemRequest = (mid) => {
    console.log("deleteItemRequest called " + mid);
    return (dispatch) => {
        callApi(`todos/${mid}`, 'delete', {id:mid}).then(
            () => dispatch(removeTodoItem(mid))
        ).catch(
            (err) => console.log("error: " + err)
        )
    }
};

export const setFilter = (filter) => ({
    type: 'SET_FILTER', 
    filter
})