import { connect } from 'react-redux';
import FilterLinkGroup from '../components/FilterLinkGroup';
import {setFilter} from '../actions/TodoAppActions';

const mapStateToProps = (state, ownProps) => {
    //console.log("state.filter is " + state.filter);
    return {
        filter: state.filterGroup.filter,
        numOfActiveItems: state.todoList.todos.filter(t => !t.completed).length
    }
}

//The following code is equivalent with the uncommented code below
// const mapDispatchToProps = ({
//         onClick: setFilter
// })

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: (f) => dispatch(setFilter(f))
    }
}


const FilterLinkContainer = connect(mapStateToProps, mapDispatchToProps)(FilterLinkGroup);

export default FilterLinkContainer;