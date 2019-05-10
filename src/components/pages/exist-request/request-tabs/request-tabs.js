import React from 'react'

import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core';

import './style.css'

const styles = {}

const CustomButton = withStyles(styles)(Button);


const RequestTabs = ({
    tabs,
    onTabSwitch
}) => {
    return (
        <ul className="request-tabs">
            {
                tabs.map((el, index) => <li key={index} onClick={() => onTabSwitch(el)}><CustomButton>{el}</CustomButton></li>)
            }
        </ul>
    );
}

export default RequestTabs;