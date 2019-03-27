import React, { Component } from 'react'
import Accordeon from '../../../common/accordeon';

const CompetenceForm = ({
    onSubmit,
    inputName,
    inputDescription,
    selectGroup,
    Spinner,
    isIndicatorGroupsLoading,
    accordeon
}) => {
    return (
        <form onSubmit={evt => {
            evt.preventDefault(); 
            onSubmit();
        }}>
            <input 
                value={inputName.value} 
                type="text" 
                onChange={evt => inputName.onChange(evt.target.value)} 
                placeholder={inputName.placeholder} />
            <select value={selectGroup.value} onChange={evt => selectGroup.onChange(evt.target.value)}>
            {
                <option key={null}>Choose competence group</option>
            }
            {
                selectGroup.competenceGroups.map(el => <option value={el.id}>{el.name}</option>)
            }
            </select>
            <textarea 
                value={inputDescription.value} 
                onChange={evt => inputDescription.onChange(evt.target.value)} 
                placeholder={inputDescription.placeholder}/>
            {isIndicatorGroupsLoading ? <Spinner /> : <Accordeon {...accordeon}/>}
            <button type="submit">Save</button>
            <button type="button">Cancel</button>
        </form>
    );
}

export default CompetenceForm;