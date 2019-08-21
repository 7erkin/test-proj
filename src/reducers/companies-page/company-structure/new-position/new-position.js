import initialState from "../network-waiting/initial-state";

export const newPositionSubdivisionIdSuccessValidation = (state) => {
   return {
      ...state,
      subdivisionId: {
         ...state.subdivisionId,
         errorMessage: ''
      }
   }
} 

export const newPositionNameSuccessValidation = (state) => {
   return {
      ...state,
      name: {
         ...state.name,
         errorMessage: ''
      }
   }
} 

export const newPositionDescriptionSuccessValidation = (state) => {
   return {
      ...state,
      description: {
         ...state.description,
         errorMessage: ''
      }
   }
} 

export const newPositionSubdivisionIdErrorValidation = (state, value) => {
   return {
      ...state,
      subdivisionId: {
         ...state.subdivisionId,
         errorMessage: value
      }
   }
} 

export const newPositionNameErrorValidation = (state, value) => {
   return {
      ...state,
      name: {
         ...state.name,
         errorMessage: value
      }
   }
} 

export const newPositionDescriptionErrorValidation = (state, value) => {
   return {
      ...state,
      description: {
         ...state.description,
         errorMessage: value
      }
   }
} 

export const resetNewPosition = (state) => {
   return {
      ...initialState
   }
} 

export const newPositionSaved = (state) => {
   return {
      ...initialState
   }
} 

export const updateNewPositionSubdivisionId = (state, value) => {
   return {
      ...state,
      subdivisionId: {
         ...state.subdivisionId,
         value
      } 
   }
} 

export const updateNewPositionName = (state, value) => {
   return {
      ...state,
      name: {
         ...state.name,
         value
      } 
   }
} 

export const updateNewPositionDescription = (state, value) => {
   return {
      ...state,
      description: {
         ...state.description,
         value
      } 
   }
} 

