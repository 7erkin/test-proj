import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';

import {
    prepareLoadingEntities,
    finishLoadingEntities,
    saveLoadedEntities,
    updateNameSearchEntity
} from '../../../../action-creators/library-page'
import CenterListView from '../../../../components/pages/library/center-list-view';
import withData from '../../../../hoc/with-center-list-data';
import withStaffixService from '../../../../hoc/hoc-services/with-staffix-service';

class CenterList extends Component{
    constructor(props){
        super(props);
    }

    onNameSearchEntityChange = nextName => {
        this.props.dispatch(updateNameSearchEntity(nextName));
    }

    componentDidUpdate() {
        const {
            dispatch, getData, isEntitiesNeedToUpdate, idActiveGroupEntity
        } = this.props;

        if(!isEntitiesNeedToUpdate)
            return;
            
        dispatch(prepareLoadingEntities());
        getData(idActiveGroupEntity)
            .then(entities => {
                dispatch(saveLoadedEntities(entities));
                dispatch(finishLoadingEntities());
            })
    }

    render() {
        const {
            entities,
            loadingEntities,
            nameSearchEntity,
            isEntitiesNeedToUpdate,
            idActiveGroupEntity,
            groupEntitiesDescription
        } = this.props;

        if(isNaN(idActiveGroupEntity))
            return <h2>Choose entity group to see entities</h2>

        if(loadingEntities || isEntitiesNeedToUpdate)
            return <h2>Loading...</h2>

        return (
            <CenterListView 
                entities={entities}
                groupEntitiesDescription={groupEntitiesDescription}
                searchEntity={{
                    value: nameSearchEntity,
                    onChange: this.onNameSearchEntityChange
                }}/>
        );
    }
}

CenterList.propTypes = {
    entities: PropTypes.arrayOf({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired
    }).isRequired,
    getData: PropTypes.func.isRequired,
    loadingEntities: PropTypes.bool.isRequired,
    nameSearchEntity: PropTypes.string.isRequired,
    isEntitiesNeedToUpdate: PropTypes.bool.isRequired,
    idActiveGroupEntity: PropTypes.number.isRequired,
    groupEntitiesDescription: PropTypes.string.isRequired
}

const mapStoreToProps = ({
    libraryPage: {
        visibleEntities,
        loadingEntities,
        nameSearchEntity,
        isEntitiesNeedToUpdate,
        idActiveGroupEntity,
        activeTab,
        groupsEntities
    }
}) => {

    let groupEntitiesDescription = '';

    if(!isNaN(idActiveGroupEntity)){
        const index = groupsEntities.findIndex(el => el.id === idActiveGroupEntity);
        groupEntitiesDescription = groupsEntities[index].description;
    }

    return {
        entities: visibleEntities,
        loadingEntities,
        nameSearchEntity,
        isEntitiesNeedToUpdate,
        idActiveGroupEntity,
        activeTab,
        groupEntitiesDescription
    };
}

export default connect(mapStoreToProps)(withStaffixService(withData(CenterList)));