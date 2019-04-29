import React from 'react'
import Select from '../../../common/select';

const SubdivisionSelect = ({
    onChange,
    value,
    children
}) => {
    return (
        <Select label="Подразделение/отдел" defaultName="Выберите подразделение/отдел" value={value} onChange={onChange}>
            {children}
        </Select>
    );
}

export default SubdivisionSelect;