export default {
    indicators: [],
    indicatorsGroups: [],
    deletedIndicators: [],
    deletedIndicatorsGroups: [],
    newIndicator: {
        name: '',
        idGroup: ''
    },
    editIndicator: {
        name: '',
        idGroup: ''
    },
    newIndicatorsGroup: {
        name: '',
        description: ''
    },
    editIndicatorsGroup: {
        name: '',
        description: ''
    },

    loadingIndicators: false,
    applyingChanges: false,
    loadingInitial: false,

    competencies: [],
    competenciesGroups: [],
    deletedCompetencies: [],
    deletedCompetenciesGroups: [],
    newCompetence: {
        name: '',
        description: '',
        idGroup: '',
        indicators: []
    },
    editCompetence: {
        name: '',
        description: '',
        idGroup: '',
        indicators: []
    },
    newCompetenciesGroup: {
        name: '',
        description: ''
    },
    editCompetenciesGroup: {
        name: '',
        description: ''
    },

    loadingCompetencies: false,

    loadingIndicatorsGroups: false
}