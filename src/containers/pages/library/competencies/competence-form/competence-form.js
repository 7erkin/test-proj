import { connect } from 'react-redux';

import withStaffixService from '../../../../../hoc/hoc-services/with-staffix-service'
import withEffectApplyingChanges from '../../../../../hoc/with-effect-applying-changes'

import withCommonFunctional from './with-common-functional';
import withLoadingIndicatorsGroups from './with-loading-indicators-groups';

import SimpleEditCompetenceForm from './edit-competence-form';
import SimpleAddCompetenceForm from './add-competence-form';

import { mapStoreToEditCompetenceFormProps } from './edit-competence-form'
import { mapStoreToAddCompetenceFormProps } from './add-competence-form'
import withValidation from './with-validation';

// TODO: how to combine view of each CompetenceView
const EditCompetenceForm = connect(mapStoreToEditCompetenceFormProps)(
                                withStaffixService(
                                    withEffectApplyingChanges(
                                        withCommonFunctional(
                                            withLoadingIndicatorsGroups(
                                                withValidation(SimpleEditCompetenceForm))))))

const AddCompetenceForm = connect(mapStoreToAddCompetenceFormProps)(
                                withStaffixService(
                                    withEffectApplyingChanges(
                                        withCommonFunctional(
                                            withLoadingIndicatorsGroups(
                                                withValidation(SimpleAddCompetenceForm))))))

export {
    EditCompetenceForm,
    AddCompetenceForm
}