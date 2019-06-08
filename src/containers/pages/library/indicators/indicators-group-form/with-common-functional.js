import React, { Component } from 'react'
import { startApplyingChanges, finishApplyingChanges } from '../../../../../action-creators/library-page';

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

        onSaveIndicatorsGroupClick = (promise, resolveCallbacks) => {
            const { dispatch } = this.props;

            dispatch(startApplyingChanges());

            promise
                .then(() => {
                    dispatch(finishApplyingChanges());
                    resolveCallbacks.forEach(cb => dispatch(cb()))
                    this.goBack();
                })
        }

        render() {
            return (
                <IndicatorsGroupForm 
                    {...this.props}
                    onSaveIndicatorsGroupClick={this.onSaveIndicatorsGroupClick}
                    onCancel={this.onCancel}/>
            );
        }
    }
}

export default withCommonFunctional;