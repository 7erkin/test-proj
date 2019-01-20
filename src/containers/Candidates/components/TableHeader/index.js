import React from 'react'

export default function TableHeader(props) {
    const {headers} = props;
    return (
        <tr>
            {headers.map(header => <th>{header}</th>)}
        </tr>
    );
}