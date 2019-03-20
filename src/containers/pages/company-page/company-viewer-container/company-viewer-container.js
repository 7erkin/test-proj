import React, { Component } from 'react'
import { connect } from 'react-redux';
import CompanyTable from '../../../../components/pages/company/company-table';
import DummySkillupService from '../../../../services/dummy-staffix-service';
import Spinner from '../../../../components/spinner';
import { 
    saveLoadedCompanies, 
    setActiveCompany, 
    startLoadingVisibleCompanies, 
    finishLoadingVisibleCompanies,
    saveLoadedVisibleCompanies
} from '../../../../action-creators/company';
import CompanyViewer from '../../../../components/pages/company/company-viewer';
import { UNDEFINED } from '../../../../utils';

class CompanyViewerContainer extends Component {
    constructor(props){
        super(props);

        this.state = {
            service: new DummySkillupService()
        }
    }

    componentDidMount() {
        const {dispatch} = this.props;
        const {service} = this.state;
        dispatch(setActiveCompany(this.props.match.params.id || null));
        dispatch(startLoadingVisibleCompanies());
        service.getCompanyList()
            .then(companies => {
                dispatch(saveLoadedCompanies(companies));
                return service.getAnyCompanies();
            })
            .then(companies => {
                dispatch(saveLoadedVisibleCompanies(companies));
                dispatch(finishLoadingVisibleCompanies());
            });
    }

    componentWillUnmount() {
        this.props.dispatch(setActiveCompany(UNDEFINED));
    }

    onCompanyChange = (companyId) => {
        console.log(companyId);
        const {dispatch} = this.props;
        const {service} = this.state;
        dispatch(startLoadingVisibleCompanies());
        dispatch(setActiveCompany(companyId));
        if(companyId == UNDEFINED) {
            service.getAnyCompanies()
            .then(subdivisions => {
                dispatch(saveLoadedVisibleCompanies(subdivisions));
                dispatch(finishLoadingVisibleCompanies());
            })
            return;
        }
        service.getCompany(companyId)
            .then(subdivisions => {
                dispatch(saveLoadedVisibleCompanies(subdivisions));
                dispatch(finishLoadingVisibleCompanies());
            })
    }

    render() {
        const {
            selectedCompanyId,
            companies,
            visibleCompanies,
            loading
        } = this.props;

        const children = loading.visibleCompanies ? <Spinner /> : <CompanyTable companies={visibleCompanies}/>;

        return (
            <CompanyViewer
                selectedCompanyId={selectedCompanyId}
                companies={companies}
                onCompanyChange={this.onCompanyChange}>
                {children}
            </CompanyViewer>
        );
    }
}

const mapStoreToProps = (store) => {
    const {
        selectedCompanyId,
        companies,
        visibleCompanies,
        loading
    } = store.companyPage;

    return {
        selectedCompanyId,
        companies,
        visibleCompanies,
        loading
    };
}

export default connect(mapStoreToProps)(CompanyViewerContainer);