import React, { Component } from 'react'
import { connect } from 'react-redux';

import AddForm2Template from '../../../../components/common/template/add-form2-template';
import withStaffixService from '../../../../hoc/with-staffix-service';

import {
    editEntityActionCreator,
    visibleActionCreator,
    loadingActionCreator,
    entityActionCreator
} from '../../../../action-creators/competence'

class CompetenceEditGroupForm extends Component {
    constructor(props){
        super(props);
    }

    componentWillUnmount() {
        this.props.dispatch(editEntityActionCreator.resetEditCompetenceGroup());
        this.props.dispatch(visibleActionCreator.setEditCompetenceGroupFormVisible(false));
    }
 
    onNameChange = name => {
        this.props.dispatch(editEntityActionCreator.updateEditCompetenceGroupName(name));
    }

    onDescriptionChange = description => {
        this.props.dispatch(editEntityActionCreator.updateEditCompetenceGroupDescription(description));
    }

    onSubmit = () => { 
        if(!window.confirm('Save changes?')) return;
        this.onBack();
        this.props.dispatch(loadingActionCreator.startLoadingCompetenceGroups());
        this.props.staffixService.updateCompetenceGroup(this.props.editCompetenceGroup)
            .then(() => {
                return this.props.staffixService.getCompetenceGroups();
            })
            .then(competenceGroups => {
                this.props.dispatch(entityActionCreator.saveCompetenceGroups(competenceGroups));
                this.props.dispatch(loadingActionCreator.competenceGroupsLoaded());
            })
    }

    onBack = () => {
        this.props.dispatch(visibleActionCreator.setEditCompetenceGroupFormVisible(false));
    }

    render() {
        const {
            editCompetenceGroup
        } = this.props;

         return (
             <AddForm2Template 
                inputName={{
                    value: editCompetenceGroup.name,
                    onChange: this.onNameChange,
                    placeholder: 'Input indicator group name'
                }}
                inputDescription={{
                    value: editCompetenceGroup.description,
                    onChange: this.onDescriptionChange,
                    placeholder: 'Input indicator group description'
                }}
                onSubmit={this.onSubmit}
                onBack={this.onBack}
             />
         );
    }
}

const mapStoreToProps = (store) => {
    const {competencePage} = store;
    return {
        editCompetenceGroup: competencePage.editEntity.competenceGroup
    };
}

export default connect(mapStoreToProps)(withStaffixService(CompetenceEditGroupForm));