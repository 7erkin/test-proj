import React, {Component} from 'react'
import RequestPageComponent from '../../../components/pages/request';

import {
    saveLoadedCompanies,
    saveLoadedPositions,
    saveLoadedSubdivisions,
    prepareLoadingCompanies,
    prepareLoadingSubdivisions,
    prepareLoadingPositions,
    finishLoadingCompanies,
    finishLoadingSubdivisions,
    finishLoadingPositions,
    updateCompany,
    updateSubdivision,
    updatePosition,
    updateDescription,
    updateRequestDate,
    resetNewRequestForm
} from '../../../action-creators/new-request-page'

import withStaffixService from '../../../hoc/hoc-services/with-staffix-service'
import { connect } from 'react-redux';

class NewRequestPage extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const {
            dispatch,
            staffixService
        } = this.props;

        dispatch(prepareLoadingCompanies());

        staffixService.getCompanies()
            .then(companies => {
                dispatch(saveLoadedCompanies(companies));
                dispatch(finishLoadingCompanies());
            })

    }

    onCompanyChange = (companyId) => {
        const {
            dispatch,
            staffixService
        } = this.props;

        dispatch(updateCompany(companyId));
        dispatch(prepareLoadingSubdivisions());
        staffixService.getSubdivisions(companyId)
            .then(subdivisions => {
                dispatch(saveLoadedSubdivisions(subdivisions));
                dispatch(finishLoadingSubdivisions());
            })
    }

    onSubdivisionChange = (subdivisionId) => {
        const {
            dispatch,
            staffixService
        } = this.props;

        dispatch(updateSubdivision(subdivisionId));
        dispatch(prepareLoadingPositions());
        staffixService.getPositions(subdivisionId)
            .then(positions => {
                dispatch(saveLoadedPositions(positions));
                dispatch(finishLoadingPositions());
            })
    }

    onPositionChange = (positionId) => {
        const {
            dispatch
        } = this.props;

        dispatch(updatePosition(positionId));
    }

    onDateCreateChange = (date) => {
        this.props.dispatch(updateRequestDate(date));
    }

    onSubmit = () => {
        const {
            dateCreate,
            companyId,
            subdivisionId,
            positionId,
            vacancyDescription,
            staffixService,
            history,
            dispatch
        } = this.props;

        //dispatch(startSendingRequest());
        staffixService.addRequest({dateCreate, companyId, subdivisionId, positionId, vacancyDescription})
            .then(() => {
                //dispatch(finishLoadingRequest());
                dispatch(resetNewRequestForm());
                history.push('/requests');
            })
    }

    render() {
        const {
            dateCreate,
            companies,
            subdivisions,
            positions
        } = this.props;

        return (
            <RequestPageComponent 
                requestDate={{
                    onChange: this.onDateCreateChange,
                    value: dateCreate
                }}
                companySelect={{
                    onChange: this.onCompanyChange,
                    values: companies
                }}
                subdivisionSelect={{
                    onChange: this.onSubdivisionChange,
                    values: subdivisions
                }}
                positionSelect={{
                    onChange: this.onPositionChange,
                    values: positions
                }}
                onSubmit={this.onSubmit}
                onCancel={() => {}}/>
        );
    }
}

const mapStoreToProps = ({newRequestPage}) => {
    const {
        dateCreate,
        companyId,
        subdivisionId,
        positionId,
        vacancyDescription,
        companies,
        subdivisions,
        positions
    } = newRequestPage;

    return {
        dateCreate,
        companyId,
        subdivisionId,
        positionId,
        vacancyDescription,
        companies,
        subdivisions,
        positions
    }
}

export default connect(mapStoreToProps)(withStaffixService(NewRequestPage));