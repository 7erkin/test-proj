import React, {Fragment} from 'react'

const CopmanyNameInput = ({
    value,
    onChange
}) => {
    return (
        <Fragment>
            <label>Название организации</label>
            <input value={value} placeholder="Введите название организации" onChange={onChange} type="text" className="form-control"></input>
        </Fragment>
    );
}

export default CopmanyNameInput;