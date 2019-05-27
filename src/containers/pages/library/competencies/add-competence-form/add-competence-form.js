import React, { Component } from 'react'
import { connect } from 'react-redux';
import Accordeon from '../../../../../components/pages/library/accordeon';

import withStaffixService from '../../../../../hoc/hoc-services/with-staffix-service'
import withEffectApplyingChanges from '../../../../../hoc/with-effect-applying-changes'

class AddCompetenceForm extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <form onSubmit={() => {}}>
                <input type="text" value={1} onChange={() => {}} />
                <textarea value={1} onChange={() => {}} />
                <Accordeon />
            </form>
        );
    }
}

const mapStoreToProps = () => {
    return {}
}

export default connect(mapStoreToProps)(withStaffixService(withEffectApplyingChanges(AddCompetenceForm)));