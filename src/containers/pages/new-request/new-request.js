import React, {Component} from 'react'

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
import RequestHeader from '../../../components/common-custom/request-header/request-header';
import NewRequest from '../../../components/pages/new-request';

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

    onProfilePositionFileChoosen = (file) => {
        const fileReader = new FileReader();

        fileReader.onerror = () => {};

        fileReader.onload = () => {
            console.log(fileReader.result);
        };

        fileReader.readAsText(file);
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

        const isRequestFormed = () => {
            return dateCreate != '' && companyId != '' && subdivisionId != '' && positionId != '';
        }

        if(!isRequestFormed()) {
            alert('Некоторые поля формы не заполнены');
            return;
        }

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
            <RequestHeader name='Новая заявка'>
                <NewRequest 
                    requestDate={{
                        onChange: this.onDateCreateChange,
                        value: dateCreate
                    }}
                    profilePosition={{
                        onChange: this.onProfilePositionFileChoosen
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
            </RequestHeader>
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