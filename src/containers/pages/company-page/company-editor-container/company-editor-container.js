import React, { Component } from 'react'
import DummySkillupService from '../../../../services/dummy-staffix-service';
import CompanyEditor from '../../../../components/pages/company/copmany-editor';
import { setEditCompany, resetEditCompany, setEditCompanyName, setEditCompanyDescription, deletePointedAddedSubdivisions, startDeletingSubdivisions, updatePointedSubdivisions, saveUpdatedSubdivisions, finishDeletingSubdivisions, updateVisibleSubdivisionAddForm } from '../../../../action-creators/company';
import SubdivisionsAddFormContainer from '../subdivisions-add-form-container';
import { connect } from 'react-redux';

class CompanyEditorContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            service: new DummySkillupService()
        }
    }

    componentDidMount() {
        const {
            dispatch,
            visibleCompanies,
            match
        } = this.props;

        const editCompanyIndex = visibleCompanies.findIndex(el => el.id == match.params.id);

        debugger;
        dispatch(setEditCompany(visibleCompanies[editCompanyIndex]));
    }

    componentWillUnmount() {
        this.props.dispatch(resetEditCompany());
    }

    onNameChange = name => {
        this.props.dispatch(setEditCompanyName(name));
    };

    onDescriptionChange = description => {
        this.props.dispatch(setEditCompanyDescription(description));
    };

    onAddSubdivisionsClicked = () => {
        this.props.dispatch(updateVisibleSubdivisionAddForm());
    }

    onSubmit = () => {
        const editCompany = this.props.editCompany;

        this.state.service.updateCompany({
            id: editCompany.id,
            name: editCompany.name,
            description: editCompany.description,
            newSubdivisions: editCompany.addedSubdivisions
        });

        this.onBack();
    }

    onSubdivisionsDelete = () => {
        const {
            dispatch,
            editCompany
        } = this.props;

        alert('ok')
        dispatch(deletePointedAddedSubdivisions());
        dispatch(startDeletingSubdivisions());
        this.state.service.deletePointedSubdivisions(editCompany.id, editCompany.pointedSubdivisions)
            .then(() => {
                return this.state.service.getCompany(editCompany.id);
            })
            .then((company) => {
                dispatch(saveUpdatedSubdivisions(company.subdivisions));
                dispatch(finishDeletingSubdivisions());
            })
    }

    onSubdivisionChecked = (id) => {
        this.props.dispatch(updatePointedSubdivisions(id));
    }

    onBack = () => {
        this.props.history.goBack();
    } 

    render() {
        if(this.props.visible.subdivisionAddForm)
            return <SubdivisionsAddFormContainer/>

        return (
            <CompanyEditor 
                company={this.props.editCompany}
                pointedSubdivisionsForDelete={this.props.pointedSubdivisionsForDelete}
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
        pointedSubdivisionsForDelete: [...companyPage.editCompany.pointedSubdivisions, ...companyPage.editCompany.pointedAddedSubdivisions],
        visibleCompanies: companyPage.visibleCompanies,
        editCompany: companyPage.editCompany,
        visible: companyPage.visible
    };
}

export default connect(mapStoreToProps)(CompanyEditorContainer);