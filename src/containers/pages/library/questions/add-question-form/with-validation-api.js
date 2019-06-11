import React, { Component } from 'react'

import { 
    newQuestionCompetenceIdErrorValidation, 
    newQuestionCompetenceIdSuccessValidation, 
    newQuestionBodyErrorValidation, 
    newQuestionBodySuccessValidation
} from '../../../../../action-creators/library-page/questions';



// TODO: validation error must be shown after pressing Submit button
// TODO: when validate: 1. if field must be filled - show error after pressing Submit
// TODO: 2. If field filled - show error after losing focus if it is invalid

const withValidationApi = WrappedForm => {
    return class extends Component {
        constructor(props) {
            super(props);
        }

        validateCompetenceId = () => {
            const { dispatch, newQuestion: { idCompetence: { text } } } = this.props;

            if(text === ''){
                dispatch(newQuestionCompetenceIdErrorValidation('Выберите компетенцию')); 
                return false; 
            } 

            dispatch(newQuestionCompetenceIdSuccessValidation());
            return true;
        }

        validateQuestionBody = () => {
            const { dispatch, newQuestion: { body: { text } } } = this.props;

            if(text === ''){
                dispatch(newQuestionBodyErrorValidation('Невозможно сохранить пустой вопрос'));
                return false; 
            } 

            dispatch(newQuestionBodySuccessValidation());
            return true;
        }

        render() {
            return (
                <WrappedForm {...this.props} 
                    validateCompetenceId={this.validateCompetenceId} 
                    validateQuestionBody={this.validateQuestionBody} />
            );
        }
    }
}

export default withValidationApi;