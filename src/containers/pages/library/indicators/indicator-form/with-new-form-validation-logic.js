import React from 'react'
import CustomValidation from '../../../../../base-classes/custom-validation';
import { newIndicatorNameSuccessValidation, newIndicatorGroupIdSuccessValidation, newIndicatorGroupIdErrorValidation, newIndicatorNameErrorValidation } from '../../../../../action-creators/library-page/indicators/new-indicator';

const withNewFormValidationLogic = IndicatorForm => {
    return class extends CustomValidation {
        constructor(props) {
            super(props);
        }

        validateForm = async () => {
            const {
                newIndicator: { name: { text: name }, idGroup: { text: idGroup }},
                validateIndicatorName,
                validateIndicatorGroupId,
                dispatch
            } = this.props;

            this.trySubmit();

            let valMes1 = await validateIndicatorName(name);

            valMes1 === '' ? 
            dispatch(newIndicatorNameSuccessValidation()) : 
            dispatch(newIndicatorNameErrorValidation(valMes1));

            let valMes2 = await validateIndicatorGroupId(idGroup);

            valMes2 === '' ?
            dispatch(newIndicatorGroupIdSuccessValidation()) :
            dispatch(newIndicatorGroupIdErrorValidation(valMes2));

            return !valMes1.length && !valMes2.length;
        }

        onIndicatorNameBlur = async () => {
            if(!this.hasAlreadyTrySubmit())
                return;

            const { newIndicator: { name: { text: name } } } = this.props;

            const { dispatch, validateIndicatorName } = this.props;

            let valMes = await validateIndicatorName(name);

            valMes === '' ?
                dispatch(newIndicatorNameSuccessValidation()) :
                dispatch(newIndicatorNameErrorValidation(valMes));
        }

        onIndicatorGroupIdBlur = async () => {
            if(!this.hasAlreadyTrySubmit())
                return;

            const { dispatch, validateIndicatorGroupId } = this.props;

            const { newIndicator: { idGroup: { text: idGroup } } } = this.props;

            let valMes = await validateIndicatorGroupId(idGroup);

            valMes === '' ?
            dispatch(newIndicatorGroupIdSuccessValidation()) :
            dispatch(newIndicatorGroupIdErrorValidation(valMes));
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

export default withNewFormValidationLogic;   