import React, { Component } from 'react'
import withEffectApplyingChanges from '../../../../../hoc/with-effect-applying-changes/with-effect-applying-changes';
import withStaffixService from '../../../../../hoc/hoc-services/with-staffix-service';
import { connect } from 'react-redux';

import {
    Link
} from 'react-router-dom'
import { updateDeletedIndicatorsGroups, indicatorsGroupsDeleted, updateVisibleIndicatorsGroups } from '../../../../../action-creators/library-page/indicators/indicators';
import { startApplyingChanges, finishApplyingChanges, resetInitialLoading } from '../../../../../action-creators/library-page/page-managing';
import DeleteFormView from '../../../../../components/pages/library/delete-form-view';

class ListGroupsIndicators extends Component {
    constructor(props) {
        super(props);
    }

    _isValid = name => {
        return true;
    }

    onIndicatorsGroupsDeleteClick = () => {
        const {dispatch, staffixService, deletedIndicatorsGroups} = this.props;

        dispatch(startApplyingChanges());
        staffixService.deleteIndicatorsGroups(deletedIndicatorsGroups)
            .then(() => {
                dispatch(finishApplyingChanges());
                dispatch(indicatorsGroupsDeleted());
                dispatch(resetInitialLoading())
            })
    }

    onIndicatorsGroupCheck = id => {
        this.props.dispatch(updateDeletedIndicatorsGroups(id))
    }

    onAddIndicatorsGroupClick = () => {
        this.props.history.push('/library/indicators-groups/add');
    }

    onSearchChange = pattern => {
        this.props.dispatch(updateVisibleIndicatorsGroups(pattern))
    }

    render() {
        const { indicatorsGroups, deletedIndicatorsGroups } = this.props;

        return (
            <DeleteFormView 
                items={indicatorsGroups}
                deletedItemIds={deletedIndicatorsGroups}
                renderItemName={(itemId, name) => {
                    return <Link to={`/library/indicators-groups/edit/${itemId}`}>{name}</Link>
                }}
                onSearchChange={this.onSearchChange}
                onItemCheck={this.onIndicatorsGroupCheck}
                addButton={{
                    label: 'Добавить группу',
                    onClick: this.onAddIndicatorsGroupClick
                }}
                deleteButton={{
                    label: 'Удалить',
                    onClick: this.onIndicatorsGroupsDeleteClick
                }}
            />
        );
    }
}

const mapStoreToProps = ({
    libraryPage: {
        indicatorsPage: {
            common: {
                indicatorsGroups,
                deletedIndicatorsGroups
            }
        },
        pageManaging: {
            applyingChanges
        }
    }
}) => {
    return {
        indicatorsGroups: indicatorsGroups.map(({ id, name }) => {return { id, name }}),
        deletedIndicatorsGroups,
        applyingChanges
    };
}

export default connect(mapStoreToProps)(withStaffixService(withEffectApplyingChanges(ListGroupsIndicators)));