import React, { Component } from 'react'
import GroupTableView from '../../group-table-view';

const columns = [
    'Группа компетенций',
    ''
]

export default class extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <GroupTableView {...this.props} columns={columns} />
    }
}