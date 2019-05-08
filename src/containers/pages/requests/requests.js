import React, { Component } from 'react'
import RequestsPageComponent from '../../../components/pages/requests-page';

import requests from '../../../fixtures/requests'
import withStaffixService from '../../../hoc/hoc-services/with-staffix-service';
import { connect } from 'react-redux';

import {
    updateSearchCompanyBar,
    prepareLoadingRequests,
    finishLoadingRequests,
    saveLoadedRequests
} from '../../../action-creators/requests-page'

class RequestsPage extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const {dispatch, staffixService} = this.props;

        dispatch(prepareLoadingRequests());
        staffixService.getRequests()
            .then(requests => {
                dispatch(saveLoadedRequests(requests));
                dispatch(finishLoadingRequests());
            })
    }

    onSearchRequestChange = companyName => {
        this.props.dispatch(updateSearchCompanyBar(companyName))
    }

    onRowClick = requestId => {
        this.props.history.push(`/requests/${requestId}`)
    }

    render() {
        const {
            history,
            requests,
            loadingRequests,
            searchCompanyName
        } = this.props;

        if(loadingRequests)
            return <h2>Loading...</h2>

        return (
            <RequestsPageComponent 
                requestSearch={{
                    value: searchCompanyName,
                    onChange: this.onSearchRequestChange
                }}
                requestsTable={{
                    requests: requests,
                    onRowClick: this.onRowClick
                }}
                addRequest={{
                    onClicked: () => {history.push('/requests/new')}
                }}/>
        );
    }
}

const mapStoreToProps = ({requestsPage}) => {
    const {loadingRequests, visibleRequests: requests, searchCompanyName} = requestsPage;
    return {
        loadingRequests,
        requests,
        searchCompanyName
    }
}

export default connect(mapStoreToProps)(withStaffixService(RequestsPage));