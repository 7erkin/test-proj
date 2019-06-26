import initialState from './initial-state'

import {
   UPDATE_VISIBLE_COMPANIES,
   SAVE_LOADED_COMPANIES,
   UPDATE_DELETED_COMPANIES,
   RESET_DELETED_COMPANIES,
   COMPANIES_DELETED
} from '../../../actions/companies-page/companies-list'

import {
   updateVisibleCompanies,
   saveLoadedCompanies,
   updateDeletedCompanies,
   resetDeletedCompanies,
   copmaniesDeleted
} from './companies-list'

const rootReducer = (state = initialState, { type, value }) => {
   switch(type){
      case UPDATE_VISIBLE_COMPANIES:
         return updateVisibleCompanies(state, value)
      case SAVE_LOADED_COMPANIES:
         return saveLoadedCompanies(state, value)
      case UPDATE_DELETED_COMPANIES:
         return updateDeletedCompanies(state, value)
      case RESET_DELETED_COMPANIES:
         return resetDeletedCompanies(state)
      case COMPANIES_DELETED:
         return copmaniesDeleted(state)
      default: 
         return state
   }
}

export default rootReducer