import React, { Component } from 'react'

const withValidation = IndicatorForm => {
    return class extends Component {
        constructor(props){
            super(props);
        }

        isIndicatorNameValid = name => {
            return true;
        }

        render() {
            <IndicatorForm {...this.props} isIndicatorNameValid={this.isIndicatorNameValid} />
        }
    }
}

export default withValidation;