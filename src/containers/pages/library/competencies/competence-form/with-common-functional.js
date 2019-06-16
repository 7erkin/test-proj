import React from 'react'

import { 
    startApplyingChanges, 
    finishApplyingChanges 
} from '../../../../../action-creators/library-page/page-managing';
import {  
    saveLoadedIndicatorsGroups
} from '../../../../../action-creators/library-page/indicators/indicators';
import { 
    startLoadingIndicatorsGroups,  
    finishLoadingIndicatorsGroups 
} from '../../../../../action-creators/library-page/indicators/loading';


const withCommonFunctional = WrappedCompetenceForm => {
    return class extends React.Component {
        constructor(props) {
            super(props);
        }

        getIndicatorsGroups = () => {
            const {
                dispatch,
                staffixService
            } = this.props;
    
            dispatch(startLoadingIndicatorsGroups());
            staffixService.getGroupsIndicators()
                .then(groups => {
                    dispatch(saveLoadedIndicatorsGroups(groups));
                    dispatch(finishLoadingIndicatorsGroups());
                })
        }

        onCancel = () => {
            const {
                history
            } = this.props;

            history.goBack();
        }

        saveCompetenceExecutor = async (saveCompetence, resolvedCallbacks) => {
            const {
                dispatch, history, 
                match: {
                    params: {
                        idGroup
                    }
                }
            } = this.props

            dispatch(startApplyingChanges())

            await saveCompetence()

            await Promise.all(resolvedCallbacks.map(cb => cb()))

            dispatch(finishApplyingChanges())
            
            history.push(`/library/competencies-groups/${idGroup}`)
        }

        render(){

            return (
                <WrappedCompetenceForm {...this.props} 
                    getIndicatorsGroups={this.getIndicatorsGroups}
                    saveCompetenceExecutor={this.saveCompetenceExecutor}
                    onCancel={this.onCancel} />
            );
        }
    }
}

export default withCommonFunctional;