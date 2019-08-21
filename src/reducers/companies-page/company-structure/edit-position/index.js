import initialState from './initial-state'

import {
   EDIT_POSITION_SUBDIVISION_ID_SUCCESS_VALIDATION,
   EDIT_POSITION_NAME_SUCCESS_VALIDATION,
   EDIT_POSITION_DESCRIPTION_SUCCESS_VALIDATION,
   EDIT_POSITION_SUBDIVISION_ID_ERROR_VALIDATION,
   EDIT_POSITION_NAME_ERROR_VALIDATION,
   EDIT_POSITION_DESCRIPTION_ERROR_VALIDATION,
   RESET_EDIT_POSITION,
   EDIT_POSITION_SAVED,
   UPDATE_EDIT_POSITION_SUBDIVISION_ID,
   UPDATE_EDIT_POSITION_NAME,
   UPDATE_EDIT_POSITION_DESCRIPTION,
   SET_EDIT_POSITION
} from '../../../../actions/companies-page/company-structure/edit-position'

import {
   editPositionSubdivisionIdSuccessValidation,
   editPositionNameSuccessValidation,
   editPositionDescriptionSuccessValidation,
   editPositionSubdivisionIdErrorValidation,
   editPositionNameErrorValidation,
   editPositionDescriptionErrorValidation,
   resetEditPosition,
   editPositionSaved,
   updateEditPositionSubdivisionId,
   updateEditPositionName,
   updateEditPositionDescription,
   setEditPosition
} from './edit-position'

const rootReducer = (state = initialState, { type, value }) => {
   switch(type){
      case EDIT_POSITION_SUBDIVISION_ID_SUCCESS_VALIDATION:
         return editPositionSubdivisionIdSuccessValidation(state)
      case EDIT_POSITION_NAME_SUCCESS_VALIDATION:
         return editPositionNameSuccessValidation(state)
      case EDIT_POSITION_DESCRIPTION_SUCCESS_VALIDATION:
         return editPositionDescriptionSuccessValidation(state)
      case EDIT_POSITION_SUBDIVISION_ID_ERROR_VALIDATION:
         return editPositionSubdivisionIdErrorValidation(state, value)
      case EDIT_POSITION_NAME_ERROR_VALIDATION:
         return editPositionNameErrorValidation(state, value)
      case EDIT_POSITION_DESCRIPTION_ERROR_VALIDATION:
         return editPositionDescriptionErrorValidation(state, value)
      case RESET_EDIT_POSITION:
         return resetEditPosition(state)
      case EDIT_POSITION_SAVED:
         return editPositionSaved(state)
      case UPDATE_EDIT_POSITION_SUBDIVISION_ID:
         return updateEditPositionSubdivisionId(state, value)
      case UPDATE_EDIT_POSITION_NAME:
         return updateEditPositionName(state, value)
      case UPDATE_EDIT_POSITION_DESCRIPTION:
         return updateEditPositionDescription(state, value)
      case SET_EDIT_POSITION:
         return setEditPosition(state, value)
      default: 
         return state
   }
}

export default rootReducer