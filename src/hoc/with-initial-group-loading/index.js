import React, { Component } from "react";
import LoadingIndicator from "../../components/common/loading-indicator/loading-indicator";

// TODO define when LoadingIndicator must be shown on whole tab
const withInitialGroupLoading = WrappedContainer => {
    return class extends Component {
        constructor(props) {
            super(props);
            this.state = {
                loading: true
            }
        }

        componentDidMount = async () => {
            const { getGroups } = this.props

            await getGroups();
            this.setState({ loading: false });
        }

        reload = async () => {
            const { getGroups } = this.props

            await this.setState({ loading: true });
            await getGroups();
            this.setState({ loading: false });
        };
        render() {
            if (this.state.loading)
                return <LoadingIndicator />
                
            return <WrappedContainer {...this.props} reload={this.reload} />;
        }
    };
}

export default withInitialGroupLoading