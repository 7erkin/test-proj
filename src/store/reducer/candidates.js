import {Action as CandidatesAction} from '../action/candidates'

export default (state = [], action) => {
    switch (action.type) {
        case CandidatesAction.ADD_CANDIDATE:
            const {payload} = action;
            return [
                ...state,
                {
                    position: payload.position,
                    name: payload.name,
                    model: payload.model,
                    results: payload.results
                }
            ];
    }
};