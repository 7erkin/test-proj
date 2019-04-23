import React from 'react'

import './table.css'

const Table = ({
    headers,
    tableItems,
    renderTableItem
}) => {
    return (
        <table className="table">
            <tr>
            {
                headers.map(el => <th>{el}</th>)
            }
            </tr>
            {
                tableItems.map(item => {
                    return (
                        <tr>
                            {
                                renderTableItem(item)
                            }
                        </tr>
                    );
                })
            }
        </table>
    );
}

export default Table;