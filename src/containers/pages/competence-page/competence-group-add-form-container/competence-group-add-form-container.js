import React, { Component } from 'react'
import AddForm2Template from '../../../../components/common/template/add-form2-template';
import { connect } from 'react-redux';

import {
    newEntityActionCreator,
    visibleActionCreator,
    entityActionCreator,
    loadingActionCreator
} from '../../../../action-creators/competence'
import withStaffixService from '../../../../hoc/with-staffix-service';

class CompetenceGroupAddFormContainer extends Component {
    constructor(props){
        super(props);
    }

    componentWillUnmount() {
        this.props.dispatch(newEntityActionCreator.resetNewCompetenceGroup());
        this.props.dispatch(visibleActionCreator.setAddCompetenceGroupFormVisible(false));
    }

    onNameChange = name => {
        this.props.dispatch(newEntityActionCreator.updateNewCompetenceGroupName(name));
    }

    onDescriptionChange = description => {
        this.props.dispatch(newEntityActionCreator.updateNewCompetenceGroupDescription(description));
    }

    onSubmit = () => {
        this.props.dispatch(loadingActionCreator.startLoadingCompetenceGroups());
        this.props.staffixService.createCompetenceGroup(this.props.newCompetenceGroup)
            .then(() => {
                return this.props.staffixService.getCompetenceGroups()
            })
            .then((competenceGroups) => {
                this.props.dispatch(entityActionCreator.saveCompetenceGroups(competenceGroups));
                this.props.dispatch(loadingActionCreator.competenceGroupsLoaded());
                this.onBack();
            })
    }

    onBack = () => {
        this.props.dispatch(visibleActionCreator.setAddCompetenceGroupFormVisible(false));
    }

    render() {
        const {
            newCompetenceGroup
        } = this.props;

         return (
             <AddForm2Template 
                inputName={{
                    value: newCompetenceGroup.name,
                    onChange: this.onNameChange,
                    placeholder: 'Input competence group name'
                }}
                inputDescription={{
                    value: newCompetenceGroup.description,
                    onChange: this.onDescriptionChange,
                    placeholder: 'Input competence group description'
                }}
                onSubmit={this.onSubmit}
                onBack={this.onBack}
             />
         );
    }
}

const mapStoreToProps = store => {
    return {
        newCompetenceGroup: store.competencePage.newEntity.competenceGroup
    }
}

export default connect(mapStoreToProps)(withStaffixService(CompetenceGroupAddFormContainer));