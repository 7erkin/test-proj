import React, { Component, Fragment } from 'react'
import withStaffixService from '../../../../hoc/hoc-services/with-staffix-service';
import { 
    fulfilInitialLoading, 
    resetInitialLoading 
} from '../../../../action-creators/library-page/page-managing';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import ListGroupsIndicators from './list-groups-indicators';
import ListIndicators from './list-indicators';
import { saveLoadedIndicatorsGroups } from '../../../../action-creators/library-page/indicators/indicators';
import AsideList from './aside-list';
import LibraryContentCenterView from '../../../../components/pages/library/library-content-center-view';
import LoadingIndicator from '../../../../components/common/loading-indicator/loading-indicator';
import { AddIndicatorForm, EditIndicatorForm } from './indicator-form';
import { EditIndicatorsGroupForm, AddIndicatorsGroupForm } from './indicators-group-form';

// два случая, если попали по ссылки или переходили по приложению
// если по ссылке, то Выгружаем группы и Выгружаем сущности. Затем отрисовываем дочерний компонент
// если из приложения, то Выгружаем группы, Определяем дефолтную отображаемую группу и Выгружаем сущности. Затем отрисовываем дочерний компонент

class Indicators extends Component {
    constructor(props){
        super(props);
        this._initialIndicatorGroupId = NaN;
    }

    // incorrect for empty groups
    _defineIdGroupDefaultRendering = (groups) => {
        return groups[0].id;
    }

    _isComeByReference = () => {
        return this.props.history.url === '/library/indicators-groups';
    }

    _defineIdGroupRendering = (groups) => {
        if(this._isComeByReference()) 
            return Number(this.props.history.match.params.idGroup);

        return this._defineIdGroupDefaultRendering(groups);
    }

    componentWillUnmount() {
        const {
            dispatch
        } = this.props;

        dispatch(resetInitialLoading());
    }

    componentDidMount() {
        const {
            dispatch,
            staffixService
        } = this.props;

        staffixService.getGroupsIndicators()
            .then(groups => {
                dispatch(saveLoadedIndicatorsGroups(groups));
                this._initialIndicatorGroupId = this._defineIdGroupRendering(groups);
                dispatch(fulfilInitialLoading());
            })
    }

    componentDidUpdate() {
        const {
            dispatch,
            staffixService,
            loadingInitial
        } = this.props;

        if(loadingInitial)
            return;
    
        staffixService.getGroupsIndicators()
            .then(groups => {
                dispatch(saveLoadedIndicatorsGroups(groups));
                this._initialIndicatorGroupId = this._defineIdGroupRendering(groups);
                dispatch(fulfilInitialLoading());
            })
    }

    render() {
        const {
            loadingInitial
        } = this.props;

        if(!loadingInitial)
            return <LoadingIndicator />

        if(isNaN(this._initialIndicatorGroupId))
            return <LoadingIndicator />

        return (
            <Switch>
                <Redirect exact={true} from="/library/indicators-groups" to={`/library/indicators-groups/${this._initialIndicatorGroupId}`} />
                <Route path="/library/indicators-groups/:idGroup" render={props => {
                    return (
                        <Fragment>
                            <AsideList {...props}/>
                            <LibraryContentCenterView>
                                <Switch>
                                    <Route exact path="/library/indicators-groups/:idGroup/add-indicator" render={(props) => <AddIndicatorForm {...props}/>}/>
                                    <Route exact path="/library/indicators-groups/:idGroup/edit-indicator/:idIndicator" render={(props) => <EditIndicatorForm {...props}/>}/>
                                    <Route exact path="/library/indicators-groups/edit" render={(props) => <ListGroupsIndicators {...props}/>}/>
                                    <Route exact path="/library/indicators-groups/edit/:idGroup" render={(props) => <EditIndicatorsGroupForm {...props}/>}/>
                                    <Route exact path="/library/indicators-groups/add" render={(props) => <AddIndicatorsGroupForm {...props}/>}/>
                                    <Route exact path="/library/indicators-groups/:idGroup" render={(props) => <ListIndicators {...props}/>}/>
                                </Switch>
                            </LibraryContentCenterView>
                        </Fragment>
                    );
                }} />
            </Switch>
        );
    }
}

const mapStoreToProps = ({
    libraryPage: {
        pageManaging: {
            loadingInitial
        }
    }
}) => {
    return {
        loadingInitial
    };
}

export default connect(mapStoreToProps)(withStaffixService(Indicators));