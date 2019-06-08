import React, { Component } from 'react'
import LoadingIndicator from '../../../../../components/common/loading-indicator/loading-indicator';

const withLoadingIndicatorsGroups = WrappedCompetenceForm => {
    return class extends Component {
        constructor(props){
            super(props);
        }

        componentDidMount() {
            this.props.getIndicatorsGroups();
        }

        render() {
            const {
                loadingIndicatorsGroups
            } = this.props;

            return loadingIndicatorsGroups ? <LoadingIndicator /> : <WrappedCompetenceForm {...this.props} />
        }
    }
}

export default withLoadingIndicatorsGroups;