import React, {Fragment} from 'react'

const PositionDescription = ({
    value,
    onChange
}) => {
    return (
        <Fragment>
            <label>Описание вакансии</label>
            <input value={value} onChange={onChange} type="text" className="form-control"></input>
        </Fragment>
    );
}

export default PositionDescription;