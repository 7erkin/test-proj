import {loadingAction} from '../../actions/competence'

export const startLoadingIndicators = () => {
    return {
        type: loadingAction.START_LOADING_INDICATORS
    }
}

export const startLoadingIndicatorGroups = () => {
    return {
        type: loadingAction.START_LOADING_INDICATOR_GROUPS
    }
}

export const startLoadingCompetencies = () => {
    return {
        type: loadingAction.START_LOADING_COMPETENCIES
    }
}

export const startLoadingCompetenceGroups = () => {
    return {
        type: loadingAction.START_LOADING_COMPETENCE_GROUPS
    }
}

export const indicatorsLoaded = () => {
    return {
        type: loadingAction.INDICATORS_LOADED
    }
}

export const indicatorGroupsLoaded = () => {
    return {
        type: loadingAction.INDICATOR_GROUPS_LOADED
    }
}

export const competenciesLoaded = () => {
    return {
        type: loadingAction.COMPETENCIES_LOADED
    }
}

export const competenceGroupsLoaded = () => {
    return {
        type: loadingAction.COMPETENCE_GROUPS_LOADED
    }
}