import React from 'react'

interface Props{
    onChange: (description: string) => void,
    description: string
}

const CompetenceDescription = (props: Props) => {
    const {
        description,
        onChange
    } = props;

    return (
        <textarea onChange={event => onChange(event.target.value)} value={description}/>
    );
}

export default CompetenceDescription;