import React, { Component } from 'react'
import { connect } from 'react-redux';
import EditForm1Template from '../../../../components/common/template/edit-form1-template/edit-form1-template';
import { Link } from 'react-router-dom';
import IndicatorAddGroupFormContainer from '../indicator-add-group-form-container';
import IndicatorEditGroupFormContainer from '../indicator-edit-group-form-container';
import Spinner from '../../../../components/spinner';
import withStaffixService from '../../../../hoc/with-staffix-service';

import {
    loadingActionCreator,
    entityActionCreator,
    visibleActionCreator,
    pointedEntityActionCreator,
    editEntityAcionCreator
} from '../../../../action-creators/indicator'

class IndicatorGroupListContainer extends Component {
    constructor(props) {
        super(props);
    }

    onSubmit = () => {
        this.props.dispatch(loadingActionCreator.setLoadingIndicatorGroups(true));
        this.props.staffixService.deleteIndicatorGroups(this.props.pointedIndicatorGroupsForDelete)
            .then(() => {
                return this.props.staffixService.getIndicatorGroups()
            })
            .then((indicatorGroups) => {
                this.props.dispatch(entityActionCreator.saveIndicatorGroups(indicatorGroups));
                this.props.dispatch(loadingActionCreator.setLoadingIndicatorGroups(false));
            })
    }

    onIndicatorGroupSearch = (name) => {
        
    }

    onAddIndicatorGroupClick = () => {
        this.props.dispatch(visibleActionCreator.setAddIndicatorGroupFormVisible(true));
    }

    onEditIndicatorGroupClick = (id) => {
        this.props.dispatch(entityActionCreator.setActiveIndicatorGroupId(id));
        this.props.dispatch(editEntityAcionCreator.setEditIndicatorGroup(this.props.indicatorGroups, id));
        this.props.dispatch(visibleActionCreator.setEditIndicatorGroupFormVisible(true));
    }

    onChecked = (id) => {
        this.props.dispatch(pointedEntityActionCreator.updatePointedIndicatorGroupsForDelete(id));
    }

    render() {
        const {
            loading,
            visible,
            indicatorGroups,
            pointedIndicatorGroupsForDelete
        } = this.props;

        if(loading.indicatorGroups)
            return <Spinner />

        if(visible.addIndicatorGroupForm)
            return <IndicatorAddGroupFormContainer />

        if(visible.editIndicatorGroupForm)
            return <IndicatorEditGroupFormContainer />

        return (
            <EditForm1Template 
                onSubmit={this.onSubmit}
                search={{
                    value: '',
                    onChange: this.onIndicatorGroupSearch
                }}
                description='Some unknown description'
                addEntityButton={{
                    name: 'Add group',
                    onClick: this.onAddIndicatorGroupClick
                }}
                deleteButtonName='Delete pointed groups'
                entities={indicatorGroups}
                rednerEntity={(group) => {
                    return (
                        <li key={group.id}>
                            <Link to="#" onClick={evt => {
                                evt.preventDefault();
                                this.onEditIndicatorGroupClick(group.id);
                            }}>
                                {group.name}
                            </Link>
                            <input type="checkbox" checked={pointedIndicatorGroupsForDelete.includes(group.id)} onChange={(evt) => this.onChecked(group.id)}/>
                        </li>
                    );}
                }/>
        );
    }
}

const mapStoreToProps = (store) => {
    const indicatorPage = store.indicatorPage;
    return {
        loading: indicatorPage.loading,
        visible: indicatorPage.visible,
        indicatorGroups: indicatorPage.entity.indicatorGroups,
        pointedIndicatorGroupsForDelete: indicatorPage.pointedEntity.indicatorGroupsForDelete
    };
}

export default connect(mapStoreToProps)(withStaffixService(IndicatorGroupListContainer));