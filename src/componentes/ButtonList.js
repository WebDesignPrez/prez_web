import React from "react";
function ButtonList(props) {
    const categories = props.categories;
    const filterCategory = props.filterCategory;
    
    return (
        React.createElement('div', {className: 'categories'},
            categories.map(category => (
                React.createElement('button', {type: 'button', className: 'btn-category', onClick: () => filterCategory(category), key: category}, category)
            ))
        )
    );
};
export default ButtonList