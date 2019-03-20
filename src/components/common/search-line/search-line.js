import React from 'react'

const Search = ({value, onChange}) => {
    return <input type="search" value={value} onChange={evt => onChange(evt.target.value)} />
}

export default Search;