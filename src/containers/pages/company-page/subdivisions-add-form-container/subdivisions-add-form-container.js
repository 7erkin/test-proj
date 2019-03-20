import React, { Component } from 'react'
import { connect } from 'react-redux';
import SubdivisionAddForm from '../../../../components/pages/company/subdivision-add-form';
import { 
    addSubdivisionsToCompany, 
    updateSubdivisionName, 
    updateSubdivisionDescription, 
    addSubdivision, 
    resetAddingSubdivision, 
    deleteSubdivision,
    leaveForm,
    updateVisibleSubdivisionAddForm
} from '../../../../action-creators/company';

class SubdivisionsAddFormContainer extends Component {
    constructor(props){
        super(props);
    }

    componentWillUnmount() {
        this.props.dispatch(leaveForm());
    }
    
    onSubmit = () => {
        this.props.dispatch(addSubdivisionsToCompany());
        this.onBack();
    }

    onNameChange = name => {
        this.props.dispatch(updateSubdivisionName(name));
    }

    onDescriptionChange = description => {
        this.props.dispatch(updateSubdivisionDescription(description));
    }

    onAddSubdivision = () => {
        this.props.dispatch(addSubdivision());
    }

    onResetAddingSubdivision = () => {
        this.props.dispatch(resetAddingSubdivision());
    }

    onDeleteSubdivision = id => {
        this.props.dispatch(deleteSubdivision(id));
    }

    onBack = () => {
        this.props.dispatch(updateVisibleSubdivisionAddForm());
    }

    render() {

        return (
            <SubdivisionAddForm 
                {...this.props} 
                onSubmit={this.onSubmit}
                onNameChange={this.onNameChange}
                onDescriptionChange={this.onDescriptionChange}
                onAddSubdivision={this.onAddSubdivision}
                onResetAddingSubdivision={this.onResetAddingSubdivision}
                onDeleteSubdivision={this.onDeleteSubdivision}
                onBack={this.onBack}/>
        );
    }
}

const mapStoreToProps = (store) => {
    return {
        newSubdivisions: store.companyPage.newSubdivisions,
        newSubdivision: store.companyPage.newSubdivision
    };
}

export default connect(mapStoreToProps)(SubdivisionsAddFormContainer);