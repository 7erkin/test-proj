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

    visibleIndicators: [],
    visibleIndicatorsGroups: [],
    visibleCompetencies: [],
    visibleCompetenciesGroups: [],

    loadingCompetencies: false,

    loadingIndicatorsGroups: false,

    questionsGroups: [],
    loadingQuestionsGroupContent: false,
    questionsGroupContent: [],
    newQuestion: {
        body: {
            text: '',
            errorMessage: ''
        },
        idCompetence: {
            text: '',
            errorMessage: ''
        }
    },
    deletedQuestions: [],
    deletedQuestionsGroups: [],
    newQuestionsGroup: {
        name: '',
        description: ''
    },
    editQuestionsGroup: {
        name: '',
        description: ''
    },
    questions: [],
    pointedQuestions: [],
    loadingQuestions: false
}