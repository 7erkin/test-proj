import React from 'react'

interface Props{
    onChange: (name: string) => void,
    name: string
}

const CompetenceName = (props: Props) => {
    const {
        name, 
        onChange
    } = props;

    return (
        <input 
            onChange={event => onChange(event.target.value)} 
            type="text" 
            value={name} 
            placeholder="Input competence name" />
    );
}

export default CompetenceName;