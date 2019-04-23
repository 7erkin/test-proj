import React, { Component } from 'react'
import { connect } from 'react-redux';
import withStaffixService from '../../hoc/with-staffix-service';
import { AccordeonIndicatorActionCreator } from '../../action-creators/common';
import Accordeon from '../../components/common/accordeon';
import Spinner from '../../components/spinner';


const {
    startLoadingIndicators,
    startLoadingIndicatorGroups,
    saveLoadedIndicators,
    saveLoadedIndicatorGroups,
    setActiveIndicatorGroup,
    finishLoadingIndicators,
    finishLoadingIndicatorGroups,
    reset
} = AccordeonIndicatorActionCreator;

// Это обертка над Вью Аккордеон. Компонент определяет логику получения данных по индикаторам и их обработку
// Расширить поведение объекта можно через задание функции отрисовки индикаторов
// Передаем в родительский компонент индикаторы группы. Родительский компонент
// определит как отрисовать компоненты с учетом отмеченных/сохраненных ранее 
class AccordeonIndicatorContainer extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const {dispatch, staffixService} = this.props;
        dispatch(startLoadingIndicatorGroups())
        staffixService.getIndicatorGroups()
            .then(indicatorGroups => {
                dispatch(saveLoadedIndicatorGroups(indicatorGroups))
                dispatch(finishLoadingIndicatorGroups())
            })
    }

    componentWillUnmount() {
        this.props.dispatch(reset());
    }

    onIndicatorGroupClicked = id => {
        const {dispatch, staffixService} = this.props;
        dispatch(setActiveIndicatorGroup(id));
        dispatch(startLoadingIndicators());
        staffixService.getIndicators(id)
            .then(indicators => {
                dispatch(saveLoadedIndicators(indicators));
                dispatch(finishLoadingIndicators());
            })
    }
    render() {
        const {
            indicators,
            indicatorGroups,
            loading,
            activeIndicatorGroupId,
            renderIndicators
        } = this.props;

        if(loading.indicatorGroups)
            return <Spinner />

        return (
            <Accordeon 
                onPanelClick={this.onIndicatorGroupClicked}
                groups={indicatorGroups}
                renderItems={(groupId) => {
                    if(loading.indicators && activeIndicatorGroupId == groupId) return <Spinner />
                    return renderIndicators(activeIndicatorGroupId == groupId ? indicators : [], groupId);
                }}/>
        );
    }
}

const mapStoreToProps = store => {
    
    return {
        ...store.common.accordeonIndicator
    }
}

export default connect(mapStoreToProps)(withStaffixService(AccordeonIndicatorContainer));