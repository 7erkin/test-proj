import React, { Component } from 'react'

const withValidation = WrappedCompetenceForm => {
    return class extends Component {
        constructor(props){
            super(props)
        }

        isCompetenceNameValid = name => {
            const {
                dispatch,
                staffixService
            } = this.props;

            staffixService.hasCompetenceWithName(name)
                .then(res => {
                })
        }

        render() {
            return <WrappedCompetenceForm {...this.props} />
        }
    }
}

export default withValidation;