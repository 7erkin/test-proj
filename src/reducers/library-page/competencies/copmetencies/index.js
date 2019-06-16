import initialState from './intial-state'

import * as _ from './competencies'

import {
    SAVE_LOADED_COMPETENCIES,
    SAVE_LOADED_COMPETENCIES_GROUPS,
    UPDATE_DELETED_COMPETENCIES,
    UPDATE_DELETED_COMPETENCIES_GROUPS,
    UPDATE_VISIBLE_COMPETENCIES,
    UPDATE_VISIBLE_COMPETENCIES_GROUPS,
    RESET_DELETED_COMPETENCIES,
    RESET_DELETED_COMPETENCIES_GROUPS
} from '../../../../actions/library-page/competencies/competencies'

export default (state = initialState, action) => {
    const { type, value } = action;

    switch(type) {
        case SAVE_LOADED_COMPETENCIES:
            return _.saveLoadedCompetencies(state, value);
        case SAVE_LOADED_COMPETENCIES_GROUPS:
            return _.saveLoadedCompetenciesGroups(state, value);
        case UPDATE_DELETED_COMPETENCIES:
            return _.updateDeletedCompetencies(state, value);
        case UPDATE_DELETED_COMPETENCIES_GROUPS:
            return _.updateDeletedCompetenciesGroups(state, value);
        case UPDATE_VISIBLE_COMPETENCIES:
            return _.updateVisibleCompetencies(state, value);
        case UPDATE_VISIBLE_COMPETENCIES_GROUPS:
            return _.updateVisibleCompetenciesGroups(state, value);
        case RESET_DELETED_COMPETENCIES:
            return _.resetDeletedCompetencies(state, value);
        case RESET_DELETED_COMPETENCIES_GROUPS:
            return _.resetDeletedCompetenciesGroups(state, value);
        default:
            return state;
    }
}