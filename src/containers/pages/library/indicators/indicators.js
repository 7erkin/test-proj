import React, { Component, Fragment } from 'react'
import withStaffixService from '../../../../hoc/hoc-services/with-staffix-service';
import { fulfilInitialLoading, resetInitialLoading } from '../../../../action-creators/library-page';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import FormAddIndicator from './form-add-indicator';
import FormEditIndicator from './form-edit-indicator';
import FormEditGroupIndicators from './form-edit-group-indicators';
import ListGroupsIndicators from './list-groups-indicators';
import FormAddGroupIndicators from './form-add-group-indicators';
import ListIndicators from './list-indicators';
import { saveLoadedIndicatorsGroups } from '../../../../action-creators/library-page/indicators';
import AsideList from './aside-list';

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
            return <h2>Loading...</h2>

        return (
            <Switch>
                <Redirect exact={true} from="/library/indicators-groups" to={`/library/indicators-groups/${this._initialIndicatorGroupId}`} />
                <Route path="/library/indicators-groups/:idGroup" render={props => {
                    return (
                        <Fragment>
                            <AsideList {...props}/>
                            <Switch>
                                <Route exact path="/library/indicators-groups/:idGroup/add-indicator" render={(props) => <FormAddIndicator {...props}/>}/>
                                <Route exact path="/library/indicators-groups/:idGroup/edit-indicator/:idIndicator" render={(props) => <FormEditIndicator {...props}/>}/>
                                <Route exact path="/library/indicators-groups/edit" render={(props) => <ListGroupsIndicators {...props}/>}/>
                                <Route exact path="/library/indicators-groups/edit/:idGroup" render={(props) => <FormEditGroupIndicators {...props}/>}/>
                                <Route exact path="/library/indicators-groups/add" render={(props) => <FormAddGroupIndicators {...props}/>}/>
                                <Route exact path="/library/indicators-groups/:idGroup" render={(props) => <ListIndicators {...props}/>}/>
                            </Switch>
                        </Fragment>
                    );
                }} />
            </Switch>
        );
    }
}

const mapStoreToProps = ({
    libraryPage: {
        loadingInitial
    }
}) => {
    return {
        loadingInitial
    };
}

export default connect(mapStoreToProps)(withStaffixService(Indicators));