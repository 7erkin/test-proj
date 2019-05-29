import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';

import withStaffixService from '../../../../../hoc/hoc-services/with-staffix-service'
import withEffectApplyingChanges from '../../../../../hoc/with-effect-applying-changes'

import { 
    startLoadingIndicatorsGroups, 
    saveLoadedIndicatorsGroups, 
    finishLoadingIndicatorsGroups
} from '../../../../../action-creators/library-page/indicators';

import {
    startApplyingChanges,
    finishApplyingChanges
} from '../../../../../action-creators/library-page'

import { updateNewCompetenceName, updateNewCompetenceGroupId, updateNewCompetenceDescription, resetNewCompetenceForm } from '../../../../../action-creators/library-page/competencies';
import AddCompetenceIndicatorAccordeon from '../add-competence-indicator-accordeon';

class AddCompetenceForm extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const {
            dispatch,
            staffixService
        } = this.props;

        dispatch(startLoadingIndicatorsGroups());
        staffixService.getGroupsIndicators()
            .then(groups => {
                dispatch(saveLoadedIndicatorsGroups(groups));
                dispatch(finishLoadingIndicatorsGroups());
            })
    }

    onSubmit = () => {
        const { dispatch, staffixService, newCompetence, newCompetence: {idGroup}, history } = this.props;

        dispatch(startApplyingChanges());
        staffixService.createCompetence(newCompetence)
            .then(() => {
                dispatch(finishApplyingChanges());
                dispatch(resetNewCompetenceForm())
                history.push(`/library/competencies-groups/${idGroup}`)
            })
    }

    onCancel = () => {}

    onCompetenceNameChange = name => {
        this.props.dispatch(updateNewCompetenceName(name));
    }

    onCompetenceDescriptionChange = description => {
        this.props.dispatch(updateNewCompetenceDescription(description))
    }

    onCompetenceGroupIdChange = id => {
        this.props.dispatch(updateNewCompetenceGroupId(id));
    }

    render() {
        const {
            newCompetence: {
                name,
                description,
                idGroup
            },
            loadingIndicatorsGroups,
            competenciesGroups
        } = this.props;

        if(loadingIndicatorsGroups)
            return <h2>Indicators groups loading...</h2>

        return (
            <form onSubmit={evt => {
                evt.preventDefault();
                this.onSubmit();
            }}>
                <input type="text" value={name} onChange={(evt) => this.onCompetenceNameChange(evt.target.value)} />
                <textarea value={description} onChange={(evt) => this.onCompetenceDescriptionChange(evt.target.value)} />
                <select value={idGroup} onChange={(evt) => this.onCompetenceGroupIdChange(evt.target.value)}>
                    {
                        competenciesGroups.map(el => <option value={el.id}>{el.name}</option>)
                    }
                </select>
                <AddCompetenceIndicatorAccordeon />
                <button type="submit">Save</button>
                <button type="button">Cancel</button>
            </form>
        );
    }
}

const mapStoreToProps = ({
    libraryPage: {
        newCompetence,
        loadingIndicatorsGroups,
        applyingChanges,
        competenciesGroups
    }
}) => {
    return {
        newCompetence,
        loadingIndicatorsGroups,
        applyingChanges,
        competenciesGroups
    }
}

export default connect(mapStoreToProps)(withStaffixService(withEffectApplyingChanges(AddCompetenceForm)));