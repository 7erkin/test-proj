import React, { Component } from 'react'
import { connect } from 'react-redux';
import AddForm1Template from '../../../../components/common/template/add-form1-template';
import withStaffixService from '../../../../hoc/with-staffix-service';

import {
    editEntityAcionCreator,
    visibleActionCreator,
    loadingActionCreator,
    entityActionCreator
} from '../../../../action-creators/indicator'

class IndicatorEditFormContainer extends Component {
    constructor(props){
        super(props);
    }

    componentWillUnmount() {
        this.props.dispatch(editEntityAcionCreator.resetEditIndicator());
        this.props.dispatch(visibleActionCreator.setEditIndicatorFormVisible(false));
    }

    onSubmit = () => {
        if(!window.confirm('Save changes?')) return;
        this.onBack();
        this.props.dispatch(loadingActionCreator.setLoadingIndicators(true));
        this.props.staffixService.updateIndicator(this.props.editIndicator)
            .then(() => {
                return this.props.staffixService.getIndicators(this.props.activeIndicatorGroupId);
            })
            .then(indicators => {
                this.props.dispatch(entityActionCreator.saveIndicators(indicators));
                this.props.dispatch(loadingActionCreator.setLoadingIndicators(false));
            })
    }

    onNameChange = (name) => {
        this.props.dispatch(editEntityAcionCreator.updateEditIndicatorName(name));
    }

    onGroupSelect = (id) => {
        this.props.dispatch(editEntityAcionCreator.updateEditIndicatorGroupId(id));
    }

    onBack = () => {
        this.props.dispatch(visibleActionCreator.setEditIndicatorFormVisible(false));
    }

    render() {
        const {
            editIndicator,
            indicatorGroups
        } = this.props;

        console.log(editIndicator);
        return (
            <AddForm1Template 
                onSubmit={this.onSubmit}
                inputName={{
                    value: editIndicator.name,
                    placeholder: 'Input indicator name',
                    onChange: this.onNameChange
                }}
                selectGroup={{
                    groups: indicatorGroups,
                    value: editIndicator.groupId,
                    onChange: this.onGroupSelect
                }}
                onBack={this.onBack}
                />
        );
    }
}

const mapStoreToProps = (store) => {
    const {indicatorPage} = store;
    return {
        activeIndicatorGroupId: indicatorPage.entity.activeIndicatorGroupId,
        indicatorGroups: indicatorPage.entity.indicatorGroups,
        editIndicator: indicatorPage.editEntity.indicator
    };
}

export default connect(mapStoreToProps)(withStaffixService(IndicatorEditFormContainer));