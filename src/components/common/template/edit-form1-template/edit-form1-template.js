import React from 'react'
import Search from '../../search-line';

const EditForm1Template = ({
    onSubmit,
    search,
    description,
    addEntityButton,
    rednerEntity,
    entities,
    deleteButtonName
}) => {
    return (
        <form className="edit-form1-template" action="#" onSubmit={(event) => {
                event.preventDefault();
                onSubmit(event);
            }}>
            <Search onChange={search.onEntitySearch} value={search.value}/>
            <p className="edit-form1-description">
                {description}
            </p>
            <button type="button" onClick={addEntityButton.onClick}>{addEntityButton.name}</button>
            <button type="submit">{deleteButtonName}</button>
            <ul className='edit-form1-entities-list'>
            {
                entities.map(el => rednerEntity(el))
            }
            </ul>
        </form>
    );
}

export default EditForm1Template;