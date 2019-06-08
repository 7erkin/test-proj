import React, { Component } from 'react'

const withSearchEntities = (source) => (WrappedContainer) => {
    return class extends Component {
        constructor(props){
            super(props)
        }


        render() {
            return <WrappedContainer  {...this.props} />
        }
    }
}

export default withSearchEntities;