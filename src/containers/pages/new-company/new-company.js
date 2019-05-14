import React, { Component } from 'react'
import NewCompanyPageComponent from '../../../components/pages/new-company';
import { connect } from 'react-redux';
import withStaffixService from '../../../hoc/hoc-services/with-staffix-service'

import {
    updateCompanyName,
    updateCompanyAddress,
    updateSubdivisionName,
    prepareSendingForm,
    resetNewCompanyForm,
    addOneMoreSubdivision
} from '../../../action-creators/new-company-page'

class NewCompanyPage extends Component {
    constructor(props) {
        super(props);
    }

    onSubmit = () => {
        const {
            dispatch,
            staffixService,
            history,
            companyName,
            companyAddress, 
            subdivisions
        } = this.props;

        dispatch(prepareSendingForm());
        staffixService.addCompany({
            name: companyName,
            address: companyAddress,
            subdivisions
        })
        .then(() => {
            dispatch(resetNewCompanyForm());
            history.push('/companies');
        })
    }

    onCancel = () => {
        this.props.history.push('/copmanies');
    }

    onCompanyNameChange = (name) => {
        this.props.dispatch(updateCompanyName(name));
    }

    onCompanyAddressChange = (address) => {
        this.props.dispatch(updateCompanyAddress(address));
    }

    onSubdivisionNameChange = (name) => {
        this.props.dispatch(updateSubdivisionName(name));
    }

    onAddOneMoreSubdivision = () => {
        this.props.dispatch(addOneMoreSubdivision());
    }

    render() {
        const {
            companyName,
            companyAddress,
            subdivisions,
            subdivisionName,
            sendingForm
        } = this.props;

        if(sendingForm)
            return <h2>Loading...</h2>

        return (
            <NewCompanyPageComponent 
                onSubmit={this.onSubmit} 
                onCancel={this.onCancel}
                inputCompanyName={{
                    value: companyName,
                    onChange: this.onCompanyNameChange
                }}
                inputCompanyAddress={{
                    value: companyAddress,
                    onChange: this.onCompanyAddressChange
                }}
                inputCompanySubdivisions={{
                    value: subdivisionName,
                    subdivisions,
                    onChange: this.onSubdivisionNameChange,
                    onAddOneMoreSubdivision: this.onAddOneMoreSubdivision
                }}/>
        );
    }
}

const mapStoreToProps = ({newCompanyPage}) => {
    return {
        ...newCompanyPage
    };
}

export default connect(mapStoreToProps)(withStaffixService(NewCompanyPage))