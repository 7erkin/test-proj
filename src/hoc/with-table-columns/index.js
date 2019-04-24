import React, {Component} from 'react'

const withTableColumns = (columns) => WrappedTable => {
    return (props) => <WrappedTable columns={columns} {...props} />
}

export default withTableColumns;