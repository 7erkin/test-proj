import common from './copmetencies'
import editCompetenciesGroup from './edit-competencies-group'
import editCompetence from './edit-copmetence'
import loading from './loading'
import newCompetence from './new-competence'
import newCompetenciesGroup from './new-competencies-group'
import { combineReducers } from 'redux';

export default combineReducers({
    common,
    editCompetenciesGroup,
    editCompetence,
    loading,
    newCompetence,
    newCompetenciesGroup
})