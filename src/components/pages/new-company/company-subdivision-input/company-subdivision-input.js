import React, {Fragment} from 'react'

const CompanySubdivisionInput = (
    onChange,
    onAddSubdivisionClick,
    value
) => {
    return (
        <Fragment>
            <label>Подразделение/отдел</label>
            <input value={value} onChange={(evt) => onChange(evt.target.value)} type="text" className="form-control" placeholder="Название подразделения/отдела"></input>
                {/* <button className="btn sm" onClick={onAddSubdivisionClick}>Добавить подразделение/отдел</button> */}
        </Fragment>
    );
}

export default CompanySubdivisionInput;