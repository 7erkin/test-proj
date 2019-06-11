import React, { Component } from 'react'
import withStaffixService from '../../../../../hoc/hoc-services/with-staffix-service';
import {connect} from 'react-redux'
import withEffectApplyingChanges from '../../../../../hoc/with-effect-applying-changes/with-effect-applying-changes';
import { startApplyingChanges, finishApplyingChanges } from '../../../../../action-creators/library-page';
import { updateNewQuestionCompetenceId, updateNewQuestionBody, saveLoadedCompetencies, resetNewQuestionForm } from '../../../../../action-creators/library-page/questions';
import QuestionFormView from '../../../../../components/pages/library/questions/question-form-view';
import withValidationApi from './with-validation-api';
import withValidationPolicy from './with-validation-logic';

class AddQuestionForm extends Component {
    constructor(props) {
        super(props);
    }

    componentWillUnmount() {
        this.props.dispatch(resetNewQuestionForm());
    }

    componentDidMount = () => {
        const {staffixService, dispatch, match: {params: {idCompetenciesGroup}}} = this.props;

        staffixService.getCompetencies(idCompetenciesGroup)
            .then(competencies => {
                dispatch(saveLoadedCompetencies(competencies))
            })
    }

    onQuestionBodyChange = name => {
        this.props.dispatch(updateNewQuestionBody(name));
    }

    onCompetenceIdChange = id => {
        this.props.dispatch(updateNewQuestionCompetenceId(id));
    }

    onSubmit = () => {
        const {
            staffixService,
            dispatch,
            newQuestion,
            history,
            match: {
                params: {
                    idGroup: idQuestionsGroup
                }
            },
            isFormValid
        } = this.props;

        if(!isFormValid())
            return;

        dispatch(startApplyingChanges());

        const question = {
            idQuestionsGroup, 
            body: newQuestion.body.text,
            idCompetence: newQuestion.idCompetence.text
        };

        staffixService.createQuestion(question)
            .then(() => {
                dispatch(finishApplyingChanges());
                //some actions with history - depends on how we got on this component
                history.goBack();
            })
    }

    onCancel = () => {
        //some actions with history - depends on how we got on this component
        this.props.history.goBack();
    }

    render() {
        const {
            competencies,
            newQuestion: {
                body: {
                    text: body,
                    errorMessage: errBody
                }, 
                idCompetence: {
                    text: idCompetence,
                    errorMessage: errCompetenceId
                }
            },
            onQuestionBodyBlur,
            onCompetenceIdBlur
        } = this.props;

        return (
            <QuestionFormView 
                questionBody={body}
                competenceId={idCompetence}
                onSubmit={this.onSubmit}
                onCancel={this.onCancel}
                onQuestionBodyChange={this.onQuestionBodyChange}
                onCompetenceIdChange={this.onCompetenceIdChange}
                competencies={competencies}
                validation={{
                    errCompetenceId,
                    errBody
                }} 
                onQuestionBodyBlur={onQuestionBodyBlur}
                onCompetenceIdBlur={onCompetenceIdBlur} />
        );
    }
}

const mapStoreToProps = ({
    libraryPage: {
        competencies,
        newQuestion,
        applyingChanges
    }
}) => {
    
    return {
        competencies,
        newQuestion,
        applyingChanges
    };
}

export default connect(mapStoreToProps)(withStaffixService(
                                            withEffectApplyingChanges(
                                                withValidationApi(
                                                    withValidationPolicy(AddQuestionForm)))));