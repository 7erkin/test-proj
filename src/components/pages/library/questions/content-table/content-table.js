import React from 'react'

import Table from '@material-ui/core/Table';
import { TableRow, TableCell, TableBody, TableHead } from '@material-ui/core';

import {
    Link
} from 'react-router-dom'

export default ({
    columns,
    values,
    competenciesGroupId
}) => {

    console.log(values)
    
    return (
        <Table>
            <TableHead>
                <TableRow>
                    {columns.map(el => <TableCell>{el}</TableCell>)}
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    values.map(el => {
                        console.log(values)
                        return (
                            <TableRow>
                                <TableCell>{el.competenceName}</TableCell>
                                <TableCell>{el.competenceDescription}</TableCell>
                                <TableCell>
                                    <Link to={`/library/questions-groups/${competenciesGroupId}/questions/${el.idCompetence}`}>{el.questions}</Link>
                                </TableCell>
                            </TableRow>
                        );
                    })
                }
            </TableBody>
        </Table>
    );
}