import SimpleAddIndicatorsGroupForm from './add-indicators-group-form'
import {
    mapStoreToAddIndicatorsGroupFormProps
} from './add-indicators-group-form'

import SimpleEditIndicatorsGroupForm from './edit-indicators-group-form'
import {
    mapStoreToEditIndicatorsGroupFormProps
} from './edit-indicators-group-form'
import { connect } from 'react-redux';
import withStaffixService from '../../../../../hoc/hoc-services/with-staffix-service';
import withEffectApplyingChanges from '../../../../../hoc/with-effect-applying-changes';
import withValidationApi from './with-validation-api';
import withCommonFunctional from './with-common-functional';
import withAddFormValidation from './with-add-form-validation';
import withEditFormValidation from './with-edit-form-validation';

export const AddIndicatorsGroupForm = connect(mapStoreToAddIndicatorsGroupFormProps)(
                                    withStaffixService(
                                        withEffectApplyingChanges(
                                            withValidationApi(
                                                withCommonFunctional(
                                                    withAddFormValidation(SimpleAddIndicatorsGroupForm))))))

export const EditIndicatorsGroupForm = connect(mapStoreToEditIndicatorsGroupFormProps)(
                                    withStaffixService(
                                        withEffectApplyingChanges(
                                            withValidationApi(
                                                withCommonFunctional(
                                                    withEditFormValidation(SimpleEditIndicatorsGroupForm))))))