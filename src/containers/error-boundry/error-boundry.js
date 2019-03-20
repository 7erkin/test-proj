import React, {Component} from 'react'

import {connect} from 'react-redux'

import {setApplicationError} from '../../action-creators/common'
import ErrorIndicator from '../../components/error-indicator'

// what about logging errors to server
class ErrorBoundry extends Component {
    constructor(props) {
        super(props);
    }

    componentDidCatch() {
        this.props.dispatch(setApplicationError());
    }

    render() {
        if(this.props.application_error)
            return <ErrorIndicator />

        return this.props.children;
    }
}

const mapStoreToProps = (store) => {
    return {
        application_error: store.common.application_error
    };
}

export default connect(mapStoreToProps)(ErrorBoundry);

