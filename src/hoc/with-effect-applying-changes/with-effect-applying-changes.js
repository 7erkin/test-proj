import React, { Component } from 'react'

const withEffectApplyingChanges = WrappedContainer => {
    return class extends Component {
        constructor(props) {
            super(props);
        }

        render() {
            const {
                applyingChanges
            } = this.props;

            if(applyingChanges)
                return <h2>Saving changes...</h2>

            return <WrappedContainer {...this.props} />
        }
    }
}

export default withEffectApplyingChanges;