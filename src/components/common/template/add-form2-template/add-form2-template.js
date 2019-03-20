import React from 'react'

const AddForm2Template = ({
    onSubmit, 
    inputName,
    inputDescription,
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
            <textarea 
                onChange={event => inputDescription.onChange(event.target.value)} 
                value={inputDescription.value} 
                placeholder={inputDescription.placeholder} />
            <button type="button" onClick={() => onBack()}>Cancel</button>
            <button type="submit">Save</button>
        </form>
    );
}

export default AddForm2Template;