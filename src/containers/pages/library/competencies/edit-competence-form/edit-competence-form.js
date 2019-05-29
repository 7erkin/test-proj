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
import { updateEditCompetenceName, updateEditCompetenceDescription, updateEditCompetenceGroupId, uploadEditedCompetence, resetEditCompetenceForm } from '../../../../../action-creators/library-page/competencies';
import EditCompetenceIndicatorAccordeon from '../edit-competence-indicator-accordeon';


class EditCompetenceForm extends Component {
    constructor(props) {
        super(props);
    }

    _uploadCompetenceNameToStore() {
        const {dispatch, competencies, match: {params: {idCompetence}}} = this.props;

        const index = competencies.findIndex(el => el.id == idCompetence);

        dispatch(uploadEditedCompetence(competencies[index]))
    }

    componentDidMount() {
        const {
            dispatch,
            staffixService
        } = this.props;

        this._uploadCompetenceNameToStore();

        dispatch(startLoadingIndicatorsGroups());
        staffixService.getGroupsIndicators()
            .then(groups => {
                dispatch(saveLoadedIndicatorsGroups(groups));
                dispatch(finishLoadingIndicatorsGroups());
            })
    }

    onSubmit = () => {
        const { dispatch, staffixService, editCompetence, editCompetence: {idGroup}, history } = this.props;

        dispatch(startApplyingChanges());
        staffixService.updateCompetence(editCompetence)
            .then(() => {
                dispatch(resetEditCompetenceForm())
                dispatch(finishApplyingChanges())
                history.push(`/library/competencies-groups/${idGroup}`)
            })
    }

    onCancel = () => {}

    onCompetenceNameChange = name => {
        this.props.dispatch(updateEditCompetenceName(name));
    }

    onCompetenceDescriptionChange = description => {
        this.props.dispatch(updateEditCompetenceDescription(description))
    }

    onCompetenceGroupIdChange = id => {
        this.props.dispatch(updateEditCompetenceGroupId(id));
    }

    render() {
        const {
            editCompetence: {
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
                <EditCompetenceIndicatorAccordeon />
                <button type="submit">Save</button>
                <button type="button">Cancel</button>
            </form>
        );
    }
}

const mapStoreToProps = ({
    libraryPage: {
        editCompetence,
        loadingIndicatorsGroups,
        applyingChanges,
        competenciesGroups,
        competencies
    }
}) => {
    return {
        editCompetence,
        loadingIndicatorsGroups,
        applyingChanges,
        competenciesGroups,
        competencies
    }
}

export default connect(mapStoreToProps)(withStaffixService(withEffectApplyingChanges(EditCompetenceForm)));