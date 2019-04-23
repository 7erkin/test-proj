import React from 'react'
import { UNDEFINED } from '../../../../utils';

const PositionTable = ({
    selectCompany,
    selectSubdivision,
    onAddPositionClick,
    companies,
    subdivisions,
    children
}) => {
    debugger;
    return (
        <section className="positions">
            <select value={selectCompany.value} onChange={evt => selectCompany.onChange(evt.target.value)}>
                {<option value={UNDEFINED}>All companies</option>}
                {companies.map(el => <option value={el.id}>{el.name}</option>)}
            </select>
            <select value={selectSubdivision.value} onChange={evt => selectSubdivision.onChange(evt.target.value)}>
                {<option value={null}>All subdivisions</option>}
                {subdivisions.map(el => <option value={el.id}>{el.name}</option>)}
            </select>
            <button type="button" onClick={onAddPositionClick}>Add position</button>
            {children}
        </section>
    );
}

export default PositionTable;