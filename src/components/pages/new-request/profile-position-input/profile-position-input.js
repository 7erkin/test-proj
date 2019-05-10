import React, {Fragment} from 'react'

const ProfilePositionInput = ({
    onChange
}) => {
    return (
        <Fragment>
            <label>Профиль должности</label>
            <input type="file" className="form-control" onChange={(evt) => onChange(evt.target.files[0])}></input>
        </Fragment>
    );
}

export default ProfilePositionInput;