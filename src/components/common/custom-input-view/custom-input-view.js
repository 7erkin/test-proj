import React from 'react'
import PropTypes from 'prop-types'

import {
    TextField
} from '@material-ui/core'

const CustomInputView = ({
    label,
    err: {
        hasErr,
        messageErr
    },
    value,
    onChange,
    multiline = false,
    rows = 1,
    ...others
}) => {
    return (
        <div class="custom-input">
            <label>{label}</label>
            <TextField 
                type="text" 
                error={hasErr} 
                helperText={hasErr ? messageErr : ''} 
                value={value} 
                onChange={evt => onChange(evt.target.value)}
                multiline={multiline}
                rows={rows}
                {...others}/>
        </div>
    );
}

CustomInputView.propTypes = {
    label: PropTypes.string.isRequired,
    err: {
        hasErr: PropTypes.bool.isRequired,
        messageErr: PropTypes.string.isRequired
    }.isRequired,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]).isRequired,
    onChange: PropTypes.func.isRequired,
    multiline: PropTypes.bool,
    rows: PropTypes.number
}

export default CustomInputView;