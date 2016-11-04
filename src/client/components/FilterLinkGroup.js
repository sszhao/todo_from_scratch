import React from 'react';
import FilterLink from './FilterLink';

const FilterLinkGroup = () => {
    return (
        <div>
           Show:
            {" "} 
            <FilterLink text="All" active={true} />
            {", "}
            <FilterLink text="Completed" active={false} />
            {", "}
            <FilterLink text="Incompleted" active={false} />
        </div>
    );
};

export default FilterLinkGroup;