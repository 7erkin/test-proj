import initialState from './initial-state'

import {
    UPDATE_NEW_INDICATOR_NAME,
    UPDATE_NEW_INDICATOR_GROUP_ID,
    UPDATE_NEW_INDICATORS_GROUP_NAME,
    UPDATE_NEW_INDICATORS_GROUP_DESCRIPTION,

    UPDATE_DELETED_INDICATORS,
    UPDATE_DELETED_INDICATORS_GROUPS,

    RESET_DELETED_INDICATORS,
    RESET_DELETED_INDICATORS_GROUPS,

    UPDATE_EDIT_INDICATOR_NAME,
    UPDATE_EDIT_INDICATOR_GROUP_ID,
    UPDATE_EDIT_INDICATORS_GROUP_NAME,
    UPDATE_EDIT_INDICATORS_GROUP_DESCRIPTION,

    SAVE_LOADED_INDICATORS,
    SAVE_LOADED_INDICATORS_GROUPS,

    START_LOADING_INDICATORS,
    FINISH_LOADING_INDICATORS,

    NEW_INDICATORS_GROUP_SAVED,
    NEW_INDICATOR_SAVED,
    EDIT_INDICATORS_GROUP_SAVED,
    EDIT_INDICATOR_SAVED,
    INDICATORS_GROUPS_DELETED,

    START_LOADING_INDICATORS_GROUPS,
    FINISH_LOADING_INDICATORS_GROUPS
} from '../../actions/library-page/indicators'

import {
    FULFIL_INITIAL_LOADING,
    RESET_INITIAL_LOADING,
    START_APPLYING_CHANGES,
    FINISH_APPLYING_CHANGES
} from '../../actions/library-page'

import * as indicatorReducer from './indicators'
import * as competenceReducer from './competencies'
import * as questionReducer from './questions'

import {
    UPDATE_NEW_COMPETENCE_NAME,
    UPDATE_NEW_COMPETENCE_GROUP_ID,
    UPDATE_NEW_COMPETENCIES_GROUP_NAME,
    UPDATE_NEW_COMPETENCIES_GROUP_DESCRIPTION,

    UPDATE_DELETED_COMPETENCIES,
    UPDATE_DELETED_COMPETENCIES_GROUPS,

    RESET_DELETED_COMPETENCIES,
    RESET_DELETED_COMPETENCIES_GROUPS,

    UPDATE_EDIT_COMPETENCIES_GROUP_NAME,
    UPDATE_EDIT_COMPETENCIES_GROUP_DESCRIPTION,

    SAVE_LOADED_COMPETENCIES,
    SAVE_LOADED_COMPETENCIES_GROUPS,

    START_LOADING_COMPETENCIES,
    FINISH_LOADING_COMPETENCIES,

    NEW_COMPETENCIES_GROUP_SAVED,
    NEW_COMPETENCE_SAVED,
    EDIT_COMPETENCIES_GROUP_SAVED,
    EDIT_COMPETENCE_SAVED,

    COMPETENCIES_GROUPS_DELETED,
    UPDATE_NEW_COMPETENCE_POINTED_INDICATORS,
    UPDATE_NEW_COMPETENCE_INDICATOR_INFLUENCE,
    UPDATE_NEW_COMPETENCE_DESCRIPTION,

    UPLOAD_EDITED_COMPETENCE,
    UPDATE_EDIT_COMPETENCE_DESCRIPTION,
    UPDATE_EDIT_COMPETENCE_POINTED_INDICATORS,
    UPDATE_EDIT_COMPETENCE_NAME,
    UPDATE_EDIT_COMPETENCE_GROUP_ID,
    UPDATE_EDIT_COMPETENCE_INDICATOR_INFLUENCE,
    RESET_EDIT_COMPETENCE_FORM,
    RESET_NEW_COMPETENCE_FORM

} from '../../actions/library-page/competencies'

