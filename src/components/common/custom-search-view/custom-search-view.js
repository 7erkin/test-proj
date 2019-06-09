import React from 'react'
import { OutlinedInput, withStyles } from '@material-ui/core';

const CustomOutlinedInput = withStyles({
    root: {
        height: '45px',
        display: 'block',
        width: '70%'
    }
})(OutlinedInput);

const CustomSearchView = ({
    onChange,
    ...others
}) => {
    return <CustomOutlinedInput onChange={onChange} notched={true} {...others}/>
}

export default CustomSearchView;