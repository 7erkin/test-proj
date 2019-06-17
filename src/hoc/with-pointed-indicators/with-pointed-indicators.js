import React, { Component } from 'react'

import { updateEditCompetencePointedIndicators, updateEditCompetenceIndicatorInfluence } from '../../action-creators/library-page/competencies/edit-competence';
import { updateNewCompetencePointedIndicators, updateNewCompetenceIndicatorInfluence } from '../../action-creators/library-page/competencies/new-competence';

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
            let onInfluenceChange = () => {}

            if(mode.EDIT === option){
                pointedIndicators = editCompetence.indicators;
                onIndicatorCheck = indicator => this.props.dispatch(updateEditCompetencePointedIndicators(indicator))
                onInfluenceChange = (id, influence) => this.props.dispatch(updateEditCompetenceIndicatorInfluence({id, influence}))
            } else {
                pointedIndicators = newCompetence.indicators;
                onIndicatorCheck = indicator => this.props.dispatch(updateNewCompetencePointedIndicators(indicator))
                onInfluenceChange = (id, influence) => this.props.dispatch(updateNewCompetenceIndicatorInfluence({id, influence}))
            }

            return (
                <Accordeon 
                    {...this.props}
                    pointedIndicators={pointedIndicators} 
                    onIndicatorCheck={onIndicatorCheck}
                    onInfluenceChange={onInfluenceChange} />
            );
        }
    }
}

export default withPointedIndicators;