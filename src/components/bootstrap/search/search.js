import React from 'react'

export default ({
    value, placeholder, onChange
}) => {
    return (
        <div class="active-cyan-3 active-cyan-4 mb-4">
            <input 
                class="form-control" 
                type="text" 
                value={value} 
                onChange={evt => onChange(evt.target.value)} 
                placeholder={placeholder}
                aria-label="Search"/>
        </div>
    );
}