import React from 'react'

import './aside-list.css'

const AsideList = ({listItems, renderListItem}) => {
    return (
        <ul className="aside-list">
            {
                listItems.map(el => <li key={el.id}>{renderListItem(el)}</li>)
            }
        </ul>
    );
}

export default AsideList;