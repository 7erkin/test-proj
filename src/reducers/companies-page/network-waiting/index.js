import initialState from './initial-state'

import {
   START_LOADING_COMPANIES,
   FINISH_LOADING_COMPANIES,
   START_SAVING_NEW_COMPANY,
   FINISH_SAVING_NEW_COMPANY,
   START_DELETING_COMPANIES,
   FINISH_DELETING_COMPANIES
} from '../../../actions/companies-page/network-waiting'

import {
   startLoadingCompanies,
   finishLoadingCompanies,
   startSavingNewCompany,
   finishSavingNewCompany,
   startDeletingCompanies,
   finishDeletingCompanies
} from './network-waiting'

const rootReducer = (state = initialState, { type }) => {
   switch(type){
      case START_LOADING_COMPANIES:
         return startLoadingCompanies(state)
      case FINISH_LOADING_COMPANIES:
         return finishLoadingCompanies(state)
      case START_SAVING_NEW_COMPANY:
         return startSavingNewCompany(state)
      case FINISH_SAVING_NEW_COMPANY:
         return finishSavingNewCompany(state)
      case START_DELETING_COMPANIES:
         return startDeletingCompanies(state)
      case FINISH_DELETING_COMPANIES:
         return finishDeletingCompanies(state)
      default: 
         return state
   }
}

export default rootReducer