import {editEntityAction} from '../../actions/competence'

const initialState = {
    competence: {
        id: '',
        name: '',
        description: '',
        indicators: [],
        groupId: ''
    },
    competenceGroup: {
        id: '',
        name: '',
        description: ''
    }
}

const setEditCompetence = (state, action) => {
    const {id, competencies, indicators, groupId} = action.payload;
    const index = competencies.findIndex(el => el.id == id);
    const editCompetence = competencies[index];
    return {
        ...state,
        competence: {
            ...editCompetence,
            groupId,
            indicators
        }
    }
}

const setEditCompetenceGroup = (state, action) => {
    const index = action.payload.competenceGroups.findIndex(el => el.id == action.payload.id);
    const editCompetenceGroup = action.payload.competenceGroups[index];
    return {
        ...state,
        competenceGroup: {
            ...editCompetenceGroup
        }
    }
}

const updateEditCompetenceDescription = (state, action) => {
    return {
        ...state,
        competence: {
            ...state.competence,
            description: action.payload.description
        }
    }
}

const updateEditCompetenceGroupDescription = (state, action) => {
    return {
        ...state,
        competenceGroup: {
            ...state.competenceGroup,
            description: action.payload.description
        }
    }
}

const updateEditCompetenceGroupId = (state, action) => {
    return {
        ...state,
        competence: {
            ...state.competence,
            groupId: action.payload.id
        }
    }
}

// by default set the positive influence. Then user can change influence
const updateEditCompetenceIndicators = (state, action) => {
    const {id, name, groupId} = action.payload;
    const indicators = state.competence.indicators.slice(); 
    const index = indicators.findIndex(el => el.id == id);

    if(index == -1)
        indicators.push({id, influence: 'Positive', name, groupId});
    else  
        indicators.splice(index, 1);
    
    return {
        ...state,
        competence: {
            ...state.competence,
            indicators
        }
    }
}

const updateEditCompetenceIndicatorInfluence = (state, action) => {
    const {id, influence} = action.payload;
    const indicators = state.competence.indicators.slice(); 
    const index = indicators.findIndex(el => el.id == id);
    indicators[index].influence = influence;
    return {
        ...state,
        competence: {
            ...state.competence,
            indicators
        }
    }
}

const updateEditCompetenceGroupName = (state, action) => {
    return {
        ...state,
        competenceGroup: {
            ...state.competenceGroup,
            name: action.payload.name
        }
    }
}

const updateEditCompetenceName = (state, action) => {
    return {
        ...state,
        competence: {
            ...state.competence,
            name: action.payload.name
        }
    }
}

const resetEditCompetence = (state, action) => {
    return {
        ...state,
        competence: {
            id: '',
            name: '',
            description: '',
            indicators: [],
            competenceGroupId: ''
        }
    }
}

const resetEditCompetenceGroup = (state, action) => {
    return {
        ...state,
        competenceGroup: {
            id: '',
            name: '',
            description: ''
        }
    }
}

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case editEntityAction.SET_EDIT_COMPETENCE:
            return setEditCompetence(state, action);
        case editEntityAction.SET_EDIT_COMPETENCE_GROUP:
            return setEditCompetenceGroup(state, action);
        case editEntityAction.UPDATE_EDIT_COMPETENCE_DESCRIPTION:
            return updateEditCompetenceDescription(state, action);
        case editEntityAction.UPDATE_EDIT_COMPETENCE_GROUP_DESCRIPTION:
            return updateEditCompetenceGroupDescription(state, action);
        case editEntityAction.UPDATE_EDIT_COMPETENCE_GROUP_ID:
            return updateEditCompetenceGroupId(state, action);
        case editEntityAction.UPDATE_EDIT_COMPETENCE_INDICATORS:
            return updateEditCompetenceIndicators(state, action);
        case editEntityAction.UPDATE_EDIT_COMPETENCE_INDICATOR_INFLUENCE:
            return updateEditCompetenceIndicatorInfluence(state, action);
        case editEntityAction.UPDATE_EDIT_COMPETENCE_GROUP_NAME:
            return updateEditCompetenceGroupName(state, action);
        case editEntityAction.UPDATE_EDIT_COMPETENCE_NAME:
            return updateEditCompetenceName(state, action);
        case editEntityAction.RESET_EDIT_COMPETENCE:
            return resetEditCompetence(state, action);
        case editEntityAction.RESET_EDIT_COMPETENCE_GROUP:
            return resetEditCompetenceGroup(state, action);
        default:
            return state;
    }    
}
    
export default rootReducer;