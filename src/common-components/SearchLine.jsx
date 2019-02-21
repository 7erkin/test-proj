import React from 'react'

const SearchLine = props => {
    return (
        <input value={props.value} style={{marginBottom: '20px'}} className="form-control" type="text" placeholder={props.placeholder} onChange={(event) => props.onChange(event.target.value)}/>
    );
}

export default SearchLine;