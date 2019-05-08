import * as action from '../../actions/new-request-page'

const {
    UPDATE_COMPANY_ID,
    UPDATE_DESCRIPTION,
    UPDATE_REQUEST_DATE,
    UPDATE_POSITION_ID,
    UPDATE_SUBDIVISION_ID,
    PREPARE_LOADING_COMPANIES,
    PREPARE_LOADING_POSITIONS,
    PREPARE_LOADING_SUBDIVISIONS,
    SAVE_LOADED_COMPAIES,
    SAVE_LOADED_POSITIONS,
    SAVE_LOADED_SUBDIVISIONS,
    FINISH_LOADING_COMPANIES,
    FINISH_LOADING_POSITIONS,
    FINISH_LOADING_SUBDIVISIONS,
    RESET
} = action;

const initialState = {
    companyId: '',
    subdivisionId: '',
    positionId: '',
    companies: [],
    subdivisions: [],
    positions: [],
    loadingCompanies: false,
    loadingSubdivisions: false,
    loadingPositions: false,
    vacancyDescription: '',
    dateCreate: ''
}

const prepareLoadingCompanies = (state, payload) => {
    return {
        ...state,
        loadingCompanies: true
    }
}

const prepareLoadingSubdivisions = (state, payload) => {
    return {
        ...state,
        loadingCompanies: true
    }
}

const prepareLoadingPositions = (state, payload) => {
    return {
        ...state,
        loadingCompanies: true
    }
}

const saveLoadedCompanies = (state, payload) => {
    return {
        ...state,
        companies: payload.value
    }
}

const saveLoadedSubdivisions = (state, payload) => {
    return {
        ...state,
        subdivisions: payload.value
    }
}

const saveLoadedPositions = (state, payload) => {
    return {
        ...state,
        positions: payload.value
    }
}

const finishLoadingPositions = (state, payload) => {
    return {
        ...state,
        loadingPositions: false
    }
}

const finishLoadingSubdivisions = (state, payload) => {
    return {
        ...state,
        loadingSubdivisions: false
    }
}

const finishLoadingCopmanies = (state, payload) => {
    return {
        ...state,
        loadingCompanies: false
    }
}

const updateCompany = (state, payload) => {
    return {
        ...state,
        companyId: payload.value,
        subdivisionId: '',
        positionId: '',
        positions: [],
        subdivisions: []
    }
}

const updateDescription = (state, payload) => {
    return {
        ...state,
        vacancyDescription: payload.value
    }
}

const updateRequestDate = (state, payload) => {
    return {
        ...state,
        dateCreate: payload.value
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
        subdivisionId: payload.value,
        positionId: '',
        positions: []
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
            return updateDescription(state, payload);
        case UPDATE_REQUEST_DATE:
            return updateRequestDate(state, payload);
        case UPDATE_POSITION_ID:
            return updatePosition(state, payload);
        case UPDATE_SUBDIVISION_ID:
            return updateSubdivision(state, payload);
        case PREPARE_LOADING_COMPANIES:
            return prepareLoadingCompanies(state, payload);
        case PREPARE_LOADING_SUBDIVISIONS:
            return prepareLoadingSubdivisions(state, payload);
        case PREPARE_LOADING_POSITIONS:
            return prepareLoadingPositions(state, payload);
        case SAVE_LOADED_COMPAIES:
            return saveLoadedCompanies(state, payload);
        case SAVE_LOADED_SUBDIVISIONS:
            return saveLoadedSubdivisions(state, payload);
        case SAVE_LOADED_POSITIONS:
            return saveLoadedPositions(state, payload);
        case FINISH_LOADING_COMPANIES:
            return finishLoadingCopmanies(state, payload);
        case FINISH_LOADING_SUBDIVISIONS:  
            return finishLoadingSubdivisions(state, payload);
        case FINISH_LOADING_POSITIONS:
            return finishLoadingPositions(state, payload);
        case RESET:
            return resetForm(state, payload);
        default:
            return state;
    }
}