import initialState from "./initial-state";

export const editPositionSubdivisionIdSuccessValidation = (state) => {
   return {
      ...state,
      subdivisionId: {
         ...state.subdivisionId,
         errorMessage: ''
      }
   }
} 

export const editPositionNameSuccessValidation = (state) => {
   return {
      ...state,
      name: {
         ...state.name,
         errorMessage: ''
      }
   }
} 

export const editPositionDescriptionSuccessValidation = (state) => {
   return {
      ...state,
      description: {
         ...state.description,
         errorMessage: ''
      }
   }
} 

export const editPositionSubdivisionIdErrorValidation = (state, value) => {
   return {
      ...state,
      subdivisionId: {
         ...state.subdivisionId,
         errorMessage: value
      }
   }
} 

export const editPositionNameErrorValidation = (state, value) => {
   return {
      ...state,
      name: {
         ...state.name,
         errorMessage: value
      }
   }
} 

export const editPositionDescriptionErrorValidation = (state, value) => {
   return {
      ...state,
      description: {
         ...state.description,
         errorMessage: value
      }
   }
} 

export const resetEditPosition = (state) => {
   return {
      ...initialState
   }
} 

export const editPositionSaved = (state) => {
   return {
      ...initialState 
   }
} 

export const updateEditPositionSubdivisionId = (state, value) => {
   return {
      ...state,
      subdivisionId: {
         ...state.subdivisionId,
         value
      }
   }
} 

export const updateEditPositionName = (state, value) => {
   return {
      ...state,
      name: {
         ...state.name,
         value
      }
   }
} 

export const updateEditPositionDescription = (state, value) => {
   return {
      ...state,
      description: {
         ...state.description,
         value
      }
   }
} 

export const setEditPosition = (state, { name, description, subdivisionId }) => {
   return {
      name: {
         ...state.value,
         value: name
      },
      description: {
         ...state.description,
         value: description
      },
      subdivisionId: {
         ...state.subdivisionId,
         value: subdivisionId
      }
   }
} 

