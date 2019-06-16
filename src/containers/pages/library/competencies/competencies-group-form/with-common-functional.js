import React, { Component } from 'react'
import { startApplyingChanges, finishApplyingChanges } from '../../../../../action-creators/library-page/page-managing';

const withCommonFunctional = CompetenciesGroupForm => {
    return class extends Component {
        constructor(props) {
            super(props);
        }

        onCancel = () => {
            this.props.history.goBack();
        }

        saveCompetenciesGroupExecutor = async (saveCompetenciesGroup, resolvedCallbacks) => {
            const { dispatch, history } = this.props;

            dispatch(startApplyingChanges());

            await saveCompetenciesGroup()

            dispatch(finishApplyingChanges());

            await Promise.all(resolvedCallbacks.map(async cb => cb()))

            history.push('/library/competencies-groups/edit')
        }

        render() {

            return (
                <CompetenciesGroupForm {...this.props}
                    onCancel={this.onCancel} 
                    saveCompetenciesGroupExecutor={this.saveCompetenciesGroupExecutor} />
            );
        }
    }
}

export default withCommonFunctional;