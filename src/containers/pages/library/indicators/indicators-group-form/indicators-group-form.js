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
import withValidation from './with-validation';
import withCommonFunctional from './with-common-functional';

export const AddIndicatorsGroupForm = connect(mapStoreToAddIndicatorsGroupFormProps)(
                                    withStaffixService(
                                        withEffectApplyingChanges(
                                            withValidation(
                                                withCommonFunctional(SimpleAddIndicatorsGroupForm)))))

export const EditIndicatorsGroupForm = connect(mapStoreToEditIndicatorsGroupFormProps)(
                                    withStaffixService(
                                        withEffectApplyingChanges(
                                            withValidation(
                                                withCommonFunctional(SimpleEditIndicatorsGroupForm)))))