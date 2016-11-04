import React, {Component} from 'react';
import AddTodoBar from './AddTodoBar';
import TodoList from './TodoList';
import FilterLinkGroup from './FilterLinkGroup';

class App extends Component {
    render() {
        const todos = [
            {
                key:1,
                text: "hello",
                completed: true
            },
            {
                key:2,
                text: "world",
                completed: false
            } 
        ];
        return (
            <div> 
                <AddTodoBar />
                <TodoList todos={todos} />
                <FilterLinkGroup />
            </div>
        );
    }
}

export default App;