import React, { Component } from 'react'
import { connect } from 'react-redux';
import AddForm1Template from '../../../../components/common/template/add-form1-template';
import withStaffixService from '../../../../hoc/with-staffix-service';

import {
    editEntityAcionCreator,
    visibleActionCreator
} from '../../../../action-creators/indicator'

class IndicatorEditFormContainer extends Component {
    constructor(props){
        super(props);
    }

    componentWillUnmount() {
        this.props.dispatch(editEntityAcionCreator.resetEditIndicator());
    }

    onSubmit = () => {
        this.props.staffixService.updateIndicator(this.props.editIndicator)
            .then(() => {
                this.onBack();
            })
    }

    onNameChange = (name) => {
        this.props.dispatch(editEntityAcionCreator.updateEditIndicatorName(name));
    }

    onGroupSelect = (id) => {
        this.props.dispatch(editEntityAcionCreator.editIndicatorGroupIdChange(id));
    }

    onBack = () => {
        this.props.dispatch(visibleActionCreator.setEditIndicatorFormVisible(false));
    }

    render() {
        const {
            editIndicator,
            indicatorGroups
        } = this.props;

        return (
            <AddForm1Template 
                onSubmit={this.onSubmit}
                inputName={{
                    name: editIndicator.name,
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
        indicatorGroups: indicatorPage.entity.indicatorGroups,
        editIndicator: indicatorPage.editEntity.indicator
    };
}

export default connect(mapStoreToProps)(withStaffixService(IndicatorEditFormContainer));