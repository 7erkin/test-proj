import React from 'react'

const GroupDescription = props => {
    return (
        <p className="indicator-group-decsription">
            <b>Описание группы: </b>{props.description}
        </p>
    );
};

export default GroupDescription;