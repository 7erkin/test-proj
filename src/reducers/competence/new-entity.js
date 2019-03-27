import {newEntityAction} from '../../actions/competence'

const initialState = {
    competence: {
        name: '',
        description: '',
        indicators: [],
        groupId: null
    }, // хранится информация с формы добавления новой компетенции
    competenceGroup: {
        name: '',
        description: ''
    }, // хранится информация с формы добавления(/редактирования) новой компетенции
}

const updateNewCompetenceName = (state, action) => {
    return {
        ...state,
        competence: {
            ...state.competence,
            name: action.payload.name
        }
    }
}

const updateNewCompetenceDescription = (state, action) => {
    return {
        ...state,
        competence: {
            ...state.competence,
            description: action.payload.description
        }
    }
}

const updateNewCompetenceIndicators = (state, action) => {
    const {id, name, groupId} = action.payload;
    const indicators = state.competence.indicators.slice();
    const index = indicators.findIndex(el => el.id == id);

    if(index == -1)
        indicators.push({id, name, influence: 'Positive', groupId});
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

const updateNewCompetenceIndicatorInfluence = (state, action) => {
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

const resetNewCompetence = (state, action) => {
    return {
        ...state,
        competence: {
            name: '',
            description: '',
            indicators: []
        }
    }
}

const updateNewCompetenceGroupName = (state, action) => {
    return {
        ...state,
        competenceGroup: {
            ...state.competenceGroup,
            name: action.payload.name
        }
    }
}

const updateNewCompetenceGroupDescription = (state, action) => {
    return {
        ...state,
        competenceGroup: {
            ...state.competenceGroup,
            description: action.payload.description
        }
    }
}

const updateNewCompetenceGroupId = (state, action) => {
    return {
        ...state,
        competence: {
            ...state.competence,
            groupId: action.payload.id
        }
    }
}

const resetNewCompetenceGroup = (state, action) => {
    return {
        ...state,
        competenceGroup: {
            name: '',
            description: ''
        }
    }
}

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case newEntityAction.UPDATE_NEW_COMPETENCE_NAME:
            return updateNewCompetenceName(state, action);
        case newEntityAction.UPDATE_NEW_COMPETENCE_DESCRIPTION:
            return updateNewCompetenceDescription(state, action);
        case newEntityAction.UPDATE_NEW_COMPETENCE_INDICATORS:
            return updateNewCompetenceIndicators(state, action);
        case newEntityAction.UPDATE_NEW_COMPETENCE_INDICATOR_INFLUENCE:
            return updateNewCompetenceIndicatorInfluence(state, action);
        case newEntityAction.RESET_NEW_COMPETENCE:
            return resetNewCompetence(state, action);
        case newEntityAction.UPDATE_NEW_COMPETENCE_GROUP_NAME:
            return updateNewCompetenceGroupName(state, action);
        case newEntityAction.UPDATE_NEW_COMPETENCE_GROUP_DESCRIPTION:
            return updateNewCompetenceGroupDescription(state, action);
        case newEntityAction.RESET_NEW_COMPETENCE_GROUP:
            return resetNewCompetenceGroup(state, action);
        case newEntityAction.UPDATE_NEW_COMPETENCE_GROUP_ID:
            return updateNewCompetenceGroupId(state, action);
        default:
            return state;
    }    
}
    
    export default rootReducer;