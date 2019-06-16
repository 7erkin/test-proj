import React, { Component } from 'react'
import { startApplyingChanges, finishApplyingChanges } from '../../../../../action-creators/library-page/page-managing';

const withCommonFunctional = IndicatorForm => {
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

        saveIndicatorExecutor = async (saveIndicator, resolvedCallbacks) => {
            const { dispatch } = this.props;

            dispatch(startApplyingChanges());

            await saveIndicator();

            await Promise.all(resolvedCallbacks.map(cb => cb()))

            this.goBack()

            dispatch(finishApplyingChanges())
        }

        render() {
            return (
                <IndicatorForm 
                    {...this.props}
                    saveIndicatorExecutor={this.saveIndicatorExecutor}
                    onCancel={this.onCancel}/>
            );
        }
    }
}

export default withCommonFunctional;