import React, {Fragment} from 'react';
import {connect} from 'react-redux'

import {
    Link
} from 'react-router-dom'

import {
    entityActionCreator,
    loadingActionCreator,
    visibleActionCreator,
    pointedEntityActionCreator,
    editEntityActionCreator
} from '../../../../action-creators/competence'

import Spinner from '../../../../components/spinner';
import withStaffixService from '../../../../hoc/with-staffix-service';
import EditForm1Template from '../../../../components/common/template/edit-form1-template/edit-form1-template';
import CompetenceEditFormContainer from '../competence-edit-form-container';
import CompetenceAddFormContainer from '../competence-add-form-container';

class CompetenceListContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const competenceGroupId = this.props.match.params.id || null;
        const {props} = this;
        if(competenceGroupId != null) {
            const {dispatch} = props;

            dispatch(entityActionCreator.setActiveCompetenceGroupId(competenceGroupId)); // устанавливаем активную группу чтобы отобразить активную группу на списке групп
            dispatch(loadingActionCreator.startLoadingCompetencies());

            props.staffixService.getCompetencies(competenceGroupId)
                .then(competencies => {
                    dispatch(entityActionCreator.saveCompetencies(competencies));
                    dispatch(loadingActionCreator.competenciesLoaded());
                })
        }
    }

    onCompetenceSearch = (pattern) => {}

    onAddCompetenceClick = () => {
        this.props.dispatch(visibleActionCreator.setAddCompetenceFormVisible(true));
    }

    onEditCompetenceClick = (id) => {
        const {dispatch} = this.props;
        dispatch(entityActionCreator.setEditCompetenceId(id));
        dispatch(visibleActionCreator.setEditCompetenceFormVisible(true));
    }

    onCheck = (id) => {
        this.props.dispatch(pointedEntityActionCreator.updateCompetenciesForDelete(id));
    }

    onSubmit = () => {
        this.props.dispatch(loadingActionCreator.startLoadingCompetencies());
        this.props.staffixService.deleteCompetencies(this.props.activeCompetenceGroupId, this.props.pointedCompetenciesForDelete)
            .then(() => this.props.staffixService.getCompetencies(this.props.activeCompetenceGroupId))
            .then(competencies => {
                this.props.dispatch(entityActionCreator.saveCompetencies(competencies));
                this.props.dispatch(loadingActionCreator.competenciesLoaded());
                this.props.dispatch(pointedEntityActionCreator.resetCompetenciesForDelete());
            })
    }

    render = () => {
        const {
            competencies,
            competenceGroups,
            activeCompetenceGroupId
        } = this.props.entity;

        const {
            match,
            loading,
            visible,
            pointedCompetenciesForDelete
        } = this.props;

        const competenceGroupId = match.params.id || null;

        if(competenceGroupId == null)
            return <h1>No choosen group</h1>;

        if(loading.competencies)
            return <Spinner />;
            
        if(visible.editCompetenceForm)
            return <CompetenceEditFormContainer />

        if(visible.addCompetenceForm)
            return <CompetenceAddFormContainer />

        const index = competenceGroups.findIndex(el => el.id == activeCompetenceGroupId);

        const activeCompetenceGroup = competenceGroups[index];

        if(activeCompetenceGroup == undefined)
            return <h1>No group</h1>;

        return (
            <EditForm1Template
                onSubmit={this.onSubmit}
                search={{
                    onEntitySearch: this.onCompetenceSearch,
                    value: ''
                }}
                description={activeCompetenceGroup.description}
                addEntityButton={{ 
                    onClick: this.onAddCompetenceClick,
                    name: 'Add competence'
                }}
                entities={competencies}
                deleteButtonName='Delete competencies'
                rednerEntity={(competence) => {
                    const isPointedOnDelete = pointedCompetenciesForDelete.indexOf(competence.id) !== -1;
                    return (
                        <Fragment>
                            <Link to="#" onClick={evt => {
                                evt.preventDefault();
                                this.onEditCompetenceClick(competence.id);
                            }}>
                                {competence.name}
                            </Link> 
                            <input type="checkbox" onChange={() => this.onCheck(competence.id)} checked={isPointedOnDelete}/>
                        </Fragment>
                    );
                }}
            />
        );
    } 
}

const mapStoreToProps = (store) => {
    const {competencePage} = store;
    return {
        activeCompetenceGroupId: competencePage.entity.activeCompetenceGroupId,
        visible: competencePage.visible,
        loading: competencePage.loading,
        entity: competencePage.entity,
        pointedCompetenciesForDelete: competencePage.pointedEntity.competenciesForDelete
    };
}

export default connect(mapStoreToProps)(withStaffixService(CompetenceListContainer));