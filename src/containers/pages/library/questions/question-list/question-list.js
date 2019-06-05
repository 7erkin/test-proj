import React, { Component } from 'react'
import withEffectApplyingChanges from '../../../../../hoc/with-effect-applying-changes/with-effect-applying-changes';
import withStaffixService from '../../../../../hoc/hoc-services/with-staffix-service';
import { connect } from 'react-redux';
import { startApplyingChanges, finishApplyingChanges } from '../../../../../action-creators/library-page';
import { startLoadingQuestions, saveLoadedQuestions, finishLoadingQuestions, updateDeletedQuestions, questionsDeleted } from '../../../../../action-creators/library-page/questions';

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
            return <h2>Loading...</h2>

        return (
            <form onSubmit={evt => {
                evt.preventDefault();
                this.onSubmit();
            }}>
                <p>Competence: {this._competenceName}</p>
                <button type="submit">Delete</button>
                <ul>
                    {questions.map(el1 => {
                        return (
                            <li key={el1.id}>
                                {el1.body}
                                <input type="checkbox" onChange={() => this.onQuestionCheck(el1.id)} checked={deletedQuestions.some(el2 => el2 == el1.id)}/>
                            </li>
                        );
                    })}
                </ul>
            </form>
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