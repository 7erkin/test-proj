import React from 'react'
import CustomValidation from '../../../../../base-classes/custom-validation';
import { newCompetenceNameSuccessValidation, newCompetenceNameErrorValidation, newCompetenceGroupIdSuccessValidation, newCompetenceGroupIdErrorValidation, newCompetenceDescriptionSuccessValidation, newCompetenceDescriptionErrorValidation } from '../../../../../action-creators/library-page/competencies/new-competence';

const withAddFormValidation = CompetenceForm => {
    return class extends CustomValidation {
        constructor(props) {
            super(props);
        }

        validateForm = async () => {
            const { 
                dispatch,
                newCompetence: { 
                    name: { 
                        text: name 
                    }, 
                    description: {
                        text: description
                    },
                    idGroup: {
                        text: idGroup
                    }
                },
                validateCompetenceName,
                validateCompetenceDescription,
                validateCompetenceGroupId
            } = this.props;

            this.trySubmit();

            const validationData = [
                {
                    value: name,
                    validator: validateCompetenceName,
                    validationOkCb: dispatch.bind(this, newCompetenceNameSuccessValidation()),
                    validationErrCb: errorMessage => {
                        dispatch(newCompetenceNameErrorValidation(errorMessage))
                    }
                },
                {
                    value: description,
                    validator: validateCompetenceDescription,
                    validationOkCb: dispatch.bind(this, newCompetenceDescriptionSuccessValidation()),
                    validationErrCb: errorMessage => {
                        dispatch(newCompetenceDescriptionErrorValidation(errorMessage))
                    }
                },
                {
                    value: idGroup,
                    validator: validateCompetenceGroupId,
                    validationOkCb: dispatch.bind(this, newCompetenceGroupIdSuccessValidation()),
                    validationErrCb: errorMessage => {
                        dispatch(newCompetenceGroupIdErrorValidation(errorMessage))
                    }
                }
            ];

            return await this.validateAndUpdate(validationData);
        }

        onCompetenceNameBlur = async () => {
            const { 
                dispatch,
                newCompetence: { 
                    name: { 
                        text: name 
                    }
                },
                validateCompetenceName
            } = this.props;

            if(!this.hasAlreadyTrySubmit()) return

            await this.validateAndUpdate([
                {
                    value: name,
                    validator: validateCompetenceName,
                    validationOkCb: dispatch.bind(this, newCompetenceNameSuccessValidation()),
                    validationErrCb: errorMessage => {
                        dispatch(newCompetenceNameErrorValidation(errorMessage))
                    }
                }
            ])
        }

        onCompetenceDescriptionBlur = async () => {
            const { 
                dispatch,
                newCompetence: { 
                    description: {
                        text: description
                    }
                },
                validateCompetenceDescription
            } = this.props;

            if(!this.hasAlreadyTrySubmit()) return

            await this.validateAndUpdate([
                {
                    value: description,
                    validator: validateCompetenceDescription,
                    validationOkCb: dispatch.bind(this, newCompetenceDescriptionSuccessValidation()),
                    validationErrCb: errorMessage => {
                        dispatch(newCompetenceDescriptionErrorValidation(errorMessage))
                    }
                }
            ])
        }

        onCompetenceGroupIdBlur = async () => {
            const { 
                dispatch,
                newCompetence: { 
                    idGroup: {
                        text: idGroup
                    }
                },
                validateCompetenceGroupId
            } = this.props;

            if(!this.hasAlreadyTrySubmit()) return

            await this.validateAndUpdate([
                {
                    value: idGroup,
                    validator: validateCompetenceGroupId,
                    validationOkCb: dispatch.bind(this, newCompetenceGroupIdSuccessValidation()),
                    validationErrCb: errorMessage => {
                        dispatch(newCompetenceGroupIdErrorValidation(errorMessage))
                    }
                }
            ])
        }

        render() {

            return (
                <CompetenceForm {...this.props}
                    validateForm={this.validateForm}
                    onCompetenceNameBlur={this.onCompetenceNameBlur}
                    onCompetenceDescriptionBlur={this.onCompetenceDescriptionBlur}
                    onCompetenceGroupIdBlur={this.onCompetenceGroupIdBlur} />
            );
        }
    }
}

export default withAddFormValidation;