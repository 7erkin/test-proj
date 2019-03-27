import React, {Component} from 'react'
import {connect} from 'react-redux'
import Spinner from '../../../../components/spinner';

import {
    Link
} from 'react-router-dom'
import withStaffixService from '../../../../hoc/with-staffix-service';

import {
    loadingActionCreator,
    entityActionCreator,
    pointedEntityActionCreator
} from '../../../../action-creators/indicator'
import AsideList from '../../../../components/common/aside-list';

class IndicatorAsideGroupListContainer extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount() {
        const dispatch = this.props.dispatch;

        dispatch(loadingActionCreator.setLoadingIndicatorGroups(true));

        this.props.staffixService.getIndicatorGroups()
            .then(indicatorGroups => {
                dispatch(entityActionCreator.saveIndicatorGroups(indicatorGroups));
                dispatch(loadingActionCreator.setLoadingIndicatorGroups(false));
            })
    }

    render() {
        const {
            activeIndicatorGroupId,
            dispatch,
            indicatorGroups,
            loading,
            error
        } = this.props;

        if(loading.indicatorGroups)
            return <Spinner />

        return (
            <AsideList 
                listItems={indicatorGroups}
                renderListItem={(indicatorGroup) => {
                    return (
                        <Link 
                        onClick={() => {
                            dispatch(entityActionCreator.setActiveIndicatorGroupId(indicatorGroup.id));
                            dispatch(loadingActionCreator.setLoadingIndicators(true));
                            dispatch(pointedEntityActionCreator.resetPointedIndicatorsForDelete());
                            this.props.staffixService.getIndicators(indicatorGroup.id)
                                .then(indicators => {
                                    this.props.dispatch(entityActionCreator.saveIndicators(indicators));
                                    this.props.dispatch(loadingActionCreator.setLoadingIndicators(false));
                                })
                        }} 
                        to={`/indicators/group/${indicatorGroup.id}`}>
                            <span className={indicatorGroup.id == activeIndicatorGroupId ? 'active-indicator-group' : ''}>{indicatorGroup.name}</span>
                        </Link>
                    );
                }}/>
        );
    }
}

const mapStateToProps = (store) => {
    const {indicatorPage} = store;
     return {
         activeIndicatorGroupId: indicatorPage.entity.activeIndicatorGroupId,
         indicatorGroups: indicatorPage.entity.indicatorGroups,
         loading: indicatorPage.loading,
         error: indicatorPage.error
     };
}

export default connect(mapStateToProps)(withStaffixService(IndicatorAsideGroupListContainer));