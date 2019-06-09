import {Button, withStyles} from '@material-ui/core'

const deleteButtonsStyles = {
    root: {
        background: 'red',
        color: 'white'
    }
}

export default withStyles(deleteButtonsStyles)(Button)