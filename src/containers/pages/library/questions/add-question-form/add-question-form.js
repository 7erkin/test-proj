import React, { Component } from 'react'
import withStaffixService from '../../../../../hoc/hoc-services/with-staffix-service';
import {connect} from 'react-redux'
import withEffectApplyingChanges from '../../../../../hoc/with-effect-applying-changes/with-effect-applying-changes';
import { startApplyingChanges, finishApplyingChanges } from '../../../../../action-creators/library-page';
import { updateNewQuestionCompetenceId, updateNewQuestionBody, saveLoadedCompetencies } from '../../../../../action-creators/library-page/questions';
import QuestionFormView from '../../../../../components/pages/library/questions/question-form-view';

class AddQuestionForm extends Component {
    constructor(props) {
        super(props);
    }

    _isValid = name => {
        return true;
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
            }
        } = this.props;

        dispatch(startApplyingChanges());
        staffixService.createQuestion({idQuestionsGroup, ...newQuestion})
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
                body, idGroup
            }
        } = this.props;

        return (
            <QuestionFormView 
                questionBody={body}
                competenceId={idGroup}
                onSubmit={this.onSubmit}
                onCancel={this.onCancel}
                onQuestionBodyChange={this.onQuestionBodyChange}
                onCompetenceIdChange={this.onCompetenceIdChange}
                competencies={competencies}
                validation={{hasErr: false, messageErr: ''}}
                />
            // <form onSubmit={this.onSubmit}>
            //     <input type="text" value={body} onChange={(evt) => this.onNameChange(evt.target.value)} />
            //     <select value={idGroup} onChange={(evt) => this.onIdGroupQuestionsChange(evt.target.value)}>
            //     {
            //         competencies.map(({id, name}) => <option value={id}>{name}</option>)
            //     }
            //     </select>
            //     <button type="submit">Save</button>
            //     <button type="button" onClick={this.onCancel}>Cancel</button>
            // </form>
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

export default connect(mapStoreToProps)(withStaffixService(withEffectApplyingChanges(AddQuestionForm)));