import React from 'react'

import Table from '@material-ui/core/Table';
import { TableRow, TableCell, TableBody, TableHead } from '@material-ui/core';

export default ({
    columns,
    values,
    onRowClick
}) => {

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
                            <TableRow onClick={() => onRowClick(el.idCompetence)}>
                                <TableCell>{el.competenceName}</TableCell>
                                <TableCell>{el.competenceDescription}</TableCell>
                                <TableCell>{el.questions}</TableCell>
                            </TableRow>
                        );
                    })
                }
            </TableBody>
        </Table>
    );
}