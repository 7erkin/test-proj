import React from 'react'
import PropTypes from 'prop-types'

import {
    List, ListItem, ListItemText, Button, withStyles
} from '@material-ui/core'

import './style.css'

const buttonStyles = {
    root: {
        display: 'block',
        background: 'green',
        color: 'white',
        width: '150px',
        marginTop: '20px',
        // TODO: how to center?!
        margin: '0 auto'
    },
    focusVisible: {
        background: 'orange',
        color: 'white'
    }
}

const listStyles = {
    root: {
        padding: '0',
        // TODO: how to center?!
        marginTop: '20px',
        margin: '0 auto'
    }
}

const CustomList = withStyles(listStyles)(List);

const CustomButton = withStyles(buttonStyles)(Button);

const AsideListView = ({
    items: {
        values,
        onClick: onItemClick
    },
    editButton = null
}) => {

    return (
        <div className="aside-list">
            {editButton === null ? null : <CustomButton size="medium" variant="contained" onClick={editButton.onClick}>{editButton.name === undefined ? 'Группы' : editButton.name}</CustomButton>}
            <CustomList>
            {
                values.map(({id, name}) => {
                    return (
                        <ListItem button key={id} onClick={() => onItemClick(id)}>
                            <ListItemText primary={name}/>
                        </ListItem>
                    );
                })
            }
            </CustomList>
        </div>
    );
}

// TODO: default values to props should work this way
// AsideListView.defaultProps = {
//     editButton: {
//         name: 'Группы'
//     }
// }

AsideListView.propTypes = {
    list: PropTypes.shape({
        values: PropTypes.arrayOf({
            id: PropTypes.number.isRequired,
            name: PropTypes.string
        }).isRequired,
        onClick: PropTypes.func
    }).isRequired,
    editButton: {
        name: PropTypes.string.isRequired,
        onClick: PropTypes.func.isRequired
    }
}

export default AsideListView;