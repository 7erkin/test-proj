import React, { Component } from 'react'
import { connect } from 'react-redux';
import withStaffixService from '../../../../../hoc/hoc-services/with-staffix-service';

class FormAddIndicator extends Component {
    constructor(props) {
        super(props);
    }

    _isNameValid = name => {}

    onNameChange = name => {}

    onIdGroupChange = id => {}

    render() {
        const {
            name,
            idGroup
        } = this.props;

        return (
            <FormAddIndicatorView 
                name={name}
                idGroup={idGroup}
                onNameChange={this.onNameChange}
                onIdGroupChange={this.onIdGroupChange}/>
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

export default connect(mapStoreToProps)(withStaffixService(FormAddIndicator));