import React, { Component } from 'react'
import DeleteFormView from '../../../../components/pages/library/delete-form-view/delete-form-view';
import DeleteFormTableView from '../../../../components/pages/library/delete-form-table-view/delete-form-table-view';

import withStaffixService from '../../../../hoc/hoc-services/with-staffix-service'

import {
    Link
} from 'react-router-dom'

import { connect } from 'react-redux';

import {
    updateVisibleCompanies,
    updateDeletedCompanies,
    saveLoadedCompanies,
    companiesDeleted
} from '../../../../action-creators/companies-page/companies-list'
import {
    startLoadingCompanies, finishLoadingCompanies, startDeletingCompanies, finishDeletingCompanies
} from '../../../../action-creators/companies-page/network-waiting'
import { TableRow, TableCell } from '@material-ui/core';
import LoadingIndicator from '../../../../components/common/loading-indicator/loading-indicator';

class CompaniesList extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount = async () => {
        const { dispatch, staffixService } = this.props

        dispatch(startLoadingCompanies())

        const companies = await staffixService.getCompanies()
        
        dispatch(saveLoadedCompanies(companies))

        dispatch(finishLoadingCompanies())
    }

    onAddCompanyClick = () => {
        this.props.history.push('/companies/new')
    }

    onDeleteButtonClick = async () => {
        const {
            dispatch,
            deletedCompanies,
            staffixService
        } = this.props

        dispatch(startDeletingCompanies())

        await staffixService.deleteCompanies(deletedCompanies)

        dispatch(companiesDeleted())

        dispatch(finishDeletingCompanies())
    }

    onSearchCompanyChange = (name) => {
        this.props.dispatch(updateVisibleCompanies(name))
    }

    onCompanyCheck = (companyId) => {
        this.props.dispatch(updateDeletedCompanies(companyId))
    }

    render() {
        const {
            companies,
            deletedCompanies,
            loadingCompanies,
            deletingCompanies
        } = this.props

        if(loadingCompanies || deletingCompanies)
            return <LoadingIndicator />

        const renderRow = company => {
            const { id, name, requests } = company;
            
            return (
                <TableRow>
                    <TableCell>
                        <Link to={`/companies/${id}`}>{name}</Link>
                    </TableCell>
                    <TableCell>
                        {requests}
                    </TableCell>
                    <TableCell>
                        <input 
                            type="checkbox" 
                            checked={deletedCompanies.indexOf(id) !== -1} 
                            onChange={() => this.onCompanyCheck(id)} />
                    </TableCell>
                </TableRow>
            );
        }

        return (
            <DeleteFormView
                onSearchChange={this.onSearchCompanyChange}
                searchPlaceholder="Введите название компании..."
                hasCheckedItems={!!deletedCompanies.length}
                addButton={{
                    label: 'Добавить компанию',
                    onClick: this.onAddCompanyClick
                }} 
                deleteButton={{
                    label: 'Удалить компанию',
                    onClick: this.onDeleteButtonClick
                }} >
                <DeleteFormTableView 
                    columns={[ 'Компания', 'Заявки', '']}
                    items={companies}
                    renderRow={renderRow} />
            </DeleteFormView>
        )
    }
}

const mapStoreToProps = ({
    companiesPage: {
        companiesList: {
            visibleCompanies: companies,
            deletedCompanies
        },
        networkWaiting: {
            loadingCompanies,
            deletingCompanies
        }
    }
}) => {
    return {
        companies,
        deletedCompanies,
        loadingCompanies,
        deletingCompanies
    }
}

export default connect(mapStoreToProps)(withStaffixService(CompaniesList))