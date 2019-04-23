import {entityAction} from '../../actions/position'

const saveLoadedCompanies = (companies) => {
    return {
        type: entityAction.SAVE_LOADED_COMPANIES,
        payload: {
            companies
        }
    }
}

const saveLoadedSubdivisions = (subdivisions) => {
    return {
        type: entityAction.SAVE_LOADED_SUBDIVISIONS,
        payload: {
            subdivisions
        }
    }
}

const saveLoadedPositions = (positions) => {
    return {
        type: entityAction.SAVE_LOADED_POSITIONS,
        payload: {
            positions
        }
    }
}

const setActiveCompany = (id) => {
    return {
        type: entityAction.SET_ACTIVE_COMPANY,
        payload: {
            id
        }
    }
}

const setActiveSubdivision = (id) => {
    return {
        type: entityAction.SET_ACTIVE_SUBDIVISION,
        payload: {
            id
        }
    }
}

export {
    setActiveCompany,
    setActiveSubdivision,
    saveLoadedCompanies,
    saveLoadedPositions,
    saveLoadedSubdivisions
}