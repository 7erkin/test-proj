import React from 'react'

const AddForm1Template = ({
    onSubmit, 
    inputName,
    selectGroup,
    onBack}) => {
    return (
        <form action="#" onSubmit={evt => {
            evt.preventDefault();
            onSubmit();
        }}>
            <input 
                type="text" 
                placeholder={inputName.placeholder} 
                onChange={evt => inputName.onChange(evt.target.value)} 
                value={inputName.value} />
            <select value={selectGroup.value} onChange={event => selectGroup.onChange(event.target.value)}>
            {
                selectGroup.groups.map(el => {
                    return <option value={el.id}>{el.name}</option>;
                })
            }
            </select>
            <button type="button" onClick={() => onBack()}>Cancel</button>
            <button type="submit">Save</button>
        </form>
    );
}

export default AddForm1Template;