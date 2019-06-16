import React, { Component } from 'react'

import { updateEditCompetencePointedIndicators } from '../../action-creators/library-page/competencies/edit-competence';
import { updateNewCompetencePointedIndicators } from '../../action-creators/library-page/competencies/new-competence';

const mode = {
    EDIT: 0,
    ADD: 1
}

export {
    mode
}

const withPointedIndicators = option => Accordeon => {
    return class extends Component {
        constructor(props){
            super(props);
        }

        render() {
            const {
                editCompetence,
                newCompetence
            } = this.props;

            let pointedIndicators = [];
            let onIndicatorCheck = () => {};

            if(mode.EDIT === option){
                pointedIndicators = editCompetence.indicators;
                onIndicatorCheck = indicator => this.props.dispatch(updateEditCompetencePointedIndicators(indicator))
            } else {
                pointedIndicators = newCompetence.indicators;
                onIndicatorCheck = indicator => this.props.dispatch(updateNewCompetencePointedIndicators(indicator))
            }

            return (
                <Accordeon 
                    {...this.props}
                    pointedIndicators={pointedIndicators} 
                    onIndicatorCheck={onIndicatorCheck} />
            );
        }
    }
}

export default withPointedIndicators;