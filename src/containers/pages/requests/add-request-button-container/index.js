import React from 'react'
import PrimaryButtonContainer from '../../../../components/material-ui/primary-button'

const AddRequestButtonContainer = ({history}) => {
    return <PrimaryButtonContainer onClick={() => history.push('/requests/new')} name="Добавить заявку"/>
}

export default AddRequestButtonContainer;