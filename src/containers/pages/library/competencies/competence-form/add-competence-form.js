import React, { Component } from 'react'

import CompetenceFormView from '../../../../../components/pages/library/competencies/competence-form-view/competence-form-view';
import CustomInputView from '../../../../../components/common/custom-input-view';
import CustomSelectView from '../../../../../components/common/custom-select-view';
import CustomTextAreaView from '../../../../../components/common/custom-textarea-view';

import { Button } from '@material-ui/core';
import { AddCopmetenceIndicatorAccordeon } from '../indicator-accordeon/indicator-accordeon';

import { 
    updateNewCompetenceName, 
    updateNewCompetenceDescription, 
    updateNewCompetenceGroupId, 
    resetNewCompetenceForm 
} from '../../../../../action-creators/library-page/competencies';

class AddCompetenceForm extends Component {
    constructor(props) {
        super(props);
    }

    onCompetenceNameChange = name => this.props.dispatch(updateNewCompetenceName(name))
    onCompetenceDescriptionChange = description => this.props.dispatch(updateNewCompetenceDescription(description))
    onCompetenceGroupIdChange = id => this.props.dispatch(updateNewCompetenceGroupId(id))

    onSaveCompetenceClick = () => {
        const {
            onSaveCompetenceClick, staffixService, newCompetence
        } = this.props;

        const promise = staffixService.createCompetence(newCompetence);

        onSaveCompetenceClick(promise, resetNewCompetenceForm);
    }

    render() {
        const {
            newCompetence: {
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
                <AddCopmetenceIndicatorAccordeon />
                <Button type="submit">Save</Button>
                <Button type="button" onClick={this.onCancel}>Cancel</Button>
            </CompetenceFormView>
        );
    }
}

const mapStoreToAddCompetenceFormProps = ({
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

export {
    mapStoreToAddCompetenceFormProps
}

export default AddCompetenceForm;