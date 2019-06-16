import React, { Component } from 'react'
import { startApplyingChanges, finishApplyingChanges } from '../../../../../action-creators/library-page/page-managing';

const withCommonFunctional = IndicatorsGroupForm => {
    return class extends Component {
        constructor(props){
            super(props);
        }

        goBack = () => {
            const { history } = this.props;
            history.goBack();
        }

        onCancel = () => {
            this.goBack();
        }

        saveIndicatorsGroupExecutor = async (saveIndicatorsGroup, resolvedCallbacks) => {
            const { dispatch } = this.props;

            dispatch(startApplyingChanges());

            await saveIndicatorsGroup()

            await Promise.all(resolvedCallbacks.map(cb => cb()))

            this.goBack()

            dispatch(finishApplyingChanges())
        }

        render() {
            return (
                <IndicatorsGroupForm 
                    {...this.props}
                    saveIndicatorsGroupExecutor={this.saveIndicatorsGroupExecutor}
                    onCancel={this.onCancel}/>
            );
        }
    }
}

export default withCommonFunctional;