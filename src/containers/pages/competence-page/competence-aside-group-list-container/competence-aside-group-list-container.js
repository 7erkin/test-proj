import React from 'react'

import {
    Link
} from 'react-router-dom'

import {
    entityActionCreator,
    loadingActionCreator,
    pointedEntityActionCreator
} from '../../../../action-creators/competence'

import Spinner from '../../../../components/spinner';
import { connect } from 'react-redux';
import AsideList from '../../../../components/common/aside-list';
import withStaffixService from '../../../../hoc/with-staffix-service';

class CompetenceAsideGroupListContainer extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount() {
        const dispatch = this.props.dispatch;

        dispatch(loadingActionCreator.startLoadingCompetenceGroups());

        this.props.staffixService.getCompetenceGroups()
            .then(competenceGroups => {
                dispatch(entityActionCreator.saveCompetenceGroups(competenceGroups));
                dispatch(loadingActionCreator.competenceGroupsLoaded());
            })
    }

    render() {
        const {
            activeCompetenceGroupId,
            dispatch,
            competenceGroups,
            loading
        } = this.props;

        if(loading.competenceGroups)
            return <Spinner />

        return (
            <AsideList 
                listItems={competenceGroups}
                renderListItem={(competenceGroup) => {
                    return (
                        <Link 
                        onClick={(evt) => {
                            dispatch(entityActionCreator.setActiveCompetenceGroupId(competenceGroup.id));
                            dispatch(loadingActionCreator.startLoadingCompetencies());
                            this.props.staffixService.getCompetencies(competenceGroup.id)
                                .then(competencies => {
                                    this.props.dispatch(entityActionCreator.saveCompetencies(competencies));
                                    this.props.dispatch(loadingActionCreator.competenciesLoaded());
                                })
                        }} 
                        to={`/competencies/group/${competenceGroup.id}`}>
                            <span className={competenceGroup.id == activeCompetenceGroupId ? 'active-indicator-group' : ''}>{competenceGroup.name}</span>
                        </Link>
                    );
                }}
            />
        );
    }
}

const mapStateToProps = (store) => {
    const {competencePage} = store;
     return {
         activeCompetenceGroupId: competencePage.entity.activeCompetenceGroupId,
         competenceGroups: competencePage.entity.competenceGroups,
         loading: competencePage.loading,
         error: competencePage.error
     };
}

export default connect(mapStateToProps)(withStaffixService(CompetenceAsideGroupListContainer));