import React from 'react'
import { connect } from 'react-redux';

import withStaffixService from '../../../../hoc/hoc-services/with-staffix-service'

class Indicators extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <h2>Indicators</h2>;
    }
}

const mapStoreToProps = () => {
    return null;;
}

export default connect(mapStoreToProps)(withStaffixService(Indicators));