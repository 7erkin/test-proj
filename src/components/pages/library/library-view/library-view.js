import React from 'react'

import './style.css'

const LibraryView = ({
    children
}) => {
    return (
        <section className='library'>
            <h2>Библиотека</h2>
            {
                children
            }
        </section>
    );
}

export default LibraryView;