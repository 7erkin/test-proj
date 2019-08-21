export const startLoadingSubdivisions = (state) => {
   return {
      ...state,
      loadingSubdivisions: true
   }
} 

export const finishLoadingSubdivisions = (state) => {
   return {
      ...state,
      loadingSubdivisions: false
   }
} 

export const startLoadingPositions = (state) => {
   return {
      ...state,
      loadingPositions: true
   }
} 

export const finishLoadingPositions = (state) => {
   return {
      ...state,
      loadingPositions: false
   }
} 

