import React, { Component } from 'react'
import RequestsPageComponent from '../../../components/pages/requests-page';

import requests from '../../../fixtures/requests'

class RequestsPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {
            history
        } = this.props;

        return (
            <RequestsPageComponent 
                requestSearch={{
                    value: '',
                    onChanged: () => {}
                }}
                requestsTable={{
                    requests: requests,
                    onRowClicked: () => {}
                }}
                addRequest={{
                    onClicked: () => {history.push('/requests/new')}
                }}/>
        );
    }
}

export default RequestsPage;