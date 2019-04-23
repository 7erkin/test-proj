
const updatePositionName = (state, action) => {
    return {
        ...state,
        position: {
            ...state,
            name: action.payload.name
        }
    }
}

const updatePositionDescription = (state, action) => {
    return {
        ...state,
        position: {
            ...state,
            description: action.payload.description
        }
    }
}

const updateDateCreate = (state, action) => {
    return {
        ...state,
        position: {
            ...state,
            dateCreate: action.payload.date
        }
    }
}

const updateDateApproval = (state, action) => {
    return {
        ...state,
        position: {
            ...state,
            dateApproval: action.payload.date
        }
    }
}

const updateCompanyId = (state, action) => {
    return {
        ...state,
        position: {
            ...state,
            companyId: action.payload.id
        }
    }
}

const updateSubdivisionId = (state, action) => {
    return {
        ...state,
        position: {
            ...state,
            subdivisionId: action.payload.id
        }
    }
}

const updatePositionCompetencies = (state, action) => {
    return {
        ...state
    }
}

const updatePositionCompetenceMinWeight = (state, action) => {
    return {
        ...state
    }
}

const updatePositionCompetenceMaxWeight = (state, action) => {
    return {
        ...state
    }
}

const resetPosition = (state, action) => {
    return {
        ...state,
        position: {
            ...emptyPosition
        }
    }
}

const emptyPosition = {
    name: '',
    description: '',
    dateCreate: '',
    dateApproval: '',
    companyId: null,
    subdivisionId: null,
    competenies: []
}

const initialState = {
    position: {
        ...emptyPosition
    }
}

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        default:
            return state;
    }
}

export default rootReducer;