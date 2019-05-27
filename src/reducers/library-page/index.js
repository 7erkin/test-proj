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
    INDICATORS_GROUPS_DELETED
} from '../../actions/library-page/indicators'

import {
    FULFIL_INITIAL_LOADING,
    RESET_INITIAL_LOADING,
    START_APPLYING_CHANGES,
    FINISH_APPLYING_CHANGES
} from '../../actions/library-page'

import * as indicatorReducer from './indicators'
import * as competenceReducer from './competencies'

import {
    UPDATE_NEW_COMPETENCE_NAME,
    UPDATE_NEW_COMPETENCE_GROUP_ID,
    UPDATE_NEW_COMPETENCIES_GROUP_NAME,
    UPDATE_NEW_COMPETENCIES_GROUP_DESCRIPTION,

    UPDATE_DELETED_COMPETENCIES,
    UPDATE_DELETED_COMPETENCIES_GROUPS,

    RESET_DELETED_COMPETENCIES,
    RESET_DELETED_COMPETENCIES_GROUPS,

    UPDATE_EDIT_COMPETENCE_NAME,
    UPDATE_EDIT_COMPETENCE_GROUP_ID,
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

    COMPETENCIES_GROUPS_DELETED
} from '../../actions/library-page/competencies'

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

        default:
            return state;
    }
}

export default rootReducer;