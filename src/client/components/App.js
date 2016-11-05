import React, {Component} from 'react';
import AddTodoBar from './AddTodoBar';
import TodoList from './TodoList';
import FilterLinkGroup from './FilterLinkGroup';

class App extends Component {
    render() {
        const todos = [
            {
        
                id: 1, 
                text: "hello",
                completed: true
            },
            {
        
                id: 2, 
                text: "world",
                completed: false
            } 
        ];
        return (
            <div> 
                <AddTodoBar />
                <TodoList todos={todos} />
                <FilterLinkGroup filter="Active" />
            </div>
        );
    }
}

export default App;