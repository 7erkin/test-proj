import React from 'react'

import './style.css'

const CompetenceFormView = ({
    onSaveCompetenceClick,
    children
}) => {
    return (
        <form className="competence-form" onSubmit={evt => {
            evt.preventDefault();
            onSaveCompetenceClick();
        }}>
            {
                children
            }
        </form>
    );
}

export default CompetenceFormView;