import React, { Component } from 'react'
import { connect } from 'react-redux';

import AddForm2Template from '../../../../components/common/template/add-form2-template';
import withStaffixService from '../../../../hoc/with-staffix-service';

import {
    newEntityActionCreator,
    entityActionCreator,
    visibleActionCreator
} from '../../../../action-creators/indicator'

class IndicatorAddGroupForm extends Component {
    constructor(props){
        super(props);
    }

    componentWillUnmount() {
        this.props.dispatch(newEntityActionCreator.resetNewIndicatorGroup());
        this.props.dispatch(visibleActionCreator.setAddIndicatorGroupFormVisible(false));
    }

    onNameChange = name => {
        this.props.dispatch(newEntityActionCreator.updateNewIndicatorGroupName(name));
    }

    onDescriptionChange = description => {
        this.props.dispatch(newEntityActionCreator.updateNewIndicatorGroupDescription(description));
    }

    onSubmit = () => {
        this.props.staffixService.createIndicatorGroup(this.props.newIndicatorGroup)
            .then(() => {
                return this.props.staffixService.getIndicatorGroups()
            })
            .then((indicatorGroups) => {
                this.props.dispatch(entityActionCreator.saveIndicatorGroups(indicatorGroups));
                this.onBack();
            })
    }

    onBack = () => {
        this.props.dispatch(visibleActionCreator.setAddIndicatorGroupFormVisible(false));
    }

    render() {
        const {
            newIndicatorGroup
        } = this.props;

         return (
             <AddForm2Template 
                inputName={{
                    value: newIndicatorGroup.name,
                    onChange: this.onNameChange,
                    placeholder: 'Input indicator group name'
                }}
                inputDescription={{
                    value: newIndicatorGroup.description,
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
        newIndicatorGroup: indicatorPage.newEntity.indicatorGroup
    };
}

export default connect(mapStoreToProps)(withStaffixService(IndicatorAddGroupForm));