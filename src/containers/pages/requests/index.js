import React from 'react'

import RequestsPageComponent from '../../../components/requests-page'
import RequestsTableContainer from './requests-table-container';
import RequestsSearchBarContainer from './requests-search-bar-container';
import AddRequestButtonContainer from './add-request-button-container';

const RequestsPage = (props) => {
    console.log(props);
    return (
        <RequestsPageComponent>
            <AddRequestButtonContainer history={props.history}/>
            <RequestsSearchBarContainer />
            <RequestsTableContainer />
        </RequestsPageComponent>
    );
}


export default RequestsPage;