import { 
    NEW_COMPETENCIES_GROUP_NAME_SUCCESS_VALIDATION, 
    NEW_COMPETENCIES_GROUP_DESCRIPTION_SUCCESS_VALIDATION, 
    NEW_COMPETENCIES_GROUP_NAME_ERROR_VALIDATION, 
    NEW_COMPETENCIES_GROUP_DESCRIPTION_ERROR_VALIDATION, 
    NEW_COMPETENCIES_GROUP_SAVED, 
    UPDATE_NEW_COMPETENCIES_GROUP_NAME, 
    UPDATE_NEW_COMPETENCIES_GROUP_DESCRIPTION 
} from '../../../actions/library-page/competencies/new-competencies-group'


export const newCompetenciesGroupNameSuccessValidation = () => {
    return {
        type: NEW_COMPETENCIES_GROUP_NAME_SUCCESS_VALIDATION
    }
}
export const newCompetenciesGroupDescriptionSuccessValidation = () => {
    return {
        type: NEW_COMPETENCIES_GROUP_DESCRIPTION_SUCCESS_VALIDATION
    }
}
export const newCompetenciesGroupNameErrorValidation = (errorMessage) => {
    return {
        type: NEW_COMPETENCIES_GROUP_NAME_ERROR_VALIDATION,
        value: errorMessage
    }
}
export const newCompetenciesGroupDescriptionErrorValidation = (errorMessage) => {
    return {
        type: NEW_COMPETENCIES_GROUP_DESCRIPTION_ERROR_VALIDATION,
        value: errorMessage
    }
}
export const newCompetenciesGroupSaved = () => {
    return {
        type: NEW_COMPETENCIES_GROUP_SAVED
    }
}
export const updateNewCompetenciesGroupName = name => {
    return {
        type: UPDATE_NEW_COMPETENCIES_GROUP_NAME,
        value: name
    }
}
export const updateNewCompetenciesGroupsDescription = description => {
    return {
        type: UPDATE_NEW_COMPETENCIES_GROUP_DESCRIPTION,
        value: description
    }
}