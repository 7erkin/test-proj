import React, { Component } from 'react'
import { connect } from 'react-redux';
import AddForm1Template from '../../../../components/common/template/add-form1-template';
import withStaffixService from '../../../../hoc/with-staffix-service';

import {
    visibleActionCreator, 
    newEntityActionCreator, 
    entityActionCreator,

} from '../../../../action-creators/indicator'

class IndicatorAddFormContainer extends Component {
    constructor(props){
        super(props);
    }
    componentDidMount() {
        this.props.dispatch(newEntityActionCreator.updateNewIndicatorGroupId(this.props.activeIndicatorGroupId));
    }
    componentWillUnmount() {
        this.props.dispatch(newEntityActionCreator.resetNewIndicator());
        this.props.dispatch(visibleActionCreator.setAddIndicatorFormVisible(false));
    }

    onSubmit = () => {
        this.props.staffixService.createIndicator(this.props.newIndicator)
            .then(() => this.props.staffixService.getIndicators(this.props.newIndicator.groupId))
            .then((indicators) => {
                this.onBack();
                this.props.dispatch(entityActionCreator.saveIndicators(indicators))
            })
    }

    onNameChange = (name) => {
        this.props.dispatch(newEntityActionCreator.updateNewIndicatorName(name));
    }

    onGroupSelect = (id) => {
        this.props.dispatch(newEntityActionCreator.updateNewIndicatorGroupId(id));
    }

    onBack = () => {
        this.props.dispatch(visibleActionCreator.setAddIndicatorFormVisible(false));
    }

    render() {
        const {
            newIndicator,
            indicatorGroups
        } = this.props;

        return (
            <AddForm1Template 
                onSubmit={this.onSubmit}
                inputName={{
                    name: newIndicator.name,
                    placeholder: 'Input indicator name',
                    onChange: this.onNameChange
                }}
                selectGroup={{
                    groups: indicatorGroups,
                    value: newIndicator.groupId,
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
        newIndicator: indicatorPage.newEntity.indicator
    };
}

export default connect(mapStoreToProps)(withStaffixService(IndicatorAddFormContainer));