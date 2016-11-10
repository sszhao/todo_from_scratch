import React from 'react';
import FilterLinkContainer from '../containers/FilterLinkContainer';

const FilterLinkGroup = ({filter}) => {
    console.log("FilterLinkGroup filter is " + filter);
    return (
        <div>
           Show:
            {" "} 
            <FilterLinkContainer filter={filter}>
            All
            </FilterLinkContainer>
            {", "}
            <FilterLinkContainer filter={filter}>
            Active
            </FilterLinkContainer>
            {", "}
            <FilterLinkContainer filter={filter}>
            Completed
            </FilterLinkContainer>
        </div>
    );
};

export default FilterLinkGroup;