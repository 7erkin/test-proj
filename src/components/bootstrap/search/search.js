import React from 'react'

export default ({
    placeholder
}) => {
    return (
        <div class="active-cyan-3 active-cyan-4 mb-4">
            <input class="form-control" type="text" placeholder={placeholder} aria-label="Search"/>
        </div>
    );
}