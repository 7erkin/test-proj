import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';

import {
    deleteReduxStoreFromLocalStorage,
    saveReduxStoreInLocalStorage
} from '../../../libs/redux-store-loader'

class StoreLoader extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount = () => {
        // deleteReduxStoreFromLocalStorage();
        window.onbeforeunload = () => {
            const {store} = this.props;
            saveReduxStoreInLocalStorage(store);
        }
    }

    render() {
        const {
            children
        } = this.props;

        return <Fragment>{children}</Fragment>;
    }
}

const mapStoreToProps = store => {
    return {
        store
    }
}

export default connect(mapStoreToProps)(StoreLoader);