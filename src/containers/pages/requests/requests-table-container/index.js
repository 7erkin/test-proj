import React, { Component } from 'react'
import RequestsTableComponent from '../../../../components/requests-table-component'

import requests from '../../../../fixtures/requests'

class RequestsTableContainer extends Component {
    constructor(props) {
        super(props);
    }

    onRowClicked = () => {}

    render() {
        return (
            <RequestsTableComponent 
                rowCount={requests.length}
                rowGetter={({index}) => requests[index]}
                onRowClick={this.onRowClicked}/>
        );
    }
}

export default RequestsTableContainer;