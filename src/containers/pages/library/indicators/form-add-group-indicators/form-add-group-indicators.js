import React, { Component } from 'react'
import { connect } from 'react-redux';
import withStaffixService from '../../../../../hoc/hoc-services/with-staffix-service';

class FormAddGroupIndicators extends Component {
    constructor(props){
        super(props);
    }

    _isNameValid = name => {}

    onNameChange = name => {}

    onDescriptionChange = description => {}

    render() {
        const {
            name,
            description
        } = this.props;

        return (
            <FormAddGroupIndicatorsView 
                name={name}
                description={description}
                onNameChange={this.onNameChange}
                onDescriptionChange={this.onDescriptionChange}/>
        );
    }
}

const mapStoreToProps = ({
    libraryPage: {
        createdObject
    }
}) => {

    return {
        ...createdObject
    };
}

export default connect(mapStoreToProps)(withStaffixService(FormAddGroupIndicators));