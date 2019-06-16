import initialState from "./initial-state";

export const newCompetenceNameValidationSucceeded = (state) => {
    return {
        ...state,
        name: {
            ...state.name,
            errorMessage: ''
        }
    }
}
export const newCompetenceDescriptionValidationSucceeded = (state) => {
    return {
        ...state,
        description: {
            ...state.description,
            errorMessage: ''
        }
    }
}
export const newCompetenceGroupIdValidationSucceeded = (state) => {
    return {
        ...state,
        idGroup: {
            ...state.idGroup,
            errorMessage: ''
        }
    }
}
export const newCompetenceNameValidationError = (state, value) => {
    return {
        ...state,
        name: {
            ...state.name,
            errorMessage: value
        }
    }
}
export const newCompetenceDescriptionValidationError = (state, value) => {
    return {
        ...state,
        description: {
            ...state.description,
            errorMessage: value
        }
    }
}
export const newCompetenceGroupIdValidationError = (state, value) => {
    return {
        ...state,
        idGroup: {
            ...state.idGroup,
            errorMessage: value
        }
    }
}
export const newCompetenceSaved = (state) => {
    return {
        ...initialState
        // loadingInitial: false
    }
}
export const updateNewCompetenceName = (state, value) => {
    return {
        ...state,
        name: {
            ...state.name,
            text: value
        }
    }
}
export const updateNewCompetenceIdGroup = (state, value) => {
    return {
        ...state,
        idGroup: {
            ...state.idGroup,
            text: value
        }
    }
}
export const updateNewCompetencePointedIndicators = (state, value) => {
    console.log('aaa', state)
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

export const updateNewCompetencePointedIndicatorInfluence = (state, value) => {
    const { id, influence } = value;
    const indicators = state.indicators.slice();
    const index = indicators.findIndex(el => el.id == id);
    indicators[index].influence = influence;

    return {
        ...state,
        indicators
    }
}

export const updateNewCompetenceDescription = (state, value) => {
    return {
        ...state,
        description: {
            ...state.description,
            text: value
        }
    }
}
export const resetNewCompetence = state => {
    return {
        ...initialState
    }
}