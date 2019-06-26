import React from 'react'
import CustomValidation from '../../../../base-classes/custom-validation';
import { newCompanyNameSuccessValidation, newCompanyNameErrorValidation, newCopmanyAddressSuccessValidation, newCompanyAddressErrorValidation } from '../../../../action-creators/companies-page/new-company';

const withValidationLogic = AddCompanyForm => {
    return class extends CustomValidation {
        constructor(props) {
            super(props)
        }

        validateForm = async () => {
            const {
                newCompany: { name: { text: name }, address: { text: address }},
                validateCompanyName,
                validateCompanyAddress,
                dispatch
            } = this.props;

            this.trySubmit();

            let valMes1 = await validateCompanyName(name);

            valMes1 === '' ? 
            dispatch(newCompanyNameSuccessValidation()) : 
            dispatch(newCompanyNameErrorValidation(valMes1));

            let valMes2 = await validateCompanyAddress(address);

            valMes2 === '' ?
            dispatch(newCopmanyAddressSuccessValidation()) :
            dispatch(newCompanyAddressErrorValidation(valMes2));

            return !valMes1.length && !valMes2.length;
        }

        onCompanyNameBlur = async () => {
            if(!this.hasAlreadyTrySubmit())
                return;

            const { newCompany: { name: { text: name } } } = this.props;

            const { dispatch, validateCompanyName } = this.props;

            let valMes = await validateCompanyName(name);

            valMes === '' ?
                dispatch(newCompanyNameSuccessValidation()) :
                dispatch(newCompanyNameErrorValidation(valMes));
        }

        onCompanyAddressBlur = async () => {
            if(!this.hasAlreadyTrySubmit())
                return;

            const { newCompany: { address: { text: address } } } = this.props;

            const { dispatch, validateCompanyAddress } = this.props;

            let valMes = await validateCompanyAddress(address);

            valMes === '' ?
                dispatch(newCopmanyAddressSuccessValidation()) :
                dispatch(newCompanyAddressErrorValidation(valMes));
        }

        render() {
            return (
                <AddCompanyForm {...this.props}
                    validateForm={this.validateForm}
                    onCompanyNameBlur={this.onCompanyNameBlur}
                    onCompanyAddressBlur={this.onCompanyAddressBlur} />
            )
        }
    }
}

export default withValidationLogic