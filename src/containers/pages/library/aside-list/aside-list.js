import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';

import {entityGroup as namesGroupsEntities} from '../utils'

import {
    saveLoadedGroupsEntities,
    prepareLoadingGroupsEntities,
    finishLoadingGroupsEntities
} from '../../../../action-creators/library-page'
import withStaffixService from '../../../../hoc/hoc-services/with-staffix-service';
import AsideListView from '../../../../components/pages/library/aside-list-view';

class AsideList extends Component{
    constructor(props){
        super(props);
    }

    downloadAndSaveGroupsEntities = (activeTab) => {
        const {
            dispatch,
            staffixService
        } = this.props;
        
        return new Promise((resolve, reject) => {
            let promise;
            debugger;
            if(activeTab.toUpperCase() === namesGroupsEntities.COMPETENCE.toUpperCase() || activeTab === '')
                promise = staffixService.getCompetenceGroups();
            if(activeTab.toUpperCase() === namesGroupsEntities.INDICATOR.toUpperCase())
                promise = staffixService.getIndicatorGroups();
            if(activeTab.toUpperCase() === namesGroupsEntities.QUESTION.toUpperCase())
                promise = staffixService.getQuestionGroups();

            if(promise === undefined)
                reject();
            
            promise.then((groupsEntities) => {
                debugger;
                dispatch(saveLoadedGroupsEntities(groupsEntities));
                resolve();
            })
        })
    }

    componentDidMount() {
        const {
            activeTab,
            dispatch
        } = this.props;

        dispatch(prepareLoadingGroupsEntities());
        this.downloadAndSaveGroupsEntities(activeTab)
            .then(() => {
                dispatch(finishLoadingGroupsEntities());
            })
    }

    componentDidUpdate() {
        const {
            isGroupsEntitiesNeedToUpdate,
            activeTab,
            dispatch
        } = this.props;

        if(!isGroupsEntitiesNeedToUpdate)
            return;

        dispatch(prepareLoadingGroupsEntities());
        this.downloadAndSaveGroupsEntities(activeTab)
            .then(() => {
                dispatch(finishLoadingGroupsEntities());
            })
    }

    render() {
        const {
            groupsEntities,
            loadingGroupsEntities
        } = this.props;

        if(loadingGroupsEntities)
            return <h2>Loading...</h2>

        return (
            <AsideListView 
                items={{
                    values: groupsEntities,
                    onClick: () => {}
                }}
                editButton={{
                    name: 'Редактировать',
                    onClick: () => {}
                }}/>
        );
    }
}

AsideList.propTypes = {
    groupsEntities: PropTypes.arrayOf({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired
    }).isRequired,
    activeTab: PropTypes.string.isRequired,
    loadingGroupsEntities: PropTypes.bool.isRequired,
    isGroupsEntitiesNeedToUpdate: PropTypes.bool.isRequired
}

const mapStoreToProps = ({
    libraryPage: {
        activeTab,
        groupsEntities,
        loadingGroupsEntities,
        isGroupsEntitiesNeedToUpdate
    }
}) => {
    return {
        activeTab,
        groupsEntities,
        loadingGroupsEntities,
        isGroupsEntitiesNeedToUpdate
    };
}

export default connect(mapStoreToProps)(withStaffixService(AsideList));