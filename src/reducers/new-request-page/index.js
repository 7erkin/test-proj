import * as action from '../../actions/new-request-page'

const {
    UPDATE_COMPANY_ID,
    UPDATE_DESCRIPTION,
    UPDATE_REQUEST_DATE,
    UPDATE_POSITION_ID,
    UPDATE_SUBDIVISION_ID,
    RESET
} = action;

const initialState = {
    companyId: '',
    subdivisionId: '',
    positionId: '',
    description: '',
    requestDate: ''
}

const updateCompany = (state, payload) => {
    return {
        ...state,
        companyId: payload.value
    }
}

const updateDescription = (state, payload) => {
    return {
        ...state,
        description: payload.value
    }
}

const updateRequestDate = (state, payload) => {
    return {
        ...state,
        requestDate: payload.value
    }
}

const updatePosition = (state, payload) => {
    return {
        ...state,
        positionId: payload.value
    }
}

const updateSubdivision = (state, payload) => {
    return {
        ...state,
        subdivisionId: payload.value
    }
}

const resetForm = (state, payload) => {
    return {
        ...initialState
    }
}

export default (state = initialState, action) => {
    const {type, payload} = action;
    switch(type) {
        case UPDATE_COMPANY_ID:
            return updateCompany(state, payload);
        case UPDATE_DESCRIPTION:
            return updateDescription();
        case UPDATE_REQUEST_DATE:
            return updateRequestDate();
        case UPDATE_POSITION_ID:
            return updatePosition();
        case UPDATE_SUBDIVISION_ID:
            return updateSubdivision();
        case RESET:
            return resetForm();
        default:
            return state;
    }
}