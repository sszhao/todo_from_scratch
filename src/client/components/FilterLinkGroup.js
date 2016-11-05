import React from 'react';
import FilterLink from './FilterLink';

const FilterLinkGroup = ({filter}) => {
    return (
        <div>
           Show:
            {" "} 
            <FilterLink filter={filter}>
            All
            </FilterLink>
            {", "}
            <FilterLink filter={filter}>
            Active
            </FilterLink>
            {", "}
            <FilterLink filter={filter}>
            Completed
            </FilterLink>
        </div>
    );
};

export default FilterLinkGroup;