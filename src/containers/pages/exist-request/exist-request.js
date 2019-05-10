import React, { Component } from 'react'
import { connect } from 'react-redux';
import withStaffixService from '../../../hoc/hoc-services/with-staffix-service';
import {
    saveLoadedRequest
} from '../../../action-creators/exist-request-page'
import ExistRequest from '../../../components/pages/exist-request';
import {
    switchTab
} from '../../../action-creators/exist-request-page'
import RequestTabs from '../../../components/pages/exist-request/request-tabs';
import RequestDescription from '../../../components/pages/exist-request/request-description';
import RequestCandidates from '../../../components/pages/exist-request/request-candidates';
import ExistRequestCandidates from './exist-request-candidates';

const allTabs = [
    'Основная информация', 
    'Профиль компетенции', 
    'Кандидаты', 
    'Сценарий интервью'
];

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

    componentWillUnmount() {
        this.props.dispatch(switchTab('Основная информация'));
    }

    onTabSwitch = (nextTab) => {
        this.props.dispatch(switchTab(nextTab));
    }

    render() {
        const {request, tab} = this.props;

        if(request == null)
            return <h2>Loading...</h2>

        let body;

        if(tab == '' || tab == 'Основная информация')
            body = <RequestDescription request={request}/>

        if(tab == 'Кандидаты')
            body = <ExistRequestCandidates />

        return (
            <ExistRequest name={`Заявка №${request.number}`} >
                <RequestTabs tabs={allTabs} onTabSwitch={this.onTabSwitch} />
                {
                    body
                }
            </ExistRequest>
        );
    }
}

const mapStoreToProps = ({requestsPage, existRequestPage}) => {
    return {
        requests: requestsPage.requests,
        request: existRequestPage.request,
        tab: existRequestPage.tab
    }
}

export default connect(mapStoreToProps)(withStaffixService(ExistRequestPage));