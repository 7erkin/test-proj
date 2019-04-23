import React, { Component, Fragment } from 'react'
import PositionTable from '../../../../components/pages/position/position-table';
import { connect } from 'react-redux';

import {
    entityActionCreator,
    loadingActionCreator,
    visibleActionCreator,
    
} from '../../../../action-creators/position'

import withStaffixService from '../../../../hoc/with-staffix-service'
import Spinner from '../../../../components/spinner';
import Table from '../../../../components/common/table';
import { UNDEFINED } from '../../../../utils';
import ModalWindow from '../../../../components/pages/position/modal-window';
import IndicatorListContainer from '../indicator-list-container';

class PositionTableContainer extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        const {dispatch, staffixService} = this.props;
        
        dispatch(loadingActionCreator.startLoadingPage());
        const companiesPromise = staffixService.getCompanyList();
        const positionsPromise = staffixService.getRandomPositions();

        Promise.all([companiesPromise, positionsPromise])
            .then(results => {
                dispatch(entityActionCreator.saveLoadedCompanies(results[0]))
                dispatch(entityActionCreator.saveLoadedPositions(results[1]))
                dispatch(loadingActionCreator.finishLoadingPage())
            })
    }

    onActiveCompanyChange = (id) => {
        const {dispatch, staffixService} = this.props;
        dispatch(entityActionCreator.setActiveCompany(id));
        dispatch(loadingActionCreator.startLoadingPositions());
        let positionsPromise, subdivisionsPromise;
        if(id == UNDEFINED) {
            positionsPromise = staffixService.getRandomPositions();
            subdivisionsPromise = [];
        } else {
            positionsPromise = staffixService.getPositionsByCompanyId(id);
            subdivisionsPromise = staffixService.getSubdivisionsByCompanyId(id);
        }
        Promise.all([subdivisionsPromise, positionsPromise])
            .then(results => {
                dispatch(entityActionCreator.saveLoadedSubdivisions(results[0]))
                dispatch(entityActionCreator.saveLoadedPositions(results[1]))
                dispatch(loadingActionCreator.finishLoadingPositions())
            })
    }

    onActiveSubdivisionChange = (id) => {
        const {dispatch, staffixService, activeCompanyId} = this.props;
        dispatch(entityActionCreator.setActiveSubdivision(id));
        dispatch(loadingActionCreator.startLoadingPositions())
        staffixService.getPositionBySubdivisionId(activeCompanyId, id)
            .then(positions => {
                dispatch(entityActionCreator.saveLoadedPositions(positions))
                dispatch(loadingActionCreator.finishLoadingPositions());
            })
    }

    onAddPositionButtonClick = () => {
        this.props.dispatch(visibleActionCreator.showModalWindow());
    }

    onPositionClick = (id) => {}

    closeModalWindow = () => {
        this.props.dispatch(visibleActionCreator.hideModalWindow());
    }

    render() {
        const {
            companies, 
            subdivisions, 
            positions: tableItems, 
            activeCompanyId, 
            activeSubdivisionId,
            loadingPage,
            loadingPositions,
            modalWindowVisible,
            addPositionFormVisible,
            editPositionFormVisible,
            indicatorListVisible
        } = this.props;

        if(loadingPage)
            return <Spinner />

        if(modalWindowVisible)
            return <ModalWindow 
                        onByIndicatorsClick={() => {
                            this.closeModalWindow();
                            this.props.dispatch(visibleActionCreator.showIndicatorList());
                            // reset page
                        }}
                        onByHandClick={() => {
                            this.closeModalWindow();
                            this.props.dispatch(visibleActionCreator.showAddPositionForm());
                            // reset page
                        }}/>;

        if(addPositionFormVisible)
            return <h1>There will be Add Position Form soon...</h1>

        if(editPositionFormVisible)
            return <h1>There will be Edit Position Form soon...</h1>      
        
        if(indicatorListVisible)
            return <IndicatorListContainer/>;

        return <PositionTable 
                    companies={companies}
                    subdivisions={subdivisions}
                    selectCompany={{
                        value: activeCompanyId,
                        onChange: this.onActiveCompanyChange
                    }}
                    selectSubdivision={{
                        value: activeSubdivisionId,
                        onChange: this.onActiveSubdivisionChange
                    }}
                    onAddPositionClick={this.onAddPositionButtonClick}
                >
                    {loadingPositions 
                        ?   <Spinner /> 
                        :   <Table 
                                headers={[
                                    'Date of create',
                                    'Date of approval',
                                    'Position',
                                    'Description'
                                ]}
                                tableItems={tableItems}
                                renderTableItem={(item) => {
                                    return (
                                        <Fragment>
                                            <td>{item.dateApproval}</td>
                                            <td>{item.dateCreate}</td>
                                            <td>{item.name}</td>
                                            <td>{item.description}</td>
                                        </Fragment>
                                    );
                                }}
                            />
                    }
                </PositionTable>;
    }
}

const mapStoreToProps = store => {
    const {positionPage} = store;
    const {
        companies, 
        subdivisions, 
        positions, 
        activeCompanyId, 
        activeSubdivisionId
    } = positionPage.entity;
    const {
        page: loadingPage,
        positions: loadingPositions
    } = positionPage.loading;
    const {
        modalWindow: modalWindowVisible,
        indicatorList: indicatorListVisible,
        addPositionForm: addPositionFormVisible,
        editPositionForm: editPositionFormVisible
    } = positionPage.visible;
    const {
        pointedIndicators
    } = positionPage.pointedEntity;

    return {
        companies,
        subdivisions,
        positions,
        activeCompanyId,
        activeSubdivisionId,
        loadingPage,
        loadingPositions,
        modalWindowVisible,
        addPositionFormVisible,
        editPositionFormVisible,
        indicatorListVisible,
        pointedIndicators
    };
}

export default connect(mapStoreToProps)(withStaffixService(PositionTableContainer));