import React, { Component } from 'react'
import DeleteFormTableView from '../../delete-form-table-view';
import { TableRow, TableCell } from '@material-ui/core';

const columns = [
    'Индикатор',
    ''
]

export default class extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {
            deletedIndicatorIds,
            onIndicatorCheck,
            renderName,
            indicators,
            ...others
        } = this.props;

        const renderRow = indicator => {
            const { id, name } = indicator;
            
            return (
                <TableRow>
                    <TableCell>{renderName(id, name)}</TableCell>
                    <TableCell>
                        <input 
                            type="checkbox" 
                            checked={deletedIndicatorIds.indexOf(id) !== -1} 
                            onChange={() => onIndicatorCheck(id)} />
                    </TableCell>
                </TableRow>
            );
        }

        return (
            <DeleteFormTableView 
                items={indicators}
                renderRow={renderRow} 
                columns={columns} 
                {...others} />
        );
    }
}