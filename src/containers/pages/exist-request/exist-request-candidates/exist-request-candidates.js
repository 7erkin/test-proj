import React, {Component} from 'react'
import { connect } from 'react-redux';
import withStaffixService from '../../../../hoc/hoc-services/with-staffix-service';
import RequestCandidates from '../../../../components/pages/exist-request/request-candidates';

import {
    prepareLoadingCandidates,
    saveLoadedCandidates,
    finishLoadingCandidates
} from '../../../../action-creators/exist-request-page'

class ExistRequestCandidates extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const {
            dispatch, 
            staffixService,
            request
        } =  this.props;

        dispatch(prepareLoadingCandidates());

        staffixService.getCandidates(request.id)
            .then(candidates => {
                dispatch(saveLoadedCandidates(candidates));
                dispatch(finishLoadingCandidates());
            })
    }

    render() {
        debugger;
        const {
            loadingCandidates,
            candidates
        } = this.props;

        if(loadingCandidates) 
            return <h2>Loading...</h2>

        return <RequestCandidates candidates={candidates} />;
    }
}

const mapStoreToProps = ({existRequestPage}) => {
    const {
        request,
        candidates,
        loadingCandidates
    } = existRequestPage;
    return {
        request,
        candidates,
        loadingCandidates
    }
}

export default connect(mapStoreToProps)(withStaffixService(ExistRequestCandidates));