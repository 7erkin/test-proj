import {Action as CandidatesAction} from '../action/candidates'
import {Action as PollsAction} from '../action/polls'

import todoCandidates from './candidates'
import todoPolls from './polls'

const initialState = {
    candidates: {},
    polls: {},
    models: {},
    competencies: {},
    indicators: {},
    settings: {}
};

export const todoApp = (state = initialState, action) => {
    switch (action.type) {
        case CandidatesAction.ADD_CANDIDATE:
            // 1. where can i set up a validation
            // 2. is it optimal operation?
            // return Object.assign({}, state, {
            //     companies: state.candidates.push(action.payload.name)
            // });
        case CandidatesAction.ADD_COMPANY:
        case CandidatesAction.CHANGE_COMPANY:
        case CandidatesAction.CHANGE_DIVISION:
        case CandidatesAction.SEARCH:
            return Object.assign({}, state, todoCandidates(state.candidates, action));

        case PollsAction.ADD_COMPANY:
        case PollsAction.ADD_POLL:
        case PollsAction.CHANGE_COMPANY:
        case PollsAction.CHANGE_POLL:
        case PollsAction.SEARCH:
            return Object.assign({}, state, todoPolls(state, action));

        default:
            return state;
    }
};