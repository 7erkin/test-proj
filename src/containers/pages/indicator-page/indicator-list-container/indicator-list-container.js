import React, {Component, Fragment} from 'react'

import {connect} from 'react-redux'
import Spinner from '../../../../components/spinner';
import ErrorIndicator from '../../../../components/error-indicator';

import {
    Link
} from 'react-router-dom'
import NoChoosenIndicatorGroup from '../../../../components/pages/indicator/no-choosen-indicator-group';
import EditForm1Template from '../../../../components/common/template/edit-form1-template/edit-form1-template';
import IndicatorAddFormContainer from '../indicator-add-form-container';
import IndicatorEditFormContainer from '../indicator-edit-form-container';
import withStaffixService from '../../../../hoc/with-staffix-service';

import {
    entityActionCreator,
    loadingActionCreator,
    visibleActionCreator,
    pointedEntityActionCreator,
    editEntityAcionCreator
} from '../../../../action-creators/indicator'

// import {getEntityById} from '../../../../utils'
const getEntityById = (iterableCollection, id) => {
    const indexEntity = Array.prototype.findIndex.call(iterableCollection, el => el.id == id);
    return iterableCollection[indexEntity];
}

// три кейса - переход по ссылке, переход по клику на группу, переход по клику на пейджинг
class IndicatorListContainer extends Component {
    constructor(props) {
        super(props);
    }

    // переход по ссылке. Должны подгрузить индикаторы (по первой странице), обновить активную группу
    componentDidMount() {
        const indicatorGroupId = this.props.match.params.id || null;

        if(indicatorGroupId !== null) // когда переход по ссылке
        {
            const dispatch = this.props.dispatch;

            dispatch(entityActionCreator.setActiveIndicatorGroupId(indicatorGroupId)); // устанавливаем активную группу чтобы отобразить активную группу на списке групп
            dispatch(loadingActionCreator.setLoadingIndicators(true));

            this.props.staffixService.getIndicators(indicatorGroupId)
                .then(indicators => {
                    dispatch(entityActionCreator.saveIndicators(indicators));
                    dispatch(loadingActionCreator.setLoadingIndicators(false));
                })
        }    
    }

    componentWillUnmount() {
        this.props.dispatch(entityActionCreator.resetActiveIndicatorGroupId());
        this.props.dispatch(entityActionCreator.resetIndicators());
    }

    onAddIndicatorClick = () => {
        this.props.dispatch(visibleActionCreator.setAddIndicatorFormVisible(true));
    }

    onEditIndicatorClick = (id) => {
        this.props.dispatch(editEntityAcionCreator.setEditIndicator(this.props.activeIndicatorGroupId, this.props.indicators, id));
        this.props.dispatch(visibleActionCreator.setEditIndicatorFormVisible(true));
    }

    onIndicatorSearch = (pattern) => {
        this.props.dispatch(loadingActionCreator.setLoadingIndicators(true));
        this.props.staffixService.getIndicatorsByPattern(this.props.match.params.id, pattern)
            .then(indicators => {
                this.props.dispatch(entityActionCreator.saveIndicators(indicators));
                this.props.dispatch(loadingActionCreator.setLoadingIndicators(false));
            })
    }

    onSubmit = evt => {
        evt.preventDefault();
        if(!window.confirm('Delete pointed indicators?')) return;
        this.props.dispatch(loadingActionCreator.setLoadingIndicators(true));
        this.props.staffixService.deleteIndicators(this.props.match.params.id, this.props.pointedIndicatorsForDelete)
            .then(() => this.props.staffixService.getIndicators(this.props.match.params.id))
            .then((indicators) => {
                this.props.dispatch(entityActionCreator.saveIndicators(indicators));
                this.props.dispatch(pointedEntityActionCreator.resetPointedIndicatorsForDelete());
                this.props.dispatch(loadingActionCreator.setLoadingIndicators(false));
            });
    }

    onChecked = (indicatorId) => {
        this.props.dispatch(pointedEntityActionCreator.updatePointedIndicatorsForDelete(indicatorId));
    }

    render(){
        const {
            visible,
            match,
            indicatorGroups,
            indicators,
            pointedIndicatorsForDelete,
            loading,
            error
        } = this.props;

        const indicatorGroupId = match.params.id || null;

        if(indicatorGroupId == null)
            return <NoChoosenIndicatorGroup />;

        if(loading.indicators)
            return <Spinner />;
            
        const activeIndicatorGroup = getEntityById(indicatorGroups, indicatorGroupId);

        if(activeIndicatorGroup == undefined)
            return null;

        if(visible.editIndicatorForm)
            return <IndicatorEditFormContainer />

        if(visible.addIndicatorForm)
            return <IndicatorAddFormContainer />

        return(
            <EditForm1Template 
                    onSubmit={this.onSubmit}
                    search={{
                        onEntitySearch: this.onIndicatorSearch,
                        value: ''
                    }}
                    description={activeIndicatorGroup.description}
                    addEntityButton={{ 
                        onClick: this.onAddIndicatorClick,
                        name: 'Add indicator'
                    }}
                    entities={indicators}
                    deleteButtonName='Delete indicators'
                    rednerEntity={(indicator) => {
                        const isPointedOnDelete = pointedIndicatorsForDelete.indexOf(indicator.id) !== -1;
                        return (
                            <Fragment>
                                <Link to="#" onClick={evt => {
                                    evt.preventDefault();
                                    this.onEditIndicatorClick(indicator.id);
                                }}>
                                    {indicator.name}
                                </Link> 
                                <input type="checkbox" onChange={() => this.onChecked(indicator.id)} checked={isPointedOnDelete}/>
                            </Fragment>
                        );
                    }}
            />
        );
    }
}

const mapStateToProps = (store) => {
    const indicatorPage = store.indicatorPage;

    return {
        visible: indicatorPage.visible,
        indicatorGroups: indicatorPage.entity.indicatorGroups,
        indicators: indicatorPage.entity.indicators,
        activeIndicatorGroupId: indicatorPage.entity.activeIndicatorGroupId,
        pointedIndicatorsForDelete: indicatorPage.pointedEntity.indicatorsForDelete,
        loading: indicatorPage.loading,
        error: indicatorPage.loading,
    }
}

export default connect(mapStateToProps)(withStaffixService(IndicatorListContainer));