import React from 'react'

import './modal-window.css'

const ModalWindow = ({
    onByIndicatorsClick,
    onByHandClick
}) => {
    return (
        <div className="modal-window">
            <b>How do you want to define competencies to new position?</b> <br />
            <button type="button" onClick={onByIndicatorsClick}>By pointing competence indicators</button>
            <button type="button" onClick={onByHandClick}>By pointing competencies by hand</button>
        </div>
    );
}

export default ModalWindow;