import React, {Fragment} from 'react'

const AddressCompanyInput = ({
    value,
    onChange
}) => {
    return (
        <Fragment>
            <label>Адрес организации</label>
            <input value={value} placeholder="Введите адрес организации" onChange={onChange} type="text" className="form-control"></input>
        </Fragment>
    );
}

export default AddressCompanyInput;