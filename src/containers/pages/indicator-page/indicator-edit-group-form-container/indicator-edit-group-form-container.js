import React, { Component } from 'react'
import { connect } from 'react-redux';

import AddForm2Template from '../../../../components/common/template/add-form2-template';
import withStaffixService from '../../../../hoc/with-staffix-service';

import {
    editEntityAcionCreator,
    visibleActionCreator,
    loadingActionCreator,
    entityActionCreator
} from '../../../../action-creators/indicator'

class IndicatorEditGroupForm extends Component {
    constructor(props){
        super(props);
    }

    componentWillUnmount() {
        this.props.dispatch(editEntityAcionCreator.resetEditIndicatorGroup());
        this.props.dispatch(visibleActionCreator.setEditIndicatorGroupFormVisible(false));
    }

    onNameChange = name => {
        this.props.dispatch(editEntityAcionCreator.updateEditIndicatorGroupName(name));
    }

    onDescriptionChange = description => {
        this.props.dispatch(editEntityAcionCreator.updateEditIndicatorGroupDescription(description));
    }

    onSubmit = () => { 
        if(!window.confirm('Save changes?')) return;
        this.onBack();
        this.props.dispatch(loadingActionCreator.setLoadingIndicatorGroups(true));
        this.props.staffixService.updateIndicatorGroup(this.props.editIndicatorGroup)
            .then(() => {
                return this.props.staffixService.getIndicatorGroups();
            })
            .then(indicatorGroups => {
                this.props.dispatch(entityActionCreator.saveIndicatorGroups(indicatorGroups));
                this.props.dispatch(loadingActionCreator.setLoadingIndicatorGroups(false));
            })
    }

    onBack = () => {
        this.props.dispatch(visibleActionCreator.setEditIndicatorGroupFormVisible(false));
    }

    render() {
        const {
            editIndicatorGroup
        } = this.props;

         return (
             <AddForm2Template 
                inputName={{
                    value: editIndicatorGroup.name,
                    onChange: this.onNameChange,
                    placeholder: 'Input indicator group name'
                }}
                inputDescription={{
                    value: editIndicatorGroup.description,
                    onChange: this.onDescriptionChange,
                    placeholder: 'Input indicator group description'
                }}
                onSubmit={this.onSubmit}
                onBack={this.onBack}
             />
         );
    }
}

const mapStoreToProps = (store) => {
    const {indicatorPage} = store;
    return {
        editIndicatorGroup: indicatorPage.editEntity.indicatorGroup
    };
}

export default connect(mapStoreToProps)(withStaffixService(IndicatorEditGroupForm));