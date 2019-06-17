import React from 'react'
import { Table, TableHead, TableRow, TableBody, TableCell } from '@material-ui/core';

const DeleteFormTableView = ({
    columns,
    items,
    renderRow
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
                    items.map(el => renderRow(el))
                }
            </TableBody>
        </Table>
    );
}

export default DeleteFormTableView;