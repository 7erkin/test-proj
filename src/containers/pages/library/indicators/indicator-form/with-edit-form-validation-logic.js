import React from 'react'
import CustomValidation from '../../../../../base-classes/custom-validation';

import { 
    editIndicatorNameSuccessValidation, 
    editIndicatorGroupIdSuccessValidation, 
    editIndicatorGroupIdErrorValidation, 
    editIndicatorNameErrorValidation,
} from '../../../../../action-creators/library-page/indicators/edit-indicator';

const withEditFormValidationLogic = IndicatorForm => {
    return class extends CustomValidation {
        constructor(props) {
            super(props);
        }

        validateForm = async () => {
            const {
                editIndicator: { 
                    name: { 
                        initial: initialName, 
                        text: name 
                    }, 
                    idGroup: { 
                        text: idGroup 
                    }
                },
                validateIndicatorName,
                validateIndicatorGroupId,
                dispatch
            } = this.props;

            this.trySubmit();

            const validationData = [
                {
                    value: idGroup,
                    validator: validateIndicatorGroupId,
                    validationOkCb: dispatch.bind(this, editIndicatorGroupIdSuccessValidation()),
                    validationErrCb: errorMessage => {
                        dispatch(editIndicatorGroupIdErrorValidation(errorMessage))
                    }
                }
            ]

            if(name === initialName) 
                dispatch(editIndicatorNameSuccessValidation())
            else
                validationData.push(
                    {
                        value: name,
                        validator: validateIndicatorName,
                        validationOkCb: dispatch.bind(this, editIndicatorNameSuccessValidation()),
                        validationErrCb: errorMessage => {
                            dispatch(editIndicatorNameErrorValidation(errorMessage))
                        }
                    }
                )

            return await this.validateAndUpdate(validationData);
        }

        onIndicatorNameBlur = async () => {
            if(!this.hasAlreadyTrySubmit())
                return;

            const { 
                dispatch,
                editIndicator: { 
                    name: { 
                        initial: initialName,
                        text: name 
                    } 
                } 
            } = this.props;

            const { validateIndicatorName } = this.props;

            let valMes = name === initialName ? '' : await validateIndicatorName(name);

            valMes === '' ?
                dispatch(editIndicatorNameSuccessValidation()) :
                dispatch(editIndicatorNameErrorValidation(valMes));
        }   

        onIndicatorGroupIdBlur = async () => {
            if(!this.hasAlreadyTrySubmit())
                return;

            const { dispatch, validateIndicatorGroupId } = this.props;

            const { editIndicator: { idGroup: { text: idGroup } } } = this.props;

            let valMes = validateIndicatorGroupId(idGroup);

            valMes === '' ?
                dispatch(editIndicatorGroupIdSuccessValidation()) :
                dispatch(editIndicatorGroupIdErrorValidation(valMes));
        }

        render() {

            return (
                <IndicatorForm {...this.props}
                    validateForm={this.validateForm} 
                    onIndicatorNameBlur={this.onIndicatorNameBlur}
                    onIndicatorGroupIdBlur={this.onIndicatorGroupIdBlur} />
            );
        }
    }
}

export default withEditFormValidationLogic;   