import {
    SAVE_LOADED_REQUEST
} from '../../actions/exist-request-page'

const saveLoadedRequest = (request) => {
    return {
        type: SAVE_LOADED_REQUEST,
        payload: {
            value: request
        }
    }
}

export {
    saveLoadedRequest
}