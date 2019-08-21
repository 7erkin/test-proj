import initialState from './initial-state'

export const newSubdivisionNameSuccessValidation = (state) => {
   return {
      ...state,
      name: {
         ...state.name,
         errorMessage: ''
      }
   }
} 

export const newSubdivisionDescriptionSuccessValidation = (state) => {
   return {
      ...state,
      description: {
         ...state.description,
         errorMessage: ''
      }
   }
} 

export const newSubdivisionDescriptionErrorValidation = (state, value) => {
   return {
      ...state,
      description: {
         ...state.description,
         errorMessage: value
      }
   }
} 

export const newSubdivisionNameErrorValidation = (state, value) => {
   return {
      ...state,
      name: {
         ...state.name,
         errorMessage: value
      }
   }
} 

export const resetNewSubdivision = (state) => {
   return {
      ...initialState
   }
} 

export const newSubdivisionSaved = (state) => {
   return {
      ...initialState
   }
} 

export const updateNewSubdivisionName = (state, value) => {
   return {
      ...state,
      name: {
         ...state.name,
         value
      }
   }
} 

export const updateNewSubdivisionDescription = (state, value) => {
   return {
      ...state,
      description: {
         ...state.description,
         value
      }
   }
} 

