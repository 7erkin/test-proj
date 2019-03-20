import React, { Component } from 'react'
import DummySkillupService from '../../../../services/dummy-staffix-service';
import CompanyEditor from '../../../../components/pages/company/copmany-editor';
import SubdivisionAddFormContainer from '../subdivisions-add-form-container'
import { 
    resetNewCompany, 
    setNewCompanyName, 
    setNewCompanyDescription, 
    deleteNewCompanySubdivisions, 
    updateNewCompanyPointedSubdivisions, 
    updateVisibleSubdivisionAddForm
} from '../../../../action-creators/company';
import { connect } from 'react-redux';

class CompanyCreatorContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            service: new DummySkillupService()
        }
    }

    componentWillUnmount() {
        this.props.dispatch(resetNewCompany());
    }

    onNameChange = name => {
        this.props.dispatch(setNewCompanyName(name));
    };

    onDescriptionChange = description => {
        this.props.dispatch(setNewCompanyDescription(description));
    };

    onSubmit = () => {
        const newCompany = this.props.newCompany;

        this.state.service.createCompany({
            name: newCompany.name,
            description: newCompany.description,
            subdivisions: newCompany.subdivisions
        });
        
        this.onBack();
    }

    onSubdivisionsDelete = () => {
        const {
            dispatch,
            editCompany
        } = this.props;

        dispatch(deleteNewCompanySubdivisions());
    }

    onSubdivisionChecked = (id) => {
        this.props.dispatch(updateNewCompanyPointedSubdivisions(id));
    }

    onAddSubdivisionsClicked = () => {
        this.props.dispatch(updateVisibleSubdivisionAddForm());
    }

    onBack = () => {
        this.props.history.goBack();
    }

    render() {
        if(this.props.visible.subdivisionAddForm)
            return <SubdivisionAddFormContainer/>

        return (
            <CompanyEditor 
                company={this.props.newCompany}
                pointedSubdivisionsForDelete={this.props.newCompany.pointedSubdivisions}
                onNameChange={this.onNameChange}
                onDescriptionChange={this.onDescriptionChange}
                onSubmit={this.onSubmit}
                onSubdivisionsDelete={this.onSubdivisionsDelete}
                onSubdivisionChecked={this.onSubdivisionChecked}
                onAddSubdivisionsClicked={this.onAddSubdivisionsClicked}
                onChecked={this.onSubdivisionChecked}
                onBack={this.onBack}/>
        );
    }
}

const mapStoreToProps = (store) => {
    const companyPage = store.companyPage;

    return {
        newCompany: companyPage.newCompany,
        visible: companyPage.visible
    };
}

export default connect(mapStoreToProps)(CompanyCreatorContainer);