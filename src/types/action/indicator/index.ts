import IAction from "../index";
import { IndicatorGroup, Indicator, IndicatorStore } from "../../indicator-page";

export interface IAddIndicatorGroup extends IAction{
    payload: {
        indicatorGroup: IndicatorGroup
    }
}

export interface IDeleteIndicator extends IAction{
    payload: {
        groupId: number,
        indicatorId: number
    }
}

export interface IDeleteIndicatorGroup extends IAction{
    payload: {
        id: number
    }
}

export interface IAddIndicator extends IAction{
    payload: {
        groupId: number,
        indicator: Indicator
    }
}

export interface ISaveLoadedIndicatorGroup extends IAction{
    payload: {
        indicatorStore: IndicatorStore
    }
}