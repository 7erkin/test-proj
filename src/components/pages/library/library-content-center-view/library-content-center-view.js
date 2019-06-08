import React from 'react'

import './style.css'

// TODO: shouldComponentUpdate()?
const LibraryContentCenterView = ({
    children
}) => {
    return <div className='library-content-center'>{children}</div>
}

export default LibraryContentCenterView;