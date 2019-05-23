import React from 'react'
import PropTypes from 'prop-types'

import {
    List, ListItem, ListItemText
} from '@material-ui/core'

import './style.css'

const AsideListView = ({
    items: {
        values,
        onClick: onItemClick
    },
    editButton: {
        name: buttonName,
        onClick: onEditButtonClick
    }
}) => {

    return (
        <div className="aside-list">
            <button type="button" onClick={onEditButtonClick}>{buttonName}</button>
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
    }).isRequired
}

export default AsideListView;