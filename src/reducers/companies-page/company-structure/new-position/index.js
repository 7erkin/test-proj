import initialState from './initial-state'

import {
   NEW_POSITION_SUBDIVISION_ID_SUCCESS_VALIDATION,
   NEW_POSITION_NAME_SUCCESS_VALIDATION,
   NEW_POSITION_DESCRIPTION_SUCCESS_VALIDATION,
   NEW_POSITION_SUBDIVISION_ID_ERROR_VALIDATION,
   NEW_POSITION_NAME_ERROR_VALIDATION,
   NEW_POSITION_DESCRIPTION_ERROR_VALIDATION,
   RESET_NEW_POSITION,
   NEW_POSITION_SAVED,
   UPDATE_NEW_POSITION_SUBDIVISION_ID,
   UPDATE_NEW_POSITION_NAME,
   UPDATE_NEW_POSITION_DESCRIPTION
} from '../../../../actions/companies-page/company-structure/new-position'

import {
   newPositionSubdivisionIdSuccessValidation,
   newPositionNameSuccessValidation,
   newPositionDescriptionSuccessValidation,
   newPositionSubdivisionIdErrorValidation,
   newPositionNameErrorValidation,
   newPositionDescriptionErrorValidation,
   resetNewPosition,
   newPositionSaved,
   updateNewPositionSubdivisionId,
   updateNewPositionName,
   updateNewPositionDescription
} from './new-position'

const rootReducer = (state = initialState, { type, value }) => {
   switch(type){
      case NEW_POSITION_SUBDIVISION_ID_SUCCESS_VALIDATION:
         return newPositionSubdivisionIdSuccessValidation(state)
      case NEW_POSITION_NAME_SUCCESS_VALIDATION:
         return newPositionNameSuccessValidation(state)
      case NEW_POSITION_DESCRIPTION_SUCCESS_VALIDATION:
         return newPositionDescriptionSuccessValidation(state)
      case NEW_POSITION_SUBDIVISION_ID_ERROR_VALIDATION:
         return newPositionSubdivisionIdErrorValidation(state, value)
      case NEW_POSITION_NAME_ERROR_VALIDATION:
         return newPositionNameErrorValidation(state, value)
      case NEW_POSITION_DESCRIPTION_ERROR_VALIDATION:
         return newPositionDescriptionErrorValidation(state, value)
      case RESET_NEW_POSITION:
         return resetNewPosition(state)
      case NEW_POSITION_SAVED:
         return newPositionSaved(state)
      case UPDATE_NEW_POSITION_SUBDIVISION_ID:
         return updateNewPositionSubdivisionId(state, value)
      case UPDATE_NEW_POSITION_NAME:
         return updateNewPositionName(state, value)
      case UPDATE_NEW_POSITION_DESCRIPTION:
         return updateNewPositionDescription(state, value)
      default: 
         return state
   }
}

export default rootReducer