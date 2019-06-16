import React from 'react'
import CustomValidation from '../../../../../base-classes/custom-validation';
import { newIndicatorsGroupNameSuccessValidation, newIndicatorsGroupNameErrorValidation, newIndicatorsGroupDescriptionSuccessValidation, newIndicatorsGroupDescriptionErrorValidation } from '../../../../../action-creators/library-page/indicators/new-indicators-group';

const withAddFormValidation = IndicatorsGroupForm => {
    return class extends CustomValidation {
        constructor(props) {
            super(props);
        }

        validateForm = async () => {
            const {
                dispatch,
                newIndicatorsGroup: {
                    name: { text: name},
                    description: { text: description }
                },
                validateIndicatorsGroupName,
                validateIndicatorsGroupDescription
            } = this.props;

            this.trySubmit();

            const res = await this.validateAndUpdate([
                {
                    value: name,
                    validator: validateIndicatorsGroupName,
                    validationOkCb: dispatch.bind(this, newIndicatorsGroupNameSuccessValidation()),
                    validationErrCb: errorMessage => {
                        dispatch(newIndicatorsGroupNameErrorValidation(errorMessage))
                    } 
                },
                {
                    value: description,
                    validator: validateIndicatorsGroupDescription,
                    validationOkCb: dispatch.bind(this, newIndicatorsGroupDescriptionSuccessValidation()),
                    validationErrCb: errorMessage => {
                        dispatch(newIndicatorsGroupDescriptionErrorValidation(errorMessage))
                    }
                }
            ])

            return res;
        }

        onIndicatorsGroupNameBlur = async () => {
            if(!this.hasAlreadyTrySubmit()) return;

            const {
                dispatch, 
                validateIndicatorsGroupName,
                newIndicatorsGroup: {
                    name: { 
                        text: name 
                    }
                }
            } = this.props;

            const res = await this.validateAndUpdate([
                {
                    value: name,
                    validator: validateIndicatorsGroupName,
                    validationOkCb: dispatch.bind(this, newIndicatorsGroupNameSuccessValidation()),
                    validationErrCb: errorMessage => {
                        dispatch(newIndicatorsGroupNameErrorValidation(errorMessage))
                    }
                }
            ])

            return res;
        }

        onIndicatorsGroupDescriptionBlur = async () => {
            if(!this.hasAlreadyTrySubmit()) return;

            const {
                dispatch, 
                validateIndicatorsGroupDescription,
                newIndicatorsGroup: {
                    description: { text: description }
                }
            } = this.props;

            const res = await this.validateAndUpdate([
                {
                    value: description,
                    validator: validateIndicatorsGroupDescription,
                    validationOkCb: dispatch.bind(this, newIndicatorsGroupDescriptionSuccessValidation()),
                    validationErrCb: errorMessage => {
                        dispatch(newIndicatorsGroupDescriptionErrorValidation(errorMessage))
                    }
                }
            ])

            return res;
        }

        render() {

            return (
                <IndicatorsGroupForm {...this.props} 
                    validateForm={this.validateForm}
                    onIndicatorsGroupNameBlur={this.onIndicatorsGroupNameBlur}
                    onIndicatorsGroupDescriptionBlur={this.onIndicatorsGroupDescriptionBlur} />
            );
        }
    }
}

export default withAddFormValidation;