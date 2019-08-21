import initialState from "./initial-state";

export const editSubdivisionNameSuccessValidation = (state) => {
   return {
      ...state,
      name: {
         ...state.name,
         errorMessage: ''
      }
   }
} 

export const editSubdivisionDescriptionSuccessValidation = (state) => {
   return {
      ...state,
      description: {
         ...state.description,
         errorMessage: ''
      }
   }
} 

export const editSubdivisionDescriptionErrorValidation = (state, value) => {
   return {
      ...state,
      description: {
         ...state.description,
         errorMessage: value
      }
   }
} 

export const editSubdivisionNameErrorValidation = (state, value) => {
   return {
      ...state,
      name: {
         ...state.name,
         errorMessage: value
      }
   }
} 

export const resetEditSubdivision = (state) => {
   return {
      ...initialState
   }
} 

export const editSubdivisionSaved = (state) => {
   return {
      ...initialState
   }
} 

export const updateEditSubdivisionName = (state, value) => {
   return {
      ...state,
      name: {
         ...state.name,
         value
      }
   }
} 

export const updateEditSubdivisionDescription = (state, value) => {
   return {
      ...state,
      description: {
         ...state.description,
         value
      }
   }
} 

export const setEditSubdivision = (state, { name, description }) => {
   return {
      name: {
         ...state.name,
         value: name
      },
      description: {
         ...state.description,
         value: description
      }
   }
} 

