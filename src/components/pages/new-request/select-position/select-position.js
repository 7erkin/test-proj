import React from 'react'
import Select from '../../../common/select';

const PositionSelect = ({
    onChange,
    value,
    children
}) => {
    return (
        <Select label="Должность" defaultName="Выберите должность" value={value} onChange={onChange}>
            {children}
        </Select>
    );
}

export default PositionSelect;