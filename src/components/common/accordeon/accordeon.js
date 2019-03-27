import React from 'react'

import './accordeon.css'

const renderCard = (group, onPanelClick, renderItems) => {
    return (
        <div className="card">
            <div className="card-header">
                <h5 className="mb-0">
                    <button onClick={evt => {evt.preventDefault(); onPanelClick(group.id);}} className="btn btn-link" data-toggle="collapse" aria-expanded="true">
                        {group.name}
                    </button>
                </h5>
            </div>
            <div className="collapse show" data-parent="#accordion">
                <div className="card-body">
                    {
                        renderItems(group.items, group.id)
                    }
                </div>
            </div>
        </div>
    );
}

const Accordeon = ({
    onPanelClick,
    renderItems,
    groups
}) => {
    return (
        <div id="accordion">
        {
            groups.map(group => renderCard(group, onPanelClick, renderItems))
        }
        </div>
    );
}

export default Accordeon;