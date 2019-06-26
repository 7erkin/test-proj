import React from 'react'

import CustomInputView from '../../../common/custom-input-view'
import CustomSaveButtonView from '../../../common/custom-save-button'
import CustomCancelButtonView from '../../../common/custom-cancel-button'

import './style.css'
import { Typography } from '@material-ui/core';

const AddCompanyFormView = ({
    onSubmit,
    companyName: {
        value: companyName,
        errorMessage: errCompanyName,
        onChange: onCompanyNameChange,
        onBlur: onCompanyNameBlur
    },
    companyAddress: {
        value: companyAddress,
        errorMessage: errCompanyAddress,
        onChange: onCompanyAddressChange,
        onBlur: onCompanyAddressBlur
    },
    onCancel
}) => {
    return (
        <form className="add-company-form" onSubmit={evt => {
            evt.preventDefault()
            onSubmit()
        }}>
            <div className="container">
                <div className="field">
                    <CustomInputView 
                        label="Название организации" 
                        err={errCompanyName}
                        value={companyName}
                        onChange={onCompanyNameChange}
                        onBlur={onCompanyNameBlur} />
                </div>
                <div className="field">
                    <CustomInputView
                        label="Адрес организации" 
                        err={errCompanyAddress}
                        value={companyAddress}
                        onChange={onCompanyAddressChange} 
                        onBlur={onCompanyAddressBlur} />
                </div>
                <div className="buttons">
                    <CustomSaveButtonView />
                    <CustomCancelButtonView onClick={onCancel} />
                </div>
            </div>
        </form>
    )
}

export default AddCompanyFormView