import initialState from "./initial-state";

export const setEditCompetence = (state, value) => {
    const { name, description, idGroup, indicators } = value
    return {
        ...state,
        name: {
            ...state.name,
            initial: name,
            text: name
        },
        description: {
            ...state.description,
            text: description
        },
        idGroup: {
            ...state.idGroup,
            text: idGroup
        },
        indicators
    }
}

export const editCompetenceNameValidationSucceeded = (state) => {
    return {
        ...state,
        name: {
            ...state.name,
            errorMessage: ''
        }
    }
}
export const editCompetenceDescriptionValidationSucceeded = (state) => {
    return {
        ...state,
        description: {
            ...state.description,
            errorMessage: ''
        }
    }
}
export const editCompetenceGroupIdValidationSucceeded = (state) => {
    return {
        ...state,
        idGroup: {
            ...state.idGroup,
            errorMessage: ''
        }
    }
}
export const editCompetenceNameValidationError = (state, value) => {
    return {
        ...state,
        name: {
            ...state.name,
            errorMessage: value
        }
    }
}
export const editCompetenceDescriptionValidationError = (state, value) => {
    return {
        ...state,
        description: {
            ...state.description,
            errorMessage: value
        }
    }
}
export const editCompetenceGroupIdValidationError = (state, value) => {
    return {
        ...state,
        idGroup: {
            ...state.idGroup,
            errorMessage: value
        }
    }
}
export const editCompetenceSaved = (state) => {
    return {
        ...initialState
        //loadingInitial: false
    }
}
export const updateEditCompetenceGroupId = (state, value) => {
    return {
        ...state,
        idGroup: {
            ...state.idGroup,
            text: value
        }
    }
}
export const updateEditCompetenceDescription = (state, value) => {
    return {
        ...state,
        description: {
            ...state.description,
            text: value
        }
    }
}
export const updateEditCompetenceIndicatorInfluence = (state, value) => {
    const { id, influence } = value;
    const indicators = state.indicators.slice();
    const index = indicators.findIndex(el => el.id == id);
    indicators[index].influence = influence;

    return {
        ...state,
        indicators
    }
}
export const updateEditCompetencePointedIndicators = (state, value) => {
    const { id } = value; 
    const indicators = state.indicators.slice();
    const index = indicators.findIndex(el => el.id == id);

    if(index === -1)
        indicators.push({
            ...value,
            influence: 'positive'
        })
    else 
        indicators.splice(index, 1);

    return {
        ...state,
        indicators
    }
}
export const updateEditCompetenceName = (state, value) => {
    return {
        ...state,
        name: {
            ...state.name,
            text: value
        }
    }
}
export const resetEditCompetence = state => {
    return {
        ...initialState
    }
}