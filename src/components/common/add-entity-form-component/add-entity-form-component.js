import React from 'react'

import './style.css'

const AddEntityFormComponent = ({
    onSubmit,
    onCancel,
    children
}) => {

    return (
        <form className="add-entity-form vertical-wrapper" onSubmit={(evt) => {
            evt.preventDefault();
            onSubmit();
        }}>
            {
                children.map(el => {
                    return (
                        <div className="horizontal-wrapper form-part">
                            {el}
                        </div>
                    );
                })
            }
            <div className="horizontal-wrapper form-actions">
                <button className="btn btn-success" type="submit">Сохранить</button>
                <button className="btn btn-danger" type="button" onClick={onCancel}>Отменить</button>
            </div>
        </form>
    );
}

export default AddEntityFormComponent;