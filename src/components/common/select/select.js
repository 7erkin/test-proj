import React, {Fragment} from 'react'

const Select = ({
    onChange,
    value,
    children,
    label,
    defaultName
}) => {
    return (
        <Fragment>
            <label>{label}</label>
            <select value={value} onChange={(evt) => onChange(evt.target.value)} className="browser-default custom-select">
                <option value=''>{defaultName}</option>
                {children}
            </select>
        </Fragment>
    );
}

export default Select;