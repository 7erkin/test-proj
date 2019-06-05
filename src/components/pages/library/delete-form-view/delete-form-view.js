import React from 'react'
import PropTypes from 'prop-types'
import {Button, List, withStyles, ListItem} from '@material-ui/core'

import './style.css'

const addButtonStyles = {
    root: {
        background: 'green',
        color: 'white'
    }
}
const deleteButtonsStyles = {
    root: {
        background: 'red',
        color: 'white'
    }
}

const AddButton = withStyles(addButtonStyles)(Button)
const DeleteButton = withStyles(deleteButtonsStyles)(Button)

const DeleteFormView = ({
    renderItemName,
    description = null,
    items,
    deletedItemIds,
    onSubmit,
    onInputChange,
    onItemCheck,
    onAddItemClick
}) => {

    const Description = description === null ? null : <b>{description}</b>;

    return (
        <form className="delete-form" onSubmit={evt => {
            evt.preventDefault();
            onSubmit();
        }}>
            {Description}
            <input placeholder="Input entity name to search..." type="text" className="form-control" onChange={evt => onInputChange(evt.target.value)}/>
            <div className="buttons">
                <AddButton variant="contained" onClick={onAddItemClick}>Add</AddButton>
                <DeleteButton variant="contained" type="submit">Delete</DeleteButton>
            </div>
            <List>
            {
                items.map(({id, name}) => {
                    return (
                        <ListItem key={id}>
                            {renderItemName(id, name)}
                            <input 
                                type="checkbox" 
                                checked={deletedItemIds.indexOf(id) !== -1} 
                                onChange={() => onItemCheck(id)} />
                        </ListItem>
                    );
                })
            }
            </List>
        </form>
    );
}

DeleteFormView.propTypes = {
    renderItemName: PropTypes.func.isRequired,
    description: PropTypes.string,
    items: PropTypes.arrayOf({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired
    }).isRequired,
    deletedItemIds: PropTypes.array.isRequired,
    onSubmit: PropTypes.func.isRequired,
    onInputChange: PropTypes.func.isRequired,
    onItemCheck: PropTypes.func.isRequired,
    onAddItemClick: PropTypes.func.isRequired
}

export default DeleteFormView;