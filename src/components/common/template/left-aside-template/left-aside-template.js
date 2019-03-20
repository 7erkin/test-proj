import React from 'react'

const LeftAsideTemplate = ({leftComponent, centerComponent}) => {
    return (
        <section className="left-aside horizontal-wrapper">
            <div>{leftComponent}</div>
            <div>{centerComponent}</div>
        </section>
    );
}

export default LeftAsideTemplate;