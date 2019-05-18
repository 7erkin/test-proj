import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import {
    ListItem, ListItemText, List
} from '@material-ui/core'

const CenterListView = ({
    entities,
    groupEntitiesDescription,
    searchEntity: {
        value,
        onChange
    }
}) => {
    return (
        <section className="center-list">
            <p>{groupEntitiesDescription}</p>
            <input type="text" className="form-control" value={value} onChange={(evt) => {onChange(evt.target.value)}}/> <br/>
            <List>
                {
                    entities.map(el => {
                        return (
                            <ListItem key={el.id}>
                                <ListItemText>{el.name}</ListItemText>
                            </ListItem>
                        );
                    })
                }
            </List>
        </section>
    );
}

CenterListView.propTypes = {
    entities: PropTypes.arrayOf({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired
    }).isRequired,
    groupEntitiesDescription: PropTypes.string.isRequired,
    searchEntity: PropTypes.shape({
        value: PropTypes.string.isRequired,
        onChange: PropTypes.func.isRequired
    }).isRequired
}

export default CenterListView;