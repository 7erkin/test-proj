import { connect } from 'react-redux';

import withStaffixService from '../../../../../hoc/hoc-services/with-staffix-service'
import withEffectApplyingChanges from '../../../../../hoc/with-effect-applying-changes'

import withCommonFunctional from './with-common-functional';
import withLoadingIndicatorsGroups from './with-loading-indicators-groups';

import SimpleEditCompetenceForm from './edit-competence-form';
import SimpleAddCompetenceForm from './add-competence-form';

import { mapStoreToEditCompetenceFormProps } from './edit-competence-form'
import { mapStoreToAddCompetenceFormProps } from './add-competence-form'
import withValidationApi from './with-validation-api';
import withEditFormValidation from './with-edit-form-validation';
import withAddFormValidation from './with-add-form-validation';

// TODO: how to combine view of each CompetenceView
const EditCompetenceForm = connect(mapStoreToEditCompetenceFormProps)(
                                withStaffixService(
                                    withEffectApplyingChanges(
                                        withCommonFunctional(
                                            withLoadingIndicatorsGroups(
                                                withValidationApi(
                                                    withEditFormValidation(SimpleEditCompetenceForm)))))))

const AddCompetenceForm = connect(mapStoreToAddCompetenceFormProps)(
                                withStaffixService(
                                    withEffectApplyingChanges(
                                        withCommonFunctional(
                                            withLoadingIndicatorsGroups(
                                                withValidationApi(
                                                    withAddFormValidation(SimpleAddCompetenceForm)))))))

export {
    EditCompetenceForm,
    AddCompetenceForm
}