import {
    UPDATE_NEW_QUESTION_BODY,
    UPDATE_NEW_QUESTION_GROUP_ID,
    UPDATE_NEW_QUESTIONS_GROUP_NAME,
    UPDATE_NEW_QUESTIONS_GROUP_DESCRIPTION,
    UPDATE_EDIT_QUESTIONS_GROUP_NAME,
    UPDATE_EDIT_QUESTIONS_GROUP_DESCRIPTION,
    SAVE_LOADED_QUESTIONS_GROUPS,
    SAVE_LOADED_QUESTIONS_GROUP_CONTENT,
    START_LOADING_QUESTIONS_GROUP_CONTENT,
    FINISH_LOADING_QUESTIONS_GROUP_CONTENT,
    SAVE_LOADED_QUESTIONS,
    START_LOADING_QUESTIONS,
    FINISH_LOADING_QUESTIONS,
    UPDATE_DELETED_QUESTIONS,
    QUESTIONS_DELETED,
    UPDATE_DELETED_QUESTIONS_GROUPS,
    QUESTIONS_GROUPS_DELETED,
    EDIT_QUESTIONS_GROUP_SAVED,
    NEW_QUESTIONS_GROUP_SAVED
} from '../../actions/library-page/questions'

const fulfilInitialLoading = (state) => {
    return {
        ...state,
        loadingInitial: true
    }
}
const resetInitialLoading = (state) => {
    return {
        ...state,
        loadingInitial: false
    }
}
const startApplyingChanges = (state) => {
    return {
        ...state,
        applyingChanges: true
    }
}
const finishApplyingChanges = (state) => {
    return {
        ...state,
        applyingChanges: false
    }
}

