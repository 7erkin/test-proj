import {entityAction} from '../../actions/position' 

const setActiveCompany = (state, action) => {
    return {
        ...state, 
        activeCompanyId: action.payload.id
    }
}

const setActiveSubdivisions = (state, action) => {
    return {
        ...state, 
        activeSubdivisionId: action.payload.id
    }
}

const savePositions = (state, action) => {
    return {
        ...state,
        positions: action.payload.positions
    }
}

const saveCompanies = (state, action) => {
    return {
        ...state,
        companies: action.payload.companies
    }
}

const saveSubdivisions = (state, action) => {
    return {
        ...state,
        subdivisions: action.payload.subdivisions
    }
}

const saveIndicatorGroups = (state, action) => {
    return {
        ...state,
        indicatorGroups: action.payload.indicatorGroups
    }
}

const saveIndicators = (state, action) => {
    return {
        ...state,
        indicators: action.payload.indicators
    }
}

const initialState = {
    activeCompanyId: null,
    activeSubdivisionId: null,
    companies: [],
    subdivisions: [],
    positions: [],
    indicatorGroups: [],
    indicators: []
}

const {
    SAVE_LOADED_COMPANIES,
    SAVE_LOADED_POSITIONS,
    SAVE_LOADED_SUBDIVISIONS,
    SET_ACTIVE_COMPANY,
    SET_ACTIVE_SUBDIVISION
} = entityAction;

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case SAVE_LOADED_COMPANIES:
            return saveCompanies(state, action);
        case SAVE_LOADED_POSITIONS:
            return savePositions(state, action);
        case SAVE_LOADED_SUBDIVISIONS:
            return saveSubdivisions(state, action);
        case SET_ACTIVE_COMPANY:
            return setActiveCompany(state, action);
        case SET_ACTIVE_SUBDIVISION:
            return setActiveSubdivisions(state, action);
        default:
            return state;
    }
}

export default rootReducer;
