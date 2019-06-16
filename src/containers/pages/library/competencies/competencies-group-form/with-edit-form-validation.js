import React from 'react'
import CustomValidation from '../../../../../base-classes/custom-validation';
import { editCompetenciesGroupDescriptionSuccessValidation, editCompetenciesGroupDescriptionErrorValidation, editCompetenciesGroupNameSuccessValidation, editCompetenciesGroupNameErrorValidation } from '../../../../../action-creators/library-page/competencies/edit-competencies-group';

const withEditFormValidation = CompetenciesGroupForm => {
    return class extends CustomValidation {
        constructor(props) {
            super(props)
        }

        validateForm = async () => {
            const {
                dispatch,
                editCompetenciesGroup: {
                    name: { text: name, initial: initialName },
                    description: { text: description }
                },
                validateCompetenciesGroupName,
                validateCompetenciesGroupDescription
            } = this.props;

            this.trySubmit();

            const validationData = [
                {
                    value: description,
                    validator: validateCompetenciesGroupDescription,
                    validationOkCb: dispatch.bind(this, editCompetenciesGroupDescriptionSuccessValidation()),
                    validationErrCb: errorMessage => {
                        dispatch(editCompetenciesGroupDescriptionErrorValidation(errorMessage))
                    }
                }
            ]

            if(name === initialName)
                dispatch(editCompetenciesGroupNameSuccessValidation());
            else
                validationData.push({
                    value: name,
                    validator: validateCompetenciesGroupName,
                    validationOkCb: dispatch.bind(this, editCompetenciesGroupNameSuccessValidation()),
                    validationErrCb: errorMessage => {
                        dispatch(editCompetenciesGroupNameErrorValidation(errorMessage))
                    }
                })

            return this.validateAndUpdate(validationData);
        }

        onCompetenciesGroupNameBlur = async () => {
            if(!this.hasAlreadyTrySubmit()) return;

            const {
                dispatch,
                editCompetenciesGroup: {
                    name: { initial: initialName, text: name }
                },
                validateCompetenciesGroupName
            } = this.props;

            if(name === initialName){
                dispatch(editCompetenciesGroupNameSuccessValidation());
                return;
            }

            const validationData = [
                {
                    value: name,
                    validator: validateCompetenciesGroupName,
                    validationOkCb: dispatch.bind(this, editCompetenciesGroupNameSuccessValidation()),
                    validationErrCb: errorMessage => {
                        dispatch(editCompetenciesGroupNameErrorValidation(errorMessage))
                    }
                }
            ]

            this.validateAndUpdate(validationData);
        }

        onCompetenciesGroupDescriptionBlur = async () => {
            if(!this.hasAlreadyTrySubmit()) return;

            const {
                dispatch,
                editCompetenciesGroup: {
                    description: { text: description }
                },
                validateCompetenciesGroupDescription
            } = this.props;

            const validationData = [
                {
                    value: description,
                    validator: validateCompetenciesGroupDescription,
                    validationOkCb: dispatch.bind(this, editCompetenciesGroupDescriptionSuccessValidation()),
                    validationErrCb: errorMessage => {
                        dispatch(editCompetenciesGroupDescriptionErrorValidation(errorMessage))
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

export default withEditFormValidation;