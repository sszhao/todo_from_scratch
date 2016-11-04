import React from 'react';

const AddTodoBar = () => {
    return (
        <div className="row">
            <div className="col-lg-6">
                <div className="input-group">
                    <input type="text" className="form-control" placeholder="Todo Item ..." />
                    <span className="input-group-btn">
                        <button className="btn btn-default" type="button">Add</button>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default AddTodoBar;