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
import withValidation from '../../competencies/competence-form/with-validation';
import withCommonFunctional from './with-common-functional';

const AddIndicatorForm = connect(mapStoreToAddIndicatorFormProps)(
                            withStaffixService(
                                withEffectApplyingChanges(
                                    withValidation(
                                        withCommonFunctional(
                                            SimpleAddIndicatorForm)))))

const EditIndicatorForm = connect(mapStoreToEditIndicatorFormProps)(
                            withStaffixService(
                                withEffectApplyingChanges(
                                    withValidation(
                                        withCommonFunctional(
                                            SimpleEditIndicatorForm)))))

export {
    AddIndicatorForm,
    EditIndicatorForm
}