import React, { Component } from 'react'
import { connect } from 'react-redux';
import EditForm1Template from '../../../../components/common/template/edit-form1-template/edit-form1-template';
import { Link } from 'react-router-dom';
import Spinner from '../../../../components/spinner';
import withStaffixService from '../../../../hoc/with-staffix-service';

import {
    loadingActionCreator,
    entityActionCreator,
    visibleActionCreator,
    pointedEntityActionCreator,
    editEntityActionCreator
} from '../../../../action-creators/competence'
import CompetenceGroupAddFormContainer from '../competence-group-add-form-container';
import CompetenceGroupEditFormContainer from '../competence-group-edit-form-container';

class CompetenceGroupListContainer extends Component {
    constructor(props) {
        super(props);
    }

    onSubmit = () => {
        this.props.dispatch(loadingActionCreator.startLoadingCompetenceGroups());
        this.props.staffixService.deleteCompetenceGroups(this.props.pointedCompetenceGroupsForDelete)
            .then(() => {
                return this.props.staffixService.getCompetenceGroups()
            })
            .then((competenceGroups) => {
                this.props.dispatch(entityActionCreator.saveCompetenceGroups(competenceGroups));
                this.props.dispatch(loadingActionCreator.competenceGroupsLoaded());
            })
    }

    onCompetenceGroupSearch = (name) => {
        
    }

    onAddCompetenceGroupClick = () => {
        this.props.dispatch(visibleActionCreator.setAddCompetenceGroupFormVisible(true));
    }

    onEditCompetenceGroupClick = (id) => {
        this.props.dispatch(entityActionCreator.setActiveCompetenceGroupId(id));
        this.props.dispatch(editEntityActionCreator.setEditCompetenceGroup(this.props.competenceGroups, id));
        this.props.dispatch(visibleActionCreator.setEditCompetenceGroupFormVisible(true));
    }

    onChecked = (id) => {
        this.props.dispatch(pointedEntityActionCreator.updateCompetenceGroupsForDelete(id));
    }

    render() {
        const {
            loading,
            visible,
            competenceGroups,
            pointedCompetenceGroupsForDelete
        } = this.props;

        if(loading.competenceGroups)
            return <Spinner />

        if(visible.addCompetenceGroupForm)
           return <CompetenceGroupAddFormContainer />

        if(visible.editCompetenceGroupForm)
           return <CompetenceGroupEditFormContainer />

        return (
            <EditForm1Template 
                onSubmit={this.onSubmit}
                search={{
                    value: '',
                    onChange: this.onCompetenceGroupSearch
                }}
                description='Some unknown description'
                addEntityButton={{
                    name: 'Add group',
                    onClick: this.onAddCompetenceGroupClick
                }}
                deleteButtonName='Delete pointed groups'
                entities={competenceGroups}
                rednerEntity={(group) => {
                    return (
                        <li key={group.id}>
                            <Link to="#" onClick={evt => {
                                evt.preventDefault();
                                this.onEditCompetenceGroupClick(group.id);
                            }}>
                                {group.name}
                            </Link>
                            <input type="checkbox" checked={pointedCompetenceGroupsForDelete.includes(group.id)} onChange={(evt) => this.onChecked(group.id)}/>
                        </li>
                    );}
                }/>
        );
    }
}

const mapStoreToProps = (store) => {
    const competencePage = store.competencePage;
    return {
        loading: competencePage.loading,
        visible: competencePage.visible,
        competenceGroups: competencePage.entity.competenceGroups,
        pointedCompetenceGroupsForDelete: competencePage.pointedEntity.competenceGroupsForDelete
    };
}

export default connect(mapStoreToProps)(withStaffixService(CompetenceGroupListContainer));