import React, { Component } from 'react'
import { TableRow, TableCell } from '@material-ui/core';
import DeleteFormTableView from '../../delete-form-table-view';

const columns = [
    'Компетенция',
    'Описание',
    ''
]

export default class extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {
            deletedCompeteceIds,
            onCompetenceCheck,
            renderName,
            competencies,
            ...others
        } = this.props;

        const renderRow = competence => {
            const { id, name, description } = competence;
            console.log(deletedCompeteceIds)
            return (
                <TableRow>
                    <TableCell>{renderName(id, name)}</TableCell>
                    <TableCell>{description}</TableCell>
                    <TableCell>
                        <input 
                            type="checkbox" 
                            checked={deletedCompeteceIds.indexOf(id) !== -1} 
                            onChange={() => onCompetenceCheck(id)} />
                    </TableCell>
                </TableRow>
            );
        }

        return (
            <DeleteFormTableView 
                items={competencies}
                renderRow={renderRow}
                columns={columns} 
                {...others} />
        );
    }
}