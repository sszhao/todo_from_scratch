//this class will take the action and decide what to do 
//basically, it handles two actions: 1) toggleTodoStatus
// 2) addTodoItem 
// This is for TodoList 

import React from 'react';

export const todo = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO_ITEM':
            state.itemIndex ++; 
            return {
                id: state.itemIndex,
                text: action.text,
                completed: false
            };

        case 'TOGGLE_TODO_STATUS':
            if(state.id !== action.id){
                return state;
            }

            return {
                ...state, 
                completed:!state.completed
            };

        default:
            return state;
    }
}

const todoListInitialState = {
    itemIndex: 0,
    todos: []
};

export const todoList = (state = todoListInitialState, action) => {
    switch (action.type) {
        case 'ADD_TODO_ITEM':
            return {
                ...state,
                todos: [...state.todos, todo(state, action)],
            };
        case 'TOGGLE_TODO_STATUS': 
            return {
                ...state,
                todos: state.todos.map(t => todo(t, action))
            };
        case 'REMOVE_TODO_ITEM': 
            return {
                ...state,
                todos: state.todos.filter(t => t.id !== action.id)
            };
        default:
            return state;
    }
}


