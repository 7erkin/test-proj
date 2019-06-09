import React, { Component } from 'react'
import withEffectApplyingChanges from '../../../../../hoc/with-effect-applying-changes/with-effect-applying-changes';
import withStaffixService from '../../../../../hoc/hoc-services/with-staffix-service';
import { connect } from 'react-redux';
import { startApplyingChanges, finishApplyingChanges } from '../../../../../action-creators/library-page';
import { startLoadingQuestions, saveLoadedQuestions, finishLoadingQuestions, updateDeletedQuestions, questionsDeleted } from '../../../../../action-creators/library-page/questions';
import LoadingIndicator from '../../../../../components/common/loading-indicator/loading-indicator';
import QuestionListView from '../../../../../components/pages/library/questions/question-list-view';

class QuestionList extends Component {
    constructor(props) {
        super(props);
        this._competenceName = '';
    }

    componentDidMount() {
        const { match:{params: {idCompetence}}, dispatch, staffixService } = this.props;

        dispatch(startLoadingQuestions());
        Promise.all([
            staffixService.getCompetence(idCompetence),
            staffixService.getQuestions(idCompetence)
        ]).then(results => {
            this._competenceName = results[0].name;
            dispatch(saveLoadedQuestions(results[1]));
            dispatch(finishLoadingQuestions());
        })
    }

    onSubmit = () => {
        const {
            dispatch,
            staffixService,
            deletedQuestions
        } = this.props;

        dispatch(startApplyingChanges());
        staffixService.deleteQuestions(deletedQuestions)
            .then(() => {
                dispatch(questionsDeleted());
                dispatch(finishApplyingChanges());
            })
    }

    onQuestionCheck = id => {
        this.props.dispatch(updateDeletedQuestions(id));
    }

    render() {
        const { 
            loadingQuestions,
            questions,
            deletedQuestions
        } = this.props;

        if(loadingQuestions)
            return <LoadingIndicator />

        return (
            <QuestionListView 
                competenceName={this._competenceName}
                questions={questions}
                deletedQuestions={deletedQuestions}
                onQuestionCheck={this.onQuestionCheck}
                onSubmit={this.onSubmit}/>
        );
    }
}

const mapStoreToProps = ({
    libraryPage: {
        questions,
        deletedQuestions,
        loadingQuestions,
        applyingChanges
    }
}) => {

    return {
        questions,
        deletedQuestions,
        loadingQuestions,
        applyingChanges
    };
}

export default connect(mapStoreToProps)(withStaffixService(withEffectApplyingChanges(QuestionList)));