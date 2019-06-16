import { combineReducers } from 'redux';

import pageManaging from './page-managing'
import indicatorsPage from './indicators'
import competenciesPage from './competencies'
import questionsPage from './questions'

export default combineReducers({
    pageManaging,
    indicatorsPage,
    competenciesPage,
    questionsPage
})