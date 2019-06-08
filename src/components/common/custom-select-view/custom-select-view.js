import React from 'react'
import { Select } from '@material-ui/core';

const CustomSelectView = ({
    label,
    value,
    items,
    onChange,
    ...others
}) => {
    return (
        <div className="custom-select">
            <label>{label}</label>
            <Select value={value} onChange={(evt) => {}} {...others}>
            {
                items.map(el => <option value={el.id}>{el.name}</option>)
            }
            </Select>
        </div>
    );
}

export default CustomSelectView;