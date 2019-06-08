import React, { Component } from 'react'

import CompetenceFormView from '../../../../../components/pages/library/competencies/competence-form-view/competence-form-view';
import CustomInputView from '../../../../../components/common/custom-input-view';
import CustomSelectView from '../../../../../components/common/custom-select-view';

import { Button } from '@material-ui/core';
import { EditCompetenceIndicatorAccordeon } from '../indicator-accordeon/indicator-accordeon';

import { 
    updateEditCompetenceName, 
    updateEditCompetenceDescription, 
    updateEditCompetenceGroupId, 
    resetEditCompetenceForm, 
    uploadEditedCompetence
} from '../../../../../action-creators/library-page/competencies';
import CustomTextAreaView from '../../../../../components/common/custom-textarea-view';


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
        this._uploadCompetenceNameToStore();
    }

    onCompetenceNameChange = name => this.props.dispatch(updateEditCompetenceName(name))
    onCompetenceDescriptionChange = description => this.props.dispatch(updateEditCompetenceDescription(description))
    onCompetenceGroupIdChange = id => this.props.dispatch(updateEditCompetenceGroupId(id))

    onSaveCompetenceClick = () => {
        const {
            onSaveCompetenceClick, staffixService, editCompetence
        } = this.props;

        const promise = staffixService.updateCompetence(editCompetence);

        onSaveCompetenceClick(promise, resetEditCompetenceForm);
    }

    render() {
        const {
            editCompetence: {
                name,
                description,
                idGroup
            },
            competenciesGroups
        } = this.props;

        return (
            <CompetenceFormView onSaveCompetenceClick={this.onSaveCompetenceClick}>
                <CustomInputView value={name} label='Название компетенции' onChange={this.onCompetenceNameChange} err={{hasErr: false, messageErr: ''}}/>
                <CustomTextAreaView value={description} label='Описание компетенции' onChange={this.onCompetenceDescriptionChange} err={{hasErr: false, messageErr: ''}}/>
                <CustomSelectView value={idGroup} label='Группа компетенций' items={competenciesGroups} onChange={this.onCompetenceGroupIdChange}/>
                <EditCompetenceIndicatorAccordeon />
                <Button type="submit">Save</Button>
                <Button type="button" onClick={this.onCancel}>Cancel</Button>
            </CompetenceFormView>
        );
    }
}

const mapStoreToEditCompetenceFormProps = ({
    libraryPage: {
        editCompetence,
        loadingIndicatorsGroups,
        applyingChanges,
        competencies,
        competenciesGroups
    }
}) => {
    return {
        competencies,
        editCompetence,
        loadingIndicatorsGroups,
        applyingChanges,
        competenciesGroups
    }
}

export {
    mapStoreToEditCompetenceFormProps
}

export default EditCompetenceForm;