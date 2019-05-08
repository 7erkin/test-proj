import React, { Component } from 'react'
import RequestPageComponent from '../../../components/pages/request';
import { connect } from 'react-redux';
import withStaffixService from '../../../hoc/hoc-services/with-staffix-service';
import {
    saveLoadedRequest
} from '../../../action-creators/exist-request-page'

class ExistRequestPage extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const {dispatch, staffixService, requests, match} = this.props;
        // if request in requests
        const requestId = match.params.id;
        const requestIndex = requests.findIndex(el => el.id === Number(requestId));

        if(requestIndex == -1) {
            staffixService.getRequestById(requestId)
                .then(request => {
                    console.log(request);
                    dispatch(saveLoadedRequest(request));
                })
        } else {
            dispatch(saveLoadedRequest(requests[requestIndex]));
        }
    }

    render() {
        const {request} = this.props;

        if(request == null)
            return <h2>Loading...</h2>

        return <RequestPageComponent request={request}/>
    }
}

const mapStoreToProps = ({requestsPage, existRequestPage}) => {
    return {
        requests: requestsPage.requests,
        request: existRequestPage.request
    }
}

export default connect(mapStoreToProps)(withStaffixService(ExistRequestPage));