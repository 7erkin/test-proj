import React, {Fragment} from 'react'

const RequestDateInput = ({
    onChange,
    value
}) => {
    return (
        <Fragment>
            <label>Дата заявки</label>
            <input value={value} onChange={(evt) => onChange(evt.target.value)} type="date" className="form-control" placeholder="Имя получателя"></input>
        </Fragment>
    );
}

export default RequestDateInput;