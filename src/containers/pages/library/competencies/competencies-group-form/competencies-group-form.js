import SimpleAddCompetenciesGroupForm from './add-competencies-group-form'
import SimpleEditCompetenciesGroupForm from './edit-competencies-group-form'

import { mapStoreToAddCompetenciesGroupFormProps } from './add-competencies-group-form'
import { mapStoreToEditCompetenciesGroupFormProps } from './edit-competencies-group-form'
import { connect } from 'react-redux';
import withStaffixService from '../../../../../hoc/hoc-services/with-staffix-service';
import withEffectApplyingChanges from '../../../../../hoc/with-effect-applying-changes';
import withCommonFunctional from './with-common-functional';
import withValidationApi from './with-validation-api';
import withAddFormValidation from './with-add-form-validation';
import withEditFormValidation from './with-edit-form-validation';

const AddCompetenciesGroupForm = connect(mapStoreToAddCompetenciesGroupFormProps)(
    withStaffixService(
        withEffectApplyingChanges(
            withCommonFunctional(
                withValidationApi(
                    withAddFormValidation(SimpleAddCompetenciesGroupForm))))))

const EditCompetenciesGroupForm = connect(mapStoreToEditCompetenciesGroupFormProps)(
    withStaffixService(
        withEffectApplyingChanges(
            withCommonFunctional(
                withValidationApi(
                    withEditFormValidation(SimpleEditCompetenciesGroupForm))))))

export {
    AddCompetenciesGroupForm,
    EditCompetenciesGroupForm
}                    