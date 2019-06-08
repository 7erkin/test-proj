import React from 'react'
import { Button, withStyles } from "@material-ui/core";

const styles = {
    root: {
        background: 'gray'
    }
}

const CustomButton = withStyles(styles)(Button);

const CustomCancelButton = ({
    name = 'Назад',
    onClick,
    ...others
}) => {
    return <CustomButton size="medium" onClick={onClick} {...others}>{name}</CustomButton>
}

export default CustomCancelButton;