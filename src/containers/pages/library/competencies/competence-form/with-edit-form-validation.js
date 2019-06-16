import React from 'react'
import CustomValidation from '../../../../../base-classes/custom-validation';

import { 
    editCompetenceDescriptionSuccessValidation, 
    editCompetenceDescriptionErrorValidation, 
    editCompetenceGroupIdSuccessValidation, 
    editCompetenceGroupIdErrorValidation, 
    editCompetenceNameSuccessValidation, 
    editCompetenceNameErrorValidation 
} from '../../../../../action-creators/library-page/competencies/edit-competence';

const withEditFormValidation = CompetenceForm => {
    return class extends CustomValidation {
        constructor(props) {
            super(props);
        }

        validateForm = async () => {
            const { 
                dispatch,
                editCompetence: { 
                    name: { 
                        initial: initialName,
                        text: name 
                    }, 
                    description: {
                        text: description
                    },
                    idGroup: {
                        text: idGroup
                    }
                },
                validateCompetenceDescription,
                validateCompetenceName,
                validateCompetenceGroupId
            } = this.props;

            this.trySubmit()

            const validationData = [
                {
                    value: description,
                    validator: validateCompetenceDescription,
                    validationOkCb: dispatch.bind(this, editCompetenceDescriptionSuccessValidation()),
                    validationErrCb: errorMessage => {
                        dispatch(editCompetenceDescriptionErrorValidation(errorMessage))
                    }
                },
                {
                    value: idGroup,
                    validator: validateCompetenceGroupId,
                    validationOkCb: dispatch.bind(this, editCompetenceGroupIdSuccessValidation()),
                    validationErrCb: errorMessage => {
                        dispatch(editCompetenceGroupIdErrorValidation(errorMessage))
                    }
                }
            ];

            if(name === initialName) 
                dispatch(editCompetenceNameSuccessValidation())
            else 
                validationData.push({
                    value: name,
                    validator: validateCompetenceName,
                    validationOkCb: dispatch.bind(this, editCompetenceNameSuccessValidation()),
                    validationErrCb: errorMessage => {
                        dispatch(editCompetenceNameErrorValidation(errorMessage))
                    }
                })

            return await this.validateAndUpdate(validationData);
        }

        onCompetenceNameBlur = async () => {
            const { 
                dispatch,
                editCompetence: { 
                    name: { 
                        initial: initialName,
                        text: name 
                    }
                },
                validateCompetenceName
            } = this.props;

            if(!this.hasAlreadyTrySubmit()) return

            if(name === initialName){
                dispatch(editCompetenceNameSuccessValidation());
                return;
            }

            await this.validateAndUpdate([
                {
                    value: name,
                    validator: validateCompetenceName,
                    validationOkCb: dispatch.bind(this, editCompetenceNameSuccessValidation()),
                    validationErrCb: errorMessage => {
                        dispatch(editCompetenceNameErrorValidation(errorMessage))
                    }
                }
            ])
        }

        onCompetenceDescriptionBlur = async () => {
            const { 
                dispatch,
                editCompetence: { 
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
                    validationOkCb: dispatch.bind(this, editCompetenceDescriptionSuccessValidation()),
                    validationErrCb: errorMessage => {
                        dispatch(editCompetenceDescriptionErrorValidation(errorMessage))
                    }
                }
            ])
        }

        onCompetenceGroupIdBlur = async () => {
            const { 
                dispatch,
                editCompetence: { 
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
                    validationOkCb: dispatch.bind(this, editCompetenceGroupIdSuccessValidation()),
                    validationErrCb: errorMessage => {
                        dispatch(editCompetenceGroupIdErrorValidation(errorMessage))
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

export default withEditFormValidation;