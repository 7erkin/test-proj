import React, { Component } from 'react'
import { connect } from 'react-redux';
import Accordeon from '../../../../../components/pages/library/accordeon';

import withStaffixService from '../../../../../hoc/hoc-services/with-staffix-service'
import withEffectApplyingChanges from '../../../../../hoc/with-effect-applying-changes'

class AddCompetenceForm extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const {
            dispatch,
            staffixService
        } = this.props;
    }

    onSubmit = () => {}

    onCancel = () => {}

    onIndicatorCheck = id => {}

    onCompetenceNameUpdate = name => {}

    onCompetenceDescriptionUpdate = description => {}

    render() {
        const {
            newCompetence: {
                name,
                description
            },
            indicators,
            indicatorsGroups,
            loadingIndicators
        } = this.props;

        return (
            <form onSubmit={evt => {
                evt.preventDefault();
                this.onSubmit();
            }}>
                <input type="text" value={name} onChange={(evt) => this.onCompetenceNameUpdate(evt.target.value)} />
                <textarea value={description} onChange={(evt) => this.onCompetenceDescriptionUpdate(evt.target.value)} />
                <Accordeon indicatorsGroups={indicatorsGroups} renderList={() => {}}/>
                <button type="submit">Save</button>
                <button type="button">Cancel</button>
            </form>
        );
    }
}

const mapStoreToProps = ({
    libraryPage: {
        newCompetence,
        indicatorsGroups,
        loadingIndicators,
        loadingIndicatorsGroups,
        applyingChanges,
        indicators
    }
}) => {
    return {
        newCompetence,
        indicatorsGroups,
        loadingIndicators,
        applyingChanges,
        indicators
    }
}

export default connect(mapStoreToProps)(withStaffixService(withEffectApplyingChanges(AddCompetenceForm)));