import React from 'react'

const SubdivisionsAddForm = ({
    newSubdivisions, 
    newSubdivision,
    onSubmit, 
    onNameChange,
    onDescriptionChange,
    onAddSubdivision,
    onResetAddingSubdivision,
    onDeleteSubdivision,
    onBack
}) => {
    return (
        <form action="#" onSubmit={evt => {
            evt.preventDefault();
            onSubmit();
        }}>
            <div>
                <input value={newSubdivision.name} type="text" onChange={evt => onNameChange(evt.target.value)} /> <br />
                <textarea value={newSubdivision.description} onChange={evt => onDescriptionChange(evt.target.value)} /> <br />
                <button type="button" onClick={() => onAddSubdivision()}>Add subdivision</button>
                <button type="button" onClick={() => onResetAddingSubdivision()}>Reset</button>
            </div>
            <ul>
                {newSubdivisions.map(el => {
                    return (
                        <li>
                            <div>
                                <span>{el.name}</span>
                                <p>{el.description}</p>
                                <button type="button" onClick={() => onDeleteSubdivision(el.id)}>Delete</button>
                            </div>
                        </li>
                    );
                })}
            </ul>
            <button type="button" onClick={() => onBack()}>Cancel</button>
            <button type="submit">Save</button>
        </form>
    );
}

export default SubdivisionsAddForm;