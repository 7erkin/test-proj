import React from 'react'
import CustomValidation from '../../../../../base-classes/custom-validation';
import { 
    editIndicatorsGroupDescriptionSuccessValidation, 
    editIndicatorsGroupDescriptionErrorValidation, 
    editIndicatorsGroupNameSuccessValidation, 
    editIndicatorsGroupNameErrorValidation 
} from '../../../../../action-creators/library-page/indicators/edit-indicators-group';

const withEditFormValidation = IndicatorsGroupForm => {
    return class extends CustomValidation {
        constructor(props) {
            super(props);
        }

        validateForm = async () => {
            const {
                dispatch,
                editIndicatorsGroup: {
                    initial: initialName,
                    name: { text: name},
                    description: { text: description }
                },
                validateIndicatorsGroupName,
                validateIndicatorsGroupDescription
            } = this.props;

            this.trySubmit();

            const validationData = [
                {
                    value: description,
                    validator: validateIndicatorsGroupDescription,
                    validationOkCb: dispatch.bind(this, editIndicatorsGroupDescriptionSuccessValidation()),
                    validationErrCb: errorMessage => {
                        dispatch(editIndicatorsGroupDescriptionErrorValidation(errorMessage))
                    }
                }
            ];

            if(name !== initialName)
                validationData.push({
                    value: name,
                    validator: validateIndicatorsGroupName,
                    validationOkCb: dispatch.bind(this, editIndicatorsGroupNameSuccessValidation()),
                    validationErrCb: errorMessage => {
                        dispatch(editIndicatorsGroupNameErrorValidation(errorMessage))
                    }
                })
            else
                dispatch(editIndicatorsGroupNameSuccessValidation());

            const res = await this.validateAndUpdate(validationData)

            return res;
        }

        onIndicatorsGroupNameBlur = async () => {
            if(!this.hasAlreadyTrySubmit()) return;

            const {
                dispatch, 
                validateIndicatorsGroupName,
                editIndicatorsGroup: {
                    name: {
                        initial: initialName, 
                        text: name 
                    }
                }
            } = this.props;

            if(name === initialName) {
                dispatch(editIndicatorsGroupNameSuccessValidation());
                return true;
            }

            await this.validateAndUpdate([
                {
                    value: name,
                    validator: validateIndicatorsGroupName,
                    validationOkCb: dispatch.bind(this, editIndicatorsGroupNameSuccessValidation()),
                    validationErrCb: errorMessage => {
                        dispatch(editIndicatorsGroupNameErrorValidation(errorMessage))
                    }
                }
            ])
        }

        onIndicatorsGroupDescriptionBlur = async () => {
            if(!this.hasAlreadyTrySubmit()) return;

            const {
                dispatch, 
                validateIndicatorsGroupDescription,
                editIndicatorsGroup: {
                    description: { text: description }
                }
            } = this.props;

            await this.validateAndUpdate([
                {
                    value: description,
                    validator: validateIndicatorsGroupDescription,
                    validationOkCb: dispatch.bind(this, editIndicatorsGroupDescriptionSuccessValidation()),
                    validationErrCb: errorMessage => {
                        dispatch(editIndicatorsGroupDescriptionErrorValidation(errorMessage))
                    }
                }
            ])
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

export default withEditFormValidation;