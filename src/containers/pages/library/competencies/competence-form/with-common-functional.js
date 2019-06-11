import React from 'react'

import { 
    startApplyingChanges, 
    finishApplyingChanges 
} from '../../../../../action-creators/library-page';
import { 
    startLoadingIndicatorsGroups, 
    saveLoadedIndicatorsGroups, 
    finishLoadingIndicatorsGroups 
} from '../../../../../action-creators/library-page/indicators';

const withCommonFunctional = WrappedCompetenceForm => {
    return class extends React.Component {
        constructor(props) {
            super(props);
        }

        render() {
            const commonFunctional = {
                getIndicatorsGroups: () => {
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
                },
                onSaveCompetenceClick: (promise, resetForm) => {
                    const {
                        dispatch, history, 
                        match: {
                            params: {
                                idGroup
                            }
                        }
                    } = this.props

                    dispatch(startApplyingChanges());
                    promise
                        .then(() => {
                            dispatch(resetForm())
                            dispatch(finishApplyingChanges())
                            history.push(`/library/competencies-groups/${idGroup}`)
                        })
                },
                onCancel: () => {
                    const {
                        history
                    } = this.props;

                    history.goBack();
                }
            };

            return (
                <WrappedCompetenceForm {...commonFunctional} {...this.props} />
            );
        }
    }
}

export default withCommonFunctional;