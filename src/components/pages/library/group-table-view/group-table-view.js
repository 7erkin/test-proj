import React, { Component } from 'react'
import { TableRow, TableCell } from '@material-ui/core';
import DeleteFormTableView from '../delete-form-table-view';

export default class extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {
            deletedGroupIds,
            onGroupCheck,
            renderName,
            groups,
            ...others
        } = this.props;

        const renderRow = item => {
            const { id, name } = item;
            
            return (
                <TableRow>
                    <TableCell>{renderName(id, name)}</TableCell>
                    <TableCell>
                        <input 
                            type="checkbox" 
                            checked={deletedGroupIds.indexOf(id) !== -1} 
                            onChange={() => onGroupCheck(id)} />
                    </TableCell>
                </TableRow>
            );
        }

        return (
            <DeleteFormTableView 
                items={groups}
                renderRow={renderRow} 
                {...others} />
        );
    }
}