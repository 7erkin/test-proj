import React from 'react'
import CustomValidation from '../../../../../base-classes/custom-validation';
import { newCompetenciesGroupNameSuccessValidation, newCompetenciesGroupNameErrorValidation, newCompetenciesGroupDescriptionSuccessValidation, newCompetenciesGroupDescriptionErrorValidation } from '../../../../../action-creators/library-page/competencies/new-competencies-group';

const withAddFormValidation = CompetenciesGroupForm => {
    return class extends CustomValidation {
        constructor(props) {
            super(props)
        }

        validateForm = async () => {
            const {
                dispatch,
                newCompetenciesGroup: {
                    name: { text: name },
                    description: { text: description }
                },
                validateCompetenciesGroupName,
                validateCompetenciesGroupDescription
            } = this.props;

            this.trySubmit();

            const validationData = [
                {
                    value: name,
                    validator: validateCompetenciesGroupName,
                    validationOkCb: dispatch.bind(this, newCompetenciesGroupNameSuccessValidation()),
                    validationErrCb: errorMessage => {
                        dispatch(newCompetenciesGroupNameErrorValidation(errorMessage))
                    }
                },
                {
                    value: description,
                    validator: validateCompetenciesGroupDescription,
                    validationOkCb: dispatch.bind(this, newCompetenciesGroupDescriptionSuccessValidation()),
                    validationErrCb: errorMessage => {
                        dispatch(newCompetenciesGroupDescriptionErrorValidation(errorMessage))
                    }
                }
            ]

            return this.validateAndUpdate(validationData);
        }

        onCompetenciesGroupNameBlur = async () => {
            if(!this.hasAlreadyTrySubmit()) return;

            const {
                dispatch,
                newCompetenciesGroup: {
                    name: { text: name }
                },
                validateCompetenciesGroupName
            } = this.props;

            const validationData = [
                {
                    value: name,
                    validator: validateCompetenciesGroupName,
                    validationOkCb: dispatch.bind(this, newCompetenciesGroupNameSuccessValidation()),
                    validationErrCb: errorMessage => {
                        dispatch(newCompetenciesGroupNameErrorValidation(errorMessage))
                    }
                }
            ]

            this.validateAndUpdate(validationData);
        }

        onCompetenciesGroupDescriptionBlur = async () => {
            if(!this.hasAlreadyTrySubmit()) return;

            const {
                dispatch,
                newCompetenciesGroup: {
                    description: { text: description }
                },
                validateCompetenciesGroupDescription
            } = this.props;

            const validationData = [
                {
                    value: description,
                    validator: validateCompetenciesGroupDescription,
                    validationOkCb: dispatch.bind(this, newCompetenciesGroupDescriptionSuccessValidation()),
                    validationErrCb: errorMessage => {
                        dispatch(newCompetenciesGroupDescriptionErrorValidation(errorMessage))
                    }
                }
            ]

            this.validateAndUpdate(validationData);
        }

        render() {

            return (
                <CompetenciesGroupForm {...this.props} 
                    validateForm={this.validateForm}
                    onCompetenciesGroupDescriptionBlur={this.onCompetenciesGroupDescriptionBlur}
                    onCompetenciesGroupNameBlur={this.onCompetenciesGroupNameBlur} />
            );
        }
    }
}

export default withAddFormValidation;