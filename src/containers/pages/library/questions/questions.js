import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import withStaffixService from '../../../../hoc/hoc-services/with-staffix-service';

import {
    Switch,
    Route,
    Redirect
} from 'react-router-dom'
import { resetInitialLoading, fulfilInitialLoading } from '../../../../action-creators/library-page/page-managing';
import AsideList from './aside-list';
import QuestionList from './question-list';
import AddQuestionForm from './add-question-form'
import { saveLoadedCompetenciesGroups } from '../../../../action-creators/library-page/competencies/competencies';
import LoadingIndicator from '../../../../components/common/loading-indicator/loading-indicator';
import LibraryContentCenterView from '../../../../components/pages/library/library-content-center-view';
import QuestionsAffiliation from './questions-affiliation';

class Questions extends Component {
    constructor(props){
        super(props);
        this._initialQuestionsGroupId = NaN;
    }

    // incorrect for empty groups
    _defineIdGroupDefaultRendering = (groups) => {
        return groups[0].id;
    }

    _isComeByReference = () => {
        return this.props.history.url === '/library/questions-groups';
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
                this._initialQuestionsGroupId = this._defineIdGroupRendering(groups);
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
                    this._initialQuestionsGroupId = this._defineIdGroupRendering(groups);
                    dispatch(fulfilInitialLoading());
                })
    }

    render() {
        const {
            loadingInitial
        } = this.props;

        if(!loadingInitial)
            return <LoadingIndicator />

        if(isNaN(this._initialQuestionsGroupId))
            return <LoadingIndicator />

        return (
            <Switch>
                <Redirect exact={true} from="/library/questions-groups" to={`/library/questions-groups/${this._initialQuestionsGroupId}`} />
                <Route path="/library/questions-groups/:idCompetenciesGroup" render={props => {
                    return (
                        <Fragment>
                            <AsideList {...props}/>
                            <LibraryContentCenterView>
                                <Switch>
                                    <Route exact path="/library/questions-groups/:idCompetenciesGroup/add-question" render={(props) => <AddQuestionForm {...props}/>}/>
                                    <Route exact path="/library/questions-groups/:idCompetenciesGroup" render={(props) => <QuestionsAffiliation {...props}/>}/>
                                    <Route exact path="/library/questions-groups/:idCompetenciesGroup/questions/:idCompetence" render={(props) => <QuestionList {...props}/>}/>
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

export default connect(mapStoreToProps)(withStaffixService(Questions));