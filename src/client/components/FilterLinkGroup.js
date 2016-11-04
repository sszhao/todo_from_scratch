import React from 'react';

const FilterLinkGroup = () => {
    return (
        <div>
           Show:
            {" "} 
            <a href='#'>All</a>
            {", "}
            <a href='#'>Completed</a>
            {", "}
            <a href='#'>Incompleted</a>
        </div>
    );
};

export default FilterLinkGroup;