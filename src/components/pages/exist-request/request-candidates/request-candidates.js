import React, { Fragment } from 'react'
import PropTypes, { arrayOf } from 'prop-types'

import Table from '@material-ui/core/Table';
import { TableRow, TableCell, TableBody, TableHead } from '@material-ui/core';

const INTERVIEW_STATUS_YES = 'Пройдено';
const INTERVIEW_STATUS_NO = 'Не пройдено';

const columns = [
    'Дата добавления',
    'ФИО',
    'Статус интервью'
]

const RequestCandidates = ({
    candidates
}) => {
    return (
        <Fragment>
            <Table>
                <TableHead>
                    <TableRow>
                        {columns.map(el => <TableCell>{el}</TableCell>)}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        candidates.map(el => {
                            return (
                                <TableRow>
                                    <TableCell>{el.dateAdd}</TableCell>
                                    <TableCell>{el.name}</TableCell>
                                    <TableCell>{el.interviewStatus ? INTERVIEW_STATUS_YES : INTERVIEW_STATUS_NO}</TableCell>
                                </TableRow>
                            );
                        })
                    }
                </TableBody>
            </Table>
        </Fragment>
    );
}

RequestCandidates.propTypes = {
    candidates: arrayOf({
        dateAdd: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        interviewStatus: PropTypes.bool.isRequired
    })
}

export default RequestCandidates;