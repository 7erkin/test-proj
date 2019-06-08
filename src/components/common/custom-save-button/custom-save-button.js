import React from 'react'
import { Button, withStyles } from "@material-ui/core";

const styles = {
    root: {
        background: 'green'
    }
}

const CustomButton = withStyles(styles)(Button);

const CustomSaveButton = ({
    name = 'Сохранить',
    ...others
}) => {
    return <CustomButton type="submit" size="medium" {...others}>{name}</CustomButton>
}

export default CustomSaveButton;