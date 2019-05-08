import {
    SAVE_LOADED_REQUEST
} from '../../actions/exist-request-page'

const initialState = {
    request: null
}

const saveLoadedRequest = (state, {value}) => {
    return {
        ...state,
        request: value
    }
}

export default (state = initialState, action) => {
    const {type, payload} = action;
    
    switch(type) {
        case SAVE_LOADED_REQUEST:
            return saveLoadedRequest(state, payload);
        default:
            return state;
    }
}