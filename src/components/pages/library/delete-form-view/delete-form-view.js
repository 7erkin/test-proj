import React from 'react'
import PropTypes from 'prop-types'
import {Button, List, withStyles, ListItem, Typography} from '@material-ui/core'

import './style.css'
import CustomSearchView from '../../../common/custom-search-view';

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
    description = null,
    onSearchChange,
    searchPlaceholder,
    hasCheckedItems,
    addButton: {
        label: addButtonLabel,
        onClick: addButtonClick
    },
    deleteButton: {
        label: deleteButtonLabel,
        onClick: deleteButtonClick
    },
    children
}) => {

    const Description = description === null ? null : <b>{description}</b>;

    return (
        <form className="delete-form" onSubmit={evt => {
            evt.preventDefault();
            deleteButtonClick();
        }}>
            <Typography variant="body1" gutterBottom>
                {Description}
            </Typography>
            <CustomSearchView onChange={(evt) => onSearchChange(evt.target.value)} placeholder={searchPlaceholder}/>
            <div className="buttons">
                <AddButton variant="contained" onClick={addButtonClick}>{addButtonLabel}</AddButton>
                <DeleteButton variant="contained" type="submit" disabled={!hasCheckedItems}>{deleteButtonLabel}</DeleteButton>
            </div>
            {children}
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
    onSearchChange: PropTypes.func.isRequired,
    onItemCheck: PropTypes.func.isRequired,
    addButton: PropTypes.shape({
        label: PropTypes.string.isRequired,
        onClick: PropTypes.func.isRequired
    }).isRequired,
    deleteButton: PropTypes.shape({
        label: PropTypes.string.isRequired,
        onClick: PropTypes.func.isRequired
    }).isRequired
}

export default DeleteFormView;