import { IndicatorGroup, IndicatorStore, Indicator } from "../../types/indicator-page";
import { ISaveLoadedIndicatorGroup, IAddIndicatorGroup, IDeleteIndicator, IDeleteIndicatorGroup, IAddIndicator } from "../../types/action/indicator";
import { getRandomId } from "../../library";

export const ADD_INDICATOR_GROUP = 'ADD_INDICATOR_GROUP';
export const ADD_INDICATOR = 'ADD_INDICATOR';
export const SAVE_LOADED_INDICATOR_GROUPS = 'SAVE_LOADED_INDICATOR_GROUPS';
export const DELETE_INDICATOR = 'DELETE_INDICATOR';
export const DELETE_INDICATOR_GROUP = 'DELETE_INDICATOR_GROUP';

 export const addIndicatorGroup = (indicatorGroupName: string, groupDescription: string): IAddIndicatorGroup => {
     return {
         type: ADD_INDICATOR_GROUP,
         payload: {
            indicatorGroup: new IndicatorGroup({id: getRandomId(), name: indicatorGroupName, description: groupDescription})
         }
     };
 };

export const deleteIndicator = (indicatorId: number, indicatorGroupId: number): IDeleteIndicator => {
    return {
        type: DELETE_INDICATOR,
        payload: {
            groupId: indicatorGroupId,
            indicatorId: indicatorId
        }
    };
};

export const deleteIndicatorGroup = (groupId: number): IDeleteIndicatorGroup => {
    return {
        type: DELETE_INDICATOR_GROUP,
        payload: {
            id: groupId
        }
    };
};

 export const addIndicator = (indicatorName: string, indicatorGroupId: number): IAddIndicator => {
     return {
         type: ADD_INDICATOR,
         payload: {
            groupId: indicatorGroupId,
            indicator: new Indicator(getRandomId(), indicatorName)
         }
     };
 };

 export const saveLoadedIndicatorGroups = (loadedData: string): ISaveLoadedIndicatorGroup => {
    debugger;
    const store = IndicatorStore.fromStringToStore(IndicatorStore.transformAfterResponse(loadedData));
    return {
        type: SAVE_LOADED_INDICATOR_GROUPS,
        payload: {
            indicatorStore: store
        }
    };
 }