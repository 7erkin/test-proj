// actions say that something has happend. Reducers define how to update State on these actions

// actions name
export const ADD_INDICATOR_GROUP = 'ADD_INDICATOR_GROUP';
export const ADD_INDICATOR = 'ADD_INDICATOR';
export const SAVE_LOADED_INDICATOR_GROUPS = 'SAVE_LOADED_INDICATOR_GROUPS';
export const DELETE_INDICATOR = 'DELETE_INDICATOR';
export const DELETE_INDICATOR_GROUP = 'DELETE_INDICATOR_GROUP';

// actions are objects

 // action creators - for creating actions
 export const addIndicatorGroup = indicatorGroupName => {
     return {
         type: ADD_INDICATOR_GROUP,
         payload: {
            name: indicatorGroupName 
         }
     };
 };

export const deleteIndicator = (indicatorId, indicatorGroupId) => {
    console.log('delete indicator', indicatorId, indicatorGroupId);
    return {
        type: DELETE_INDICATOR,
        payload: {
            groupId: indicatorGroupId,
            indicatorId: indicatorId
        }
    };
};

export const deleteIndicatorGroup = indicatorGroupName => {
    return {
        type: DELETE_INDICATOR_GROUP,
        payload: {
            name: indicatorGroupName
        }
    };
};

 export const addIndicator = (indicatorName, indicatorGroupId) => {
     return {
         type: ADD_INDICATOR,
         payload: {
             groupId: indicatorGroupId,
             name: indicatorName
         }
     };
 };

 export const saveLoadedIndicatorGroups = (indicatorGroups) => {
    return {
        type: SAVE_LOADED_INDICATOR_GROUPS,
        payload: {
            indicatorGroups: indicatorGroups
        }
    };
 }