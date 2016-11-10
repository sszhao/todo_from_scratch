import React, {Component} from 'react';
import AddTodoBar from '../containers/AddTodoBarContainer';
import TodoListContainer from '../containers/TodoListContainer';
import FilterLinkContainer from '../containers/FilterLinkContainer';

class App extends Component {
    render() {
        // const todos = [
        //     {
        
        //         id: 1, 
        //         text: "hello",
        //         completed: true
        //     },
        //     {
        
        //         id: 2, 
        //         text: "world",
        //         completed: false
        //     } 
        // ];
        return (
            <div> 
                <AddTodoBar />
                <TodoListContainer />
                <FilterLinkContainer />
            </div>
        );
    }
}

export default App;