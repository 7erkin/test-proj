import React, { Component } from 'react'
import { startApplyingChanges, finishApplyingChanges } from '../../../../../action-creators/library-page';

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

        onSaveIndicatorClick = (promise) => {
            const { dispatch } = this.props;

            dispatch(startApplyingChanges());

            promise
                .then(() => {
                    dispatch(finishApplyingChanges());
                    //some actions with history - depends on how we got on this component
                    this.goBack();
                })
        }

        render() {
            return (
                <IndicatorForm 
                    {...this.props}
                    onSaveIndicatorClick={this.onSaveIndicatorClick}
                    onCancel={this.onCancel}/>
            );
        }
    }
}

export default withCommonFunctional;