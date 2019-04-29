import React from 'react'
import Select from '../../../common/select';

const CompanySelect = ({
    onChange,
    value,
    children
}) => {
    return (
        <Select label="Компания" defaultName="Выберите компанию" value={value} onChange={onChange}>
            {children}
        </Select>
    );
}

export default CompanySelect;