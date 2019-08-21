import { findByWordEntry, updateDeletedEntities } from "../../../../custom-library"

export const updateVisibleSubdivisions = (state, value) => {
   return {
      ...state,
      visibleSubdivisions: findByWordEntry(state.subdivisions, value)
   }
} 

export const updateVisiblePositions = (state, value) => {
   return {
      ...state,
      visiblePositions: findByWordEntry(state.positions, value)
   }
} 

export const subdivisionsDeleted = (state) => {
   return {
      ...state,
      deletedSubdivisions: []
   }
} 

export const positionsDeleted = (state) => {
   return {
      ...state,
      positionsDeleted: []
   }
} 

export const saveLoadedSubdivisions = (state, value) => {
   return {
      ...state,
      subdivisions: value,
      visibleSubdivisions: value
   }
} 

export const saveLoadedPositions = (state, value) => {
   alert()
   return {
      ...state,
      positions: value,
      visiblePositions: value
   }
} 

export const updateDeletedSubdivisions = (state, value) => {
   return {
      ...state,
      deletedSubdivisions: updateDeletedEntities(state.deletedSubdivisions, value)
   }
} 

export const updateDeletedPositions = (state, value) => {
   return {
      ...state,
      deletedPositions: updateDeletedEntities(state.deletedPositions, value)
   }
} 

export const resetDeletedSubdivisions = (state) => {
   return {
      ...state,
      deletedSubdivisions: []
   }
} 

export const resetDeletedPositions = (state) => {
   return {
      ...state,
      deletedPositions: []
   }
} 

