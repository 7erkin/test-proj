import React, { Component, Fragment } from 'react'
import withStaffixService from '../../../../hoc/hoc-services/with-staffix-service';
import { fulfilInitialLoading, resetInitialLoading } from '../../../../action-creators/library-page';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import AsideList from './aside-list';
import AddCompetenceForm from './add-competence-form';
import EditCompetenceForm from './edit-competence-form';
import CompetenciesGroupList from './competencies-group-list';
import EditCompetenciesGroupForm from './edit-competencies-group-form';
import AddCompetenciesGroupForm from './add-competencies-group-form';
import CompetenceList from './competence-list';
import { saveLoadedCompetenciesGroups } from '../../../../action-creators/library-page/competencies';

// два случая, если попали по ссылки или переходили по приложению
// если по ссылке, то Выгружаем группы и Выгружаем сущности. Затем отрисовываем дочерний компонент
// если из приложения, то Выгружаем группы, Определяем дефолтную отображаемую группу и Выгружаем сущности. Затем отрисовываем дочерний компонент

class Competencies extends Component {
    constructor(props){
        super(props);
        this._initialCompetenciesGroupId = NaN;
    }

    // incorrect for empty groups
    _defineIdGroupDefaultRendering = (groups) => {
        return groups[0].id;
    }

    _isComeByReference = () => {
        return this.props.history.url === '/library/competencies-groups';
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

        staffixService.getCompetenciesGroups()
            .then(groups => {
                dispatch(saveLoadedCompetenciesGroups(groups));
                this._initialCompetenciesGroupId = this._defineIdGroupRendering(groups);
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
    
            staffixService.getCompetenciesGroups()
                .then(groups => {
                    dispatch(saveLoadedCompetenciesGroups(groups));
                    this._initialCompetenciesGroupId = this._defineIdGroupRendering(groups);
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
                <Redirect exact={true} from="/library/competencies-groups" to={`/library/competencies-groups/${this._initialCompetenciesGroupId}`} />
                <Route path="/library/competencies-groups/:idGroup" render={props => {
                    return (
                        <Fragment>
                            <AsideList {...props}/>
                            <Switch>
                                <Route exact path="/library/competencies-groups/:idGroup/add-competence" render={(props) => <AddCompetenceForm {...props}/>}/>
                                <Route exact path="/library/competencies-groups/:idGroup/edit-competence/:idCompetence" render={(props) => <EditCompetenceForm {...props}/>}/>
                                <Route exact path="/library/competencies-groups/edit" render={(props) => <CompetenciesGroupList {...props}/>}/>
                                <Route exact path="/library/competencies-groups/edit/:idGroup" render={(props) => <EditCompetenciesGroupForm {...props}/>}/>
                                <Route exact path="/library/competencies-groups/add" render={(props) => <AddCompetenciesGroupForm {...props}/>}/>
                                <Route exact path="/library/competencies-groups/:idGroup" render={(props) => <CompetenceList {...props}/>}/>
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

export default connect(mapStoreToProps)(withStaffixService(Competencies));