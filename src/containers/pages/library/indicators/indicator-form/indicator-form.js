import SimpleAddIndicatorForm from './add-indicator-form'
import {
    mapStoreToAddIndicatorFormProps
} from './add-indicator-form'

import SimpleEditIndicatorForm from './edit-indicator-form'
import {
    mapStoreToEditIndicatorFormProps
} from './edit-indicator-form'
import { connect } from 'react-redux';
import withStaffixService from '../../../../../hoc/hoc-services/with-staffix-service';
import withEffectApplyingChanges from '../../../../../hoc/with-effect-applying-changes';
import withCommonFunctional from './with-common-functional';
import withValidationApi from './with-validation-api';
import withEditFormValidationLogic from './with-edit-form-validation-logic';
import withNewFormValidationLogic from './with-new-form-validation-logic';

const AddIndicatorForm = connect(mapStoreToAddIndicatorFormProps)(
                            withStaffixService(
                                withEffectApplyingChanges(
                                    withValidationApi(
                                        withCommonFunctional(
                                            withNewFormValidationLogic(SimpleAddIndicatorForm))))))

const EditIndicatorForm = connect(mapStoreToEditIndicatorFormProps)(
                            withStaffixService(
                                withEffectApplyingChanges(
                                    withValidationApi(
                                        withCommonFunctional(
                                            withEditFormValidationLogic(SimpleEditIndicatorForm))))))

export {
    AddIndicatorForm,
    EditIndicatorForm
}