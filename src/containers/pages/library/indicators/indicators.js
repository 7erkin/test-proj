import React from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types'

import withStaffixService from '../../../../hoc/hoc-services/with-staffix-service'
import IndicatorsListView from '../../../../components/pages/library/indicators/indicators-list-view';

import {
    prepareLoadingEntities as prepareLoadingIndicators,
    finishLoadingEntities as finishLoadingIndicators,
    updateNameSearchEntity as updateNameSearchIndicator,
    saveLoadedEntities as saveLoadedIndicators,
    updateIdActiveGroupEntity as updateIdActiveGroupIndicators
} from '../../../../action-creators/library-page'

class Indicators extends React.Component {
    constructor(props) {
        super(props);
    }

    onSearchIndicatorsChange = (nextIndicatorName) => {
        this.props.dispatch(updateNameSearchIndicator(nextIndicatorName));
    }

    componentWillUnmount() {
        this.props.dispatch(updateIdActiveGroupIndicators(NaN));
        this.props.dispatch(updateNameSearchIndicator(''));
    }

    componentDidUpdate() {
        const {
            idActiveGroupEntity,
            dispatch,
            staffixService,
            isIndicatorsNeedToUpdate
        } = this.props;

        if(!isIndicatorsNeedToUpdate)
            return;

        dispatch(prepareLoadingIndicators());
        staffixService.getIndicators(idActiveGroupEntity)
            .then(indicators => {
                dispatch(saveLoadedIndicators(indicators));
                this.props.dispatch(updateNameSearchIndicator(''));
                dispatch(finishLoadingIndicators());
            })
    }

    render() {
        const {
            indicators,
            nameSearchIndicator,
            groupIndicatorDescription,
            idActiveGroupEntity,
            loadingIndicators
        } = this.props;

        debugger;

        if(isNaN(idActiveGroupEntity))
            return <h2>Choose group to see entities</h2>

        if(loadingIndicators)
            return <h2>Loading...</h2>

        return (
            <IndicatorsListView 
                indicators={indicators}
                groupIndicatorDescription={groupIndicatorDescription}
                searchIndicators={{
                    value: nameSearchIndicator,
                    onChange: this.onSearchIndicatorsChange
                }}/>
        );
    }
}

Indicators.propTypes = {
    indicators: PropTypes.arrayOf({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired
    }).isRequired,
    nameSearchIndicator: PropTypes.string.isRequired,
    groupIndicatorDescription: PropTypes.string.isRequired,
    idActiveGroupEntity: PropTypes.string.isRequired,
    isIndicatorsNeedToUpdate: PropTypes.bool.isRequired
}

const mapStoreToProps = ({
    libraryPage: {
        visibleEntities: indicators,
        nameSearchEntity: nameSearchIndicator,
        idActiveGroupEntity,
        groupsEntities: groupsIndicators,
        isEntitiesNeedToUpdate: isIndicatorsNeedToUpdate,
        loadingEntities: loadingIndicators
    }
}) => {
    const indexActiveGroupEntity = groupsIndicators.findIndex(el => el.id === idActiveGroupEntity);

    return {
        isIndicatorsNeedToUpdate,
        indicators,
        nameSearchIndicator,
        idActiveGroupEntity,
        loadingIndicators,
        groupIndicatorDescription: indexActiveGroupEntity === -1 ? '' : groupsIndicators[indexActiveGroupEntity].description
    };
}

export default connect(mapStoreToProps)(withStaffixService(Indicators));