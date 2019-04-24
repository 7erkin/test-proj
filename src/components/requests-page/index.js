import React from 'react'

const RequestsPageComponent = ({children}) => {
    return (
        <section className="requests-page">
            <h2>Все заявки</h2>
            {children}
        </section>
    );
}

export default RequestsPageComponent;