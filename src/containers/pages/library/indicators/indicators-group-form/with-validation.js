import React, { Component } from 'react'

const withValidation = IndicatorsGroupForm => {
    return class extends Component {
        constructor(props){
            super(props);
        }

        isIndicatorsGroupNameValid = name => {
            return true;
        }

        render() {
            return (
                <IndicatorsGroupForm 
                    {...this.props} 
                    isIndicatorsGroupNameValid={this.isIndicatorsGroupNameValid} />
            );
        }
    }
}

export default withValidation;