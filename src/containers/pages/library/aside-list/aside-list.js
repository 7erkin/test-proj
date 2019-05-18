import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';

import {entityGroup as namesGroupsEntities} from '../utils'

import {
    saveLoadedGroupsEntities,
    prepareLoadingGroupsEntities,
    finishLoadingGroupsEntities,
    updateIdActiveGroupEntity
} from '../../../../action-creators/library-page'
import withStaffixService from '../../../../hoc/hoc-services/with-staffix-service';
import AsideListView from '../../../../components/pages/library/aside-list-view';
import withAsideListData from '../../../../hoc/with-aside-list-data';

class AsideList extends Component{
    constructor(props){
        super(props);
    }

    _loadDataAndSave = () => {
        const {
            dispatch,
            getData
        } = this.props;

        dispatch(prepareLoadingGroupsEntities());
        getData()
            .then((data) => {
                dispatch(saveLoadedGroupsEntities(data))
                dispatch(finishLoadingGroupsEntities());
            })
    }

    componentDidMount() {
        this._loadDataAndSave();
    }

    onGroupEntityClick = id => {
        this.props.dispatch(updateIdActiveGroupEntity(id));
    }

    componentDidUpdate() {
        const {
            isGroupsEntitiesNeedToUpdate,
        } = this.props;

        if(!isGroupsEntitiesNeedToUpdate)
            return;

        this._loadDataAndSave();
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
                    onClick: this.onGroupEntityClick
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

export default connect(mapStoreToProps)(withStaffixService(withAsideListData(AsideList)));