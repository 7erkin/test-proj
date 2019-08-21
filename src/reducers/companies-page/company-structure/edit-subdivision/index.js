import initialState from './initial-state'

import {
   EDIT_SUBDIVISION_NAME_SUCCESS_VALIDATION,
   EDIT_SUBDIVISION_DESCRIPTION_SUCCESS_VALIDATION,
   EDIT_SUBDIVISION_DESCRIPTION_ERROR_VALIDATION,
   EDIT_SUBDIVISION_NAME_ERROR_VALIDATION,
   RESET_EDIT_SUBDIVISION,
   EDIT_SUBDIVISION_SAVED,
   UPDATE_EDIT_SUBDIVISION_NAME,
   UPDATE_EDIT_SUBDIVISION_DESCRIPTION,
   SET_EDIT_SUBDIVISION
} from '../../../../actions/companies-page/company-structure/edit-subdivision'

import {
   editSubdivisionNameSuccessValidation,
   editSubdivisionDescriptionSuccessValidation,
   editSubdivisionDescriptionErrorValidation,
   editSubdivisionNameErrorValidation,
   resetEditSubdivision,
   editSubdivisionSaved,
   updateEditSubdivisionName,
   updateEditSubdivisionDescription,
   setEditSubdivision
} from './edit-subdivision'

const rootReducer = (state = initialState, { type, value }) => {
   switch(type){
      case EDIT_SUBDIVISION_NAME_SUCCESS_VALIDATION:
         return editSubdivisionNameSuccessValidation(state)
      case EDIT_SUBDIVISION_DESCRIPTION_SUCCESS_VALIDATION:
         return editSubdivisionDescriptionSuccessValidation(state)
      case EDIT_SUBDIVISION_DESCRIPTION_ERROR_VALIDATION:
         return editSubdivisionDescriptionErrorValidation(state)
      case EDIT_SUBDIVISION_NAME_ERROR_VALIDATION:
         return editSubdivisionNameErrorValidation(state, value)
      case RESET_EDIT_SUBDIVISION:
         return resetEditSubdivision(state)
      case EDIT_SUBDIVISION_SAVED:
         return editSubdivisionSaved(state)
      case UPDATE_EDIT_SUBDIVISION_NAME:
         return updateEditSubdivisionName(state, value)
      case UPDATE_EDIT_SUBDIVISION_DESCRIPTION:
         return updateEditSubdivisionDescription(state, value)
      case SET_EDIT_SUBDIVISION:
         return setEditSubdivision(state, value)
      default: 
         return state
   }
}

export default rootReducer