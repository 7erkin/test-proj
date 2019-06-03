import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import withStaffixService from '../../../../hoc/hoc-services/with-staffix-service';

import {
    Switch,
    Route,
    Redirect
} from 'react-router-dom'
import { resetInitialLoading, fulfilInitialLoading } from '../../../../action-creators/library-page';
import { saveLoadedQuestionsGroups } from '../../../../action-creators/library-page/questions';
import AsideList from './aside-list';
import QuestionsGroupContent from './questions-group-content';
import EditQuestionsGroupForm from './edit-questions-group-form';
import QuestionList from './question-list';
import AddQuestionForm from './add-question-form'
import QuestionsGroupList from './questions-group-list';
import AddQuestionsGroupForm from './add-questions-group-form';

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

        staffixService.getQuestionsGroups()
            .then(groups => {
                dispatch(saveLoadedQuestionsGroups(groups));
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
    
            staffixService.getQuestionsGroups()
                .then(groups => {
                    dispatch(saveLoadedQuestionsGroups(groups));
                    this._initialQuestionsGroupId = this._defineIdGroupRendering(groups);
                    dispatch(fulfilInitialLoading());
                })
    }

    render() {
        const {
            loadingInitial
        } = this.props;

        if(!loadingInitial)
            return <h2>Loading...</h2>

        if(isNaN(this._initialQuestionsGroupId))
            return <h2>Loading...</h2>

        return (
            <Switch>
                <Redirect exact={true} from="/library/questions-groups" to={`/library/questions-groups/${this._initialQuestionsGroupId}`} />
                <Route path="/library/questions-groups/:idGroup" render={props => {
                    return (
                        <Fragment>
                            <AsideList {...props}/>
                            <Switch>
                                <Route exact path="/library/questions-groups/:idGroup/add-question" render={(props) => <AddQuestionForm {...props}/>}/>
                                <Route exact path="/library/questions-groups/add" render={(props) => <AddQuestionsGroupForm {...props}/>}/>
                                <Route exact path="/library/questions-groups/edit/:idGroup" render={(props) => <EditQuestionsGroupForm {...props}/>}/>
                                <Route exact path="/library/questions-groups/edit" render={(props) => <QuestionsGroupList {...props}/>}/>
                                <Route exact path="/library/questions-groups/:idGroup" render={(props) => <QuestionsGroupContent {...props}/>}/>
                                <Route exact path="/library/questions-groups/:idGroup/questions/:idCompetence" render={(props) => <QuestionList {...props}/>}/>
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

export default connect(mapStoreToProps)(withStaffixService(Questions));