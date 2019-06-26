import React from 'react'
import AddCompanyButtonComponent from './add-company-button-component';
import Search from '../../bootstrap/search';
import Table from '@material-ui/core/Table';
import { TableRow, TableCell, TableBody, TableHead } from '@material-ui/core';

import {
    Link
} from 'react-router-dom'

const columns = [
    'Компании',
    'Заявки'
]

const CompaniesPageComponent = ({
    companies,
    companiesSearch,
    onRowClicked,
    onAddCompanyClicked
}) => {
    return (
        <section className="companies-page">
            <h2>Список компаний</h2>
            <AddCompanyButtonComponent onClick={onAddCompanyClicked}>Добавить компанию</AddCompanyButtonComponent>
            <Search {...companiesSearch} placeholder='Поиск по компании' />
            <Table>
            <TableHead>
                <TableRow>
                    {columns.map(el => <TableCell>{el}</TableCell>)}
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    companies.map(el => {
                        return (
                            <TableRow onClick={() => onRowClicked(el.id)}>
                                <TableCell>
                                    <Link to={`/companies/${el.id}`}>{el.name}</Link>
                                </TableCell>
                                <TableCell>{el.requests}</TableCell>
                            </TableRow>
                        );
                    })
                }
            </TableBody>
        </Table>
        </section>
    );
}

export default CompaniesPageComponent;