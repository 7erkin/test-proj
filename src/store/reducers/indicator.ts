import {
    ADD_INDICATOR,
    ADD_INDICATOR_GROUP,
    SAVE_LOADED_INDICATOR_GROUPS,
    DELETE_INDICATOR,
    DELETE_INDICATOR_GROUP
} from '../actions/indicator'

import { IndicatorStore } from '../../types/indicator-page';
import { IAddIndicator, IAddIndicatorGroup, ISaveLoadedIndicatorGroup, IDeleteIndicatorGroup, IDeleteIndicator } from '../../types/action/indicator';
import IAction from '../../types/action';

const addIndicatorReducer = (state: IndicatorStore, action: IAddIndicator): IndicatorStore => {
    const nextState = IndicatorStore.copy(state);
    nextState.createIndicator(action.payload.groupId, action.payload.indicator);
    return nextState;
};

const addIndicatorGroupReducer = (state: IndicatorStore, action: IAddIndicatorGroup): IndicatorStore => {
    const nextState = IndicatorStore.copy(state);
    debugger;
    nextState.createIndicatorGroup(action.payload.indicatorGroup);
    return nextState;
};

const saveLoadedIndicatorGroupsReducer = (state: IndicatorStore, action: ISaveLoadedIndicatorGroup): IndicatorStore => {
    return action.payload.indicatorStore;
}

const deleteIndicatorReducer = (state: IndicatorStore, action: IDeleteIndicator): IndicatorStore => {
    debugger;
    const nextState = IndicatorStore.copy(state);
    nextState.deleteIndicator(action.payload.groupId, action.payload.indicatorId);
    return nextState;
};

const deleteIndicatorGroupReducer = (state: IndicatorStore, action: IDeleteIndicatorGroup): IndicatorStore => {
    const nextState = IndicatorStore.copy(state);
    nextState.deleteIndicatorGroup(action.payload.id);
    return nextState;
};

const initialState = new IndicatorStore({});

const rootReducer = (state: IndicatorStore = initialState, action: IAction): IndicatorStore => {
    switch(action.type) {
        case ADD_INDICATOR:
            return addIndicatorReducer(state, action as IAddIndicator);
        case ADD_INDICATOR_GROUP:
            return addIndicatorGroupReducer(state, action as IAddIndicatorGroup);
        case SAVE_LOADED_INDICATOR_GROUPS:
            return saveLoadedIndicatorGroupsReducer(state, action as ISaveLoadedIndicatorGroup);
        case DELETE_INDICATOR:
            return deleteIndicatorReducer(state, action as IDeleteIndicator);
        case DELETE_INDICATOR_GROUP:
            return deleteIndicatorGroupReducer(state, action as IDeleteIndicatorGroup);
        default:
            return state; 
    }
};

export default rootReducer;