import React from 'react'

import {Link} from 'react-router-dom' 

const CompanyEditor = ({
    company,
    pointedSubdivisionsForDelete, 
    onNameChange, 
    onDescriptionChange, 
    onSubmit,
    onChecked,
    onAddSubdivisionsClicked,
    onSubdivisionsDelete,
    onBack
}) => {
    return (
        <form action="#" className="company-editor" onSubmit={evt => {
            evt.preventDefault();
            onSubmit();
        }}>
            <input value={company.name} type="text" onChange={evt => onNameChange(evt.target.value)} placeholder="Input company name"/> <br />
            <textarea value={company.description} onChange={evt => onDescriptionChange(evt.target.value)} placeholder="Input company description"/> <br />
            <button type="button" onClick={() => onAddSubdivisionsClicked()}>Add subdivisions</button>
            <button type="button" onClick={() => onSubdivisionsDelete()}>Delete pointed subdivisions</button>
            <ul>
                {
                    company.subdivisions.map(el1 => {
                        return (
                            <li key={el1.id}>
                                {el1.name}
                                <input type="checkbox" onChange={evt => onChecked(el1.id)} checked={pointedSubdivisionsForDelete.findIndex(el2 => el2 == el1.id) !== -1}/>
                            </li>
                        )
                    })
                }
                {
                    company.addedSubdivisions == undefined ? null : company.addedSubdivisions.map(el1 => {
                        return (
                            <li key={el1.id}>
                                {el1.name}
                                <input type="checkbox" onChange={evt => onChecked(el1.id)} checked={pointedSubdivisionsForDelete.findIndex(el2 => el2 == el1.id) !== -1}/>
                            </li>
                        )
                    })  
                }
            </ul>
            <button type="submit">Save</button>
            <button type="button" onClick={() => onBack()}>Cancel</button>
        </form>
    );
}

export default CompanyEditor;