import React, { Fragment } from 'react'

import './style.css'

const LibraryContentView = ({
    children
}) => {
    return (
        <div className="library-content">
            {children}
        </div>
    );
}

export default LibraryContentView;