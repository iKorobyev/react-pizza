import React from 'react';

function Categories({ items }) {
    const [ activeItem, setActiveItem ] = React.useState(null);
    const onSelectItem = index => {
        setActiveItem(index);
    }
    console.log(activeItem, setActiveItem);

    return <div className="categories">
        <ul>
            <li className={activeItem === null ? 'active' : ''} onClick={() => onSelectItem(null)}>Все</li>
            {items.map((item, index) => <li
                className={activeItem === index ? 'active' : ''}
                key={`${item}_${index}`}
                onClick={() => onSelectItem(index)}>
                {item}
            </li>)}
        </ul>
    </div>
}

export default Categories;