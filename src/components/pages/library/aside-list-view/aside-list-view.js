import React from 'react'
import PropTypes, { number } from 'prop-types'

import {
    List, ListItem, ListItemText, Button
} from '@material-ui/core'

import './style.css'

const AsideListView = ({
    items: {
        values,
        onClick: onItemClick
    },
    editButton: {
        name: editButtonName,
        onClick: onEditClick
    }
}) => {

    return (
        <div className="aside-list">
            <List>
            {
                values.map(({id, name}) => {
                    return (
                        <ListItem button key={id} onClick={() => onItemClick(id)}>
                            <ListItemText primary={name}/>
                        </ListItem>
                    );
                })
            }
            </List>
            <Button type="button" onClick={onEditClick}>{editButtonName}</Button>
        </div>
    );
}

AsideListView.propTypes = {
    list: PropTypes.shape({
        values: PropTypes.arrayOf({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired
        }).isRequired,
        onClick: PropTypes.func
    }).isRequired,
    editButton: PropTypes.shape({
        name: PropTypes.string.isRequired,
        onClick: PropTypes.func.isRequired
    }).isRequired
}

export default AsideListView;