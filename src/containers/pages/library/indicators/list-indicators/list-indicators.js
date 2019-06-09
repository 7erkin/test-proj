import React, { Component } from 'react'
import withEffectApplyingChanges from '../../../../../hoc/with-effect-applying-changes/with-effect-applying-changes';
import withStaffixService from '../../../../../hoc/hoc-services/with-staffix-service';
import { connect } from 'react-redux';
import { startLoadingIndicators, saveLoadedIndicators, finishLoadingIndicators, updateDeletedIndicators, updateVisibleIndicators } from '../../../../../action-creators/library-page/indicators';
import { startApplyingChanges, finishApplyingChanges } from '../../../../../action-creators/library-page';

import {
    Link
} from 'react-router-dom'
import DeleteFormView from '../../../../../components/pages/library/delete-form-view';
import LoadingIndicator from '../../../../../components/common/loading-indicator/loading-indicator';


// TODO: should reset store becaues deletedIndicatorsIds is remains after deleting
class ListIndicators extends Component {
    constructor(props) {
        super(props);
        this._idRequestedGroupIndicators = NaN;
    }

    _isValid = name => {
        return true;
    }

    _defineDescriptionGroup = (idGroup, groups) => {
        const index = groups.findIndex(el => el.id == idGroup);
        return groups[index].description;
    }

    componentDidMount() {
        const { match, dispatch, staffixService } = this.props;
        const id = match.params.idGroup;

        this._idRequestedGroupIndicators = id;

        dispatch(startLoadingIndicators());
        staffixService.getIndicators(id)
            .then(indicators => {
                dispatch(saveLoadedIndicators(indicators));
                dispatch(finishLoadingIndicators());
            })
    }

    // TODO call every time but it really need only every time after updating idGroup
    componentDidUpdate() {
        const { match, dispatch, staffixService } = this.props;
        const id = match.params.idGroup;

        if(this._idRequestedGroupIndicators == id)
            return;

        dispatch(startLoadingIndicators());
        staffixService.getIndicators(id)
            .then(indicators => {
                console.log(indicators)
                this._idRequestedGroupIndicators = id;
                dispatch(saveLoadedIndicators(indicators));
                dispatch(finishLoadingIndicators());
            })
    }

    onAddIndicatorClick = () => {
        const { history, match } = this.props;
        history.push(`${match.url}/add-indicator`);
    }

    onIndicatorCheck = (id) => {
        this.props.dispatch(updateDeletedIndicators(id));
    }

    onDeleteIndicators = () => {
        const { dispatch, staffixService, deletedIndicators } = this.props;

        dispatch(startApplyingChanges());
        staffixService.deleteIndicators(deletedIndicators)
            .then(() => {
                dispatch(finishApplyingChanges());
            })
    }

    onSearchChange = pattern => {
        this.props.dispatch(updateVisibleIndicators(pattern))
    }

    //onSearchIndicatorChange = name => this.props.dispatch(updateNameSearchIndicator(name));

    render() {
        const { indicators, loadingIndicators, indicatorsGroups, match: {params: {idGroup}}, deletedIndicators } = this.props;

        if(loadingIndicators)
            return <LoadingIndicator />

        const description = this._defineDescriptionGroup(idGroup, indicatorsGroups);

        const renderItemName = (itemId, name) => {
            return (
                <Link to={`/library/indicators-groups/${idGroup}/edit-indicator/${itemId}`}>
                    {name}
                </Link>
            );
        }

        return (
            <DeleteFormView 
                renderItemName={renderItemName}
                description={description}
                items={indicators}
                deletedItemIds={deletedIndicators}
                onSearchChange={this.onSearchChange}
                onItemCheck={this.onIndicatorCheck}
                addButton={{
                    label: 'Добавить индикатор',
                    onClick: this.onAddIndicatorClick
                }}
                deleteButton={{
                    label: 'Удалить',
                    onClick: this.onDeleteIndicators
                }}
            />
        );
    }
}

const mapStoreToProps = ({
    libraryPage: {
        visibleIndicators: indicators,
        deletedIndicators,
        loadingIndicators,
        applyingChanges,
        indicatorsGroups
    }
}) => {

    return {
        deletedIndicators,
        indicators,
        loadingIndicators,
        applyingChanges,
        indicatorsGroups
    };
}

export default connect(mapStoreToProps)(withStaffixService(withEffectApplyingChanges(ListIndicators)));