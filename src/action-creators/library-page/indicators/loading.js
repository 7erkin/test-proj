import { START_LOADING_INDICATORS_GROUPS, FINISH_LOADING_INDICATORS_GROUPS, START_LOADING_INDICATORS, FINISH_LOADING_INDICATORS } from "../../../actions/library-page/indicators/loading";

export const startLoadingIndicatorsGroups = () => {
    return {
        type: START_LOADING_INDICATORS_GROUPS
    }
}

export const finishLoadingIndicatorsGroups = () => {
    return {
        type: FINISH_LOADING_INDICATORS_GROUPS
    }
}

export const startLoadingIndicators = () => {
    return {
        type: START_LOADING_INDICATORS
    }
}

export const finishLoadingIndicators = () => {
    return {
        type: FINISH_LOADING_INDICATORS
    }
}