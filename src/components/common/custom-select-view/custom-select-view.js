import React from 'react'
import { Select, MenuItem, OutlinedInput, InputLabel, FormControl } from '@material-ui/core';

import './style.css'

const CustomSelectView = ({
    label,
    value,
    items,
    onChange,
    err,
    ...others
}) => {
    return (
        <div className="custom-select">
        <FormControl>
            <InputLabel htmlFor="select">{label}</InputLabel>
            <Select helperText={err} error={err.length} inputProps={{name: label, id: 'select'}} value={value} onChange={(evt) => onChange(evt.target.value)} {...others}>
            {
                items.map(el => {
                    return (
                        <MenuItem value={el.id}>{el.name}</MenuItem>
                    );
                })
            }
            </Select>
        </FormControl>
        </div>
    );
}

export default CustomSelectView;