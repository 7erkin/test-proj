import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import {
    ListItem, ListItemText, List
} from '@material-ui/core'

const IndicatorsListView = ({
    indicators,
    groupIndicatorDescription,
    searchIndicators: {
        value,
        onChange
    }
}) => {
    return (
        <Fragment>
            <p>{groupIndicatorDescription}</p>
            <input type="text" className="form-control" value={value} onChange={(evt) => {onChange(evt.target.value)}}/> <br/>
            <List>
                {
                    indicators.map(el => {
                        return (
                            <ListItem key={el.id}>
                                <ListItemText>{el.name}</ListItemText>
                            </ListItem>
                        );
                    })
                }
            </List>
        </Fragment>
    );
}

IndicatorsListView.propTypes = {
    indicators: PropTypes.arrayOf({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired
    }).isRequired,
    groupIndicatorDescription: PropTypes.string.isRequired,
    searchIndicators: PropTypes.shape({
        value: PropTypes.string.isRequired,
        onChange: PropTypes.func.isRequired
    }).isRequired
}

export default IndicatorsListView;