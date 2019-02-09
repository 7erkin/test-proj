import React from 'react'

const EditMode = props => {
    return (
        <div>
            <input 
                type='checkbox' 
                class='ios8-switch' 
                id='checkbox-1'
                checked={props.isOn}
                onChange={props.onSwitch} />
            <label for='checkbox-1'>Редактор групп</label>
            <br />
        </div>
    );
};

export default EditMode;