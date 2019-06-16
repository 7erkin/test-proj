import React from 'react'
import PropTypes from 'prop-types'

import {
    TextField
} from '@material-ui/core'

import './style.css'

const CustomInputView = ({
    label,
    err: errorMessage,
    value,
    onChange,
    multiline = false,
    rows = 1,
    ...others
}) => {
    return (
        <div class="custom-input">
            <TextField 
                label={label}
                type="text" 
                error={errorMessage.length} 
                helperText={errorMessage} 
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