import React, { Component } from 'react'

import { connect } from 'react-redux';

import withStaffixService from '../../../../hoc/hoc-services/with-staffix-service'
import withValidationApi from './with-validation-api'
import withValidationLogic from './with-validation-logic'

import {
    updateNewCompanyName,
    updateNewCompanyAddress,
    resetNewCompany,
    newCompanySaved
} from '../../../../action-creators/companies-page/new-company'

import LoadingIndicator from '../../../../components/common/loading-indicator/loading-indicator';
import AddCompanyFormView from '../../../../components/pages/companies-page/add-company-form-view';
import { startSavingNewCompany, finishSavingNewCompany } from '../../../../action-creators/companies-page/network-waiting';

class AddCompanyForm extends Component {
    constructor(props) {
        super(props);
    }

    onSubmit = async () => {
        const {
            dispatch,
            staffixService,
            history,
            newCompany: {
                name: {
                    text: name
                },
                address: {
                    text: address
                }
            },
            validateForm
        } = this.props;

        if(!await validateForm())
            return;

        dispatch(startSavingNewCompany())

        await staffixService.createCompany({
            name,
            address
        })

        dispatch(newCompanySaved())

        history.push('/companies')

        dispatch(finishSavingNewCompany())
    }

    onCancel = () => {
        this.props.dispatch(resetNewCompany())
        this.props.history.push('/companies')
    }

    onCompanyNameChange = (name) => {
        this.props.dispatch(updateNewCompanyName(name))
    }

    onCompanyAddressChange = (address) => {
        this.props.dispatch(updateNewCompanyAddress(address))
    }

    render() {
        const {
            newCompany: {
                name: {
                    text: name,
                    errorMessage: errCompanyName
                },
                address: {
                    text: address,
                    errorMessage: errCompanyAddress
                }
            },
            onCompanyNameBlur,
            onCompanyAddressBlur,
            savingCopmany
        } = this.props;

        if(savingCopmany)
            return <LoadingIndicator />

        return (
            <AddCompanyFormView
                onSubmit={this.onSubmit} 
                onCancel={this.onCancel}
                companyName={{
                    value: name,
                    errorMessage: errCompanyName,
                    onChange: this.onCompanyNameChange,
                    onBlur: onCompanyNameBlur
                }}
                companyAddress={{
                    value: address,
                    errorMessage: errCompanyAddress,
                    onChange: this.onCompanyAddressChange,
                    onBlur: onCompanyAddressBlur
                }} />
        );
    }
}

const mapStoreToProps = ({
    companiesPage: {
        newCompany
    }
}) => {
    return {
        newCompany
    }
}

export default connect(mapStoreToProps)(withStaffixService(
                                            withValidationApi(
                                                withValidationLogic(AddCompanyForm))))