const rootReducer = (state = initialState, {type, value}) => {
    switch(type){
        case START_APPLYING_CHANGES:
            return startApplyingChanges(state);
        case FINISH_APPLYING_CHANGES:
            return finishApplyingChanges(state);
        case FULFIL_INITIAL_LOADING:
            return fulfilInitialLoading(state);
        case RESET_INITIAL_LOADING:
            return resetInitialLoading(state);

        case UPDATE_NEW_QUESTION_BODY:
            return questionReducer.updateNewQuestionBody(state, value);
        case UPDATE_NEW_QUESTION_GROUP_ID:
            return questionReducer.updateNewQuestionGroupId(state, value);
        case UPDATE_NEW_QUESTIONS_GROUP_NAME:
            return questionReducer.updateNewQuestionsGroupName(state, value);
        case UPDATE_NEW_QUESTIONS_GROUP_DESCRIPTION:
            return questionReducer.updateNewQuestionsGroupDescription(state, value);
        case UPDATE_EDIT_QUESTIONS_GROUP_NAME:
            return questionReducer.updateEditQuestionsGroupName(state, value);
        case UPDATE_EDIT_QUESTIONS_GROUP_DESCRIPTION:
            return questionReducer.updateEditQuestionsGroupDescription(state, value);
        case SAVE_LOADED_QUESTIONS_GROUPS:
            return questionReducer.saveLoadedQuestionsGroups(state, value);
        case SAVE_LOADED_QUESTIONS_GROUP_CONTENT:
            return questionReducer.saveLoadedQuestionsGroupContent(state, value);
        case START_LOADING_QUESTIONS_GROUP_CONTENT:
            return questionReducer.startLoadingQuestionsGroupContent(state);
        case FINISH_LOADING_QUESTIONS_GROUP_CONTENT:
            return questionReducer.finishLoadingQuestionsGroupContent(state);
        case SAVE_LOADED_QUESTIONS:
            return questionReducer.saveLoadedQuestions(state, value);
        case START_LOADING_QUESTIONS:
            return questionReducer.startLoadingQuestions(state);
        case FINISH_LOADING_QUESTIONS:
            return questionReducer.finishLoadingQuestions(state);
        case UPDATE_DELETED_QUESTIONS:
            return questionReducer.updateDeletedQuestions(state, value);
        case QUESTIONS_DELETED:
            return questionReducer.questionsDeleted(state);
        case UPDATE_DELETED_QUESTIONS_GROUPS:
            return questionReducer.updateDeletedQuestionsGroups(state, value);
        case QUESTIONS_GROUPS_DELETED:
            return questionReducer.questionsGroupsDeleted(state);
        case EDIT_QUESTIONS_GROUP_SAVED:
            return questionReducer.editQuestionsGroupSaved(state);
        case NEW_QUESTIONS_GROUP_SAVED:
            return questionReducer.newQuestionsGroupSaved(state);

        case UPDATE_NEW_INDICATOR_NAME:
            return indicatorReducer.updateNewIndicatorName(state, value);
        case UPDATE_NEW_INDICATOR_GROUP_ID:
            return indicatorReducer.updateNewIndicatoridGroup(state, value);
        case UPDATE_NEW_INDICATORS_GROUP_NAME:
            return indicatorReducer.updateNewIndicatorsGroupName(state, value);
        case UPDATE_NEW_INDICATORS_GROUP_DESCRIPTION:
            return indicatorReducer.updateNewIndicatorsGroupDescription(state, value);
        case UPDATE_DELETED_INDICATORS:
            return indicatorReducer.updateDeletedIndicators(state, value);
        case UPDATE_DELETED_INDICATORS_GROUPS:
            return indicatorReducer.updateDeletedIndicatorsGroups(state, value);
        case UPDATE_EDIT_INDICATORS_GROUP_DESCRIPTION:
            return indicatorReducer.updateEditIndicatorsGroupDescription(state, value);
        case UPDATE_EDIT_INDICATORS_GROUP_NAME:
            return indicatorReducer.updateEditIndicatorsGroupName(state, value);
        case UPDATE_EDIT_INDICATOR_GROUP_ID:
            return indicatorReducer.updateEditIndicatoridGroup(state, value);
        case UPDATE_EDIT_INDICATOR_NAME:
            return indicatorReducer.updateEditIndicatorName(state, value);
        case SAVE_LOADED_INDICATORS:
            return indicatorReducer.saveLoadedIndicators(state, value);
        case SAVE_LOADED_INDICATORS_GROUPS:
            return indicatorReducer.saveLoadedIndicatorsGroups(state, value);
        case START_LOADING_INDICATORS:
            return indicatorReducer.startLoadingIndicators(state);
        case FINISH_LOADING_INDICATORS:
            return indicatorReducer.finishLoadingIndicators(state);
        case RESET_DELETED_INDICATORS:
            return indicatorReducer.resetDeletedIndicators(state);
        case RESET_DELETED_INDICATORS_GROUPS:
            return indicatorReducer.resetDeletedIndicatorsGroups(state);
        case NEW_INDICATORS_GROUP_SAVED:
            return indicatorReducer.newIndicatorsGroupSaved(state);
        case NEW_INDICATOR_SAVED:
            return indicatorReducer.newIndicatorSaved(state);
        case EDIT_INDICATORS_GROUP_SAVED:
            return indicatorReducer.editIndicatorsGroupSaved(state);
        case EDIT_INDICATOR_SAVED:
            return indicatorReducer.editIndicatorSaved(state);
        case INDICATORS_GROUPS_DELETED:
            return indicatorReducer.indicatorsGroupsDeleted(state);

        case START_LOADING_INDICATORS_GROUPS:
            return indicatorReducer.startLoadingIndicatorsGroups(state);
        case FINISH_LOADING_INDICATORS_GROUPS:
            return indicatorReducer.finishLoadingIndicatorsGroups(state);
        case UPDATE_NEW_COMPETENCE_POINTED_INDICATORS:
            return competenceReducer.updateNewCompetencePointedIndicators(state, value);
        case UPDATE_NEW_COMPETENCE_INDICATOR_INFLUENCE:
            return competenceReducer.updateNewCompetencePointedIndicatorInfluence(state, value);
        case UPDATE_NEW_COMPETENCE_DESCRIPTION:
            return competenceReducer.updateNewCompetenceDescription(state, value);
        
        case UPDATE_EDIT_COMPETENCE_INDICATOR_INFLUENCE:
            return competenceReducer.updateEditCompetenceIndicatorInfluence(state, value);
        case UPDATE_EDIT_COMPETENCE_POINTED_INDICATORS:
            return competenceReducer.updateEditCompetencePointedIndicators(state, value);
        case UPDATE_EDIT_COMPETENCE_DESCRIPTION:
            return competenceReducer.updateEditCompetenceDescription(state, value);
        case UPLOAD_EDITED_COMPETENCE:
            return competenceReducer.uploadEditedCompetence(state, value);
        case UPDATE_NEW_COMPETENCE_NAME:
            return competenceReducer.updateNewCompetenceName(state, value);
        case UPDATE_NEW_COMPETENCE_GROUP_ID:
            return competenceReducer.updateNewCompetenceIdGroup(state, value);
        case UPDATE_NEW_COMPETENCIES_GROUP_NAME:
            return competenceReducer.updateNewCompetenciesGroupName(state, value);
        case UPDATE_NEW_COMPETENCIES_GROUP_DESCRIPTION:
            return competenceReducer.updateNewCompetenciesGroupDescription(state, value);
        case UPDATE_DELETED_COMPETENCIES:
            return competenceReducer.updateDeletedCompetencies(state, value);
        case UPDATE_DELETED_COMPETENCIES_GROUPS:
            return competenceReducer.updateDeletedCompetenciesGroups(state, value);
        case UPDATE_EDIT_COMPETENCIES_GROUP_DESCRIPTION:
            return competenceReducer.updateEditCompetenciesGroupDescription(state, value);
        case UPDATE_EDIT_COMPETENCIES_GROUP_NAME:
            return competenceReducer.updateEditCompetenciesGroupName(state, value);
        case UPDATE_EDIT_COMPETENCE_GROUP_ID:
            return competenceReducer.updateEditCompetenceIdGroup(state, value);
        case UPDATE_EDIT_COMPETENCE_NAME:
            return competenceReducer.updateEditCompetenceName(state, value);
        case SAVE_LOADED_COMPETENCIES:
            return competenceReducer.saveLoadedCompetencies(state, value);
        case SAVE_LOADED_COMPETENCIES_GROUPS:
            return competenceReducer.saveLoadedCompetenciesGroups(state, value);
        case START_LOADING_COMPETENCIES:
            return competenceReducer.startLoadingCompetencies(state);
        case FINISH_LOADING_COMPETENCIES:
            return competenceReducer.finishLoadingCompetencies(state);
        case RESET_DELETED_COMPETENCIES:
            return competenceReducer.resetDeletedCompetencies(state);
        case RESET_DELETED_COMPETENCIES_GROUPS:
            return competenceReducer.resetDeletedCompetenciesGroups(state);
        case NEW_COMPETENCIES_GROUP_SAVED:
            return competenceReducer.newCompetenciesGroupSaved(state);
        case NEW_COMPETENCE_SAVED:
            return competenceReducer.newCompetenceSaved(state);
        case EDIT_COMPETENCIES_GROUP_SAVED:
            return competenceReducer.editCompetenciesGroupSaved(state);
        case EDIT_COMPETENCE_SAVED:
            return competenceReducer.editCompetenceSaved(state);
        case COMPETENCIES_GROUPS_DELETED:
            return competenceReducer.competenciesGroupsDeleted(state);

        case RESET_NEW_COMPETENCE_FORM:
            return competenceReducer.resetNewCompetenceForm(state);
        case RESET_EDIT_COMPETENCE_FORM:
            return competenceReducer.resetEditCompetenceForm(state);

        default:
            return state;
    }
}

export default rootReducer;