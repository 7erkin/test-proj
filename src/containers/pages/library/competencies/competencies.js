import React from 'react'
import { connect } from 'react-redux';

import withStaffixService from '../../../../hoc/hoc-services/with-staffix-service'

class Competencies extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <h2>Competencies</h2>;
    }
}

const mapStoreToProps = () => {
    return ;
}

export default connect(mapStoreToProps)(withStaffixService(Competencies));