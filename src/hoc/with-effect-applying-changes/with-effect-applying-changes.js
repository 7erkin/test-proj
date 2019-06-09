import React, { Component } from 'react'
import LoadingIndicator from '../../components/common/loading-indicator/loading-indicator';

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
                return <LoadingIndicator />

            return <WrappedContainer {...this.props} />
        }
    }
}

export default withEffectApplyingChanges;