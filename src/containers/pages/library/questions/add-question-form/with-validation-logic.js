import React from 'react'

import CustomValidation from '../../../../../base-classes/custom-validation';

const withValidationPolicy = WrappedForm => {
    return class extends CustomValidation {
        constructor(props){
            super(props)
        }

        validateForm = () => {
            this.trySubmit();

            const {
                validateCompetenceId, 
                validateQuestionBody,
            } = this.props;
    
            let validRes = true;
    
            validRes &= validateCompetenceId();
    
            validRes &= validateQuestionBody();
    
            return validRes;
        }

        onQuestionBodyBlur = () => {
            const { validateQuestionBody } = this.props;
    
            if(this.hasAlreadyTrySubmit()) validateQuestionBody();
        }
    
        onCompetenceIdBlur = () => {
            const { validateCompetenceId } = this.props;
    
            if(this.hasAlreadyTrySubmit()) validateCompetenceId();
        }

        render() {
            return (
                <WrappedForm {...this.props}
                    validateForm={this.validateForm}
                    onQuestionBodyBlur={this.onQuestionBodyBlur}
                    onCompetenceIdBlur={this.onCompetenceIdBlur} />
            );
        }
    }
}

export default withValidationPolicy