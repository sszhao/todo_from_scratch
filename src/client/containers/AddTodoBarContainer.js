import React from 'react';
import { connect } from 'react-redux';
import { addTodoItemRequest, addTodoItem } from '../actions/TodoAppActions';

const AddTodoBar = ( {itemIndex, onAddTodo} ) => {
    let input;

    return (
        <div className="row">
            <div className="col-lg-6">
                <div className="input-group">
                    <form onSubmit={ e => {
                        e.preventDefault();
                        if(!input.value.trim()){
                            return;
                        }
                        //console.log("Add todo item "+ input.value);
                        //onAddTodo(itemIndex, input.value);
                        onAddTodo(itemIndex,input.value)
                        input.value = '';
                    }}>
                    <input type="text" ref={node =>{ input = node}} className="form-control" placeholder="Todo Item ..." />
                    <span className="input-group-btn">
                        <button className="btn btn-default" type="submit">Add</button>
                    </span>
                    </form>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state, ownProps) => {
    //console.log("state.filter is " + state.filter);
    return {
        itemIndex: state.todoList.itemIndex
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAddTodo: (itemIndex,text) => {
            dispatch(addTodoItemRequest(itemIndex,text));
            //addTodoItemRequest(itemIndex,text,dispatch);
        }
    }
}




export default connect(mapStateToProps, mapDispatchToProps)(AddTodoBar);