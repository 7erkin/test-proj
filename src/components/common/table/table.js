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
                        return (
                            <TableRow onClick={() => onRowClick(el.id)}>
                                <TableCell>{el.number}</TableCell>
                                <TableCell>{el.dateCreate}</TableCell>
                                <TableCell>{el.company}</TableCell>
                                <TableCell>{el.position}</TableCell>
                                <TableCell>{el.subdivision}</TableCell>
                                <TableCell>{el.candidates}</TableCell>
                                <TableCell>{el.agreements}</TableCell>
                            </TableRow>
                        );
                    })
                }
            </TableBody>
        </Table>
    );
}