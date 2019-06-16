import React, { Component } from 'react'
import withEffectApplyingChanges from '../../../../../hoc/with-effect-applying-changes/with-effect-applying-changes';
import withStaffixService from '../../../../../hoc/hoc-services/with-staffix-service';
import { connect } from 'react-redux';

import {
    Link
} from 'react-router-dom'

import { updateDeletedCompetenciesGroups, competenciesGroupsDeleted, updateVisibleCompetenciesGroups } from '../../../../../action-creators/library-page/competencies/competencies';
import { startApplyingChanges, finishApplyingChanges, resetInitialLoading } from '../../../../../action-creators/library-page/page-managing';
import DeleteFormView from '../../../../../components/pages/library/delete-form-view';

class CompetenciesGroupList extends Component {
    constructor(props) {
        super(props);
    }

    _isValid = name => {
        return true;
    }

    onDeleteCompetenciesGroupsClick = () => {
        const {dispatch, staffixService, deletedCompetenciesGroups} = this.props;

        dispatch(startApplyingChanges());
        staffixService.deleteCompetenciesGroups(deletedCompetenciesGroups)
            .then(() => {
                dispatch(finishApplyingChanges());
                dispatch(competenciesGroupsDeleted());
                dispatch(resetInitialLoading())
            })
    }

    onCompetenciesGroupCheck = id => {
        this.props.dispatch(updateDeletedCompetenciesGroups(id))
    }

    onAddCompetenciesGroupClick = () => {
        this.props.history.push('/library/competencies-groups/add');
    }

    onSearchChange = pattern => {
        this.props.dispatch(updateVisibleCompetenciesGroups(pattern))
    }

    render() {
        const { competenciesGroups, deletedCompetenciesGroups } = this.props;

        return (
            <DeleteFormView 
                items={competenciesGroups}
                deletedItemIds={deletedCompetenciesGroups}
                renderItemName={(id, name) => {
                    return (
                        <Link to={`/library/competencies-groups/edit/${id}`}>
                            {name}
                        </Link>
                    );
                }}
                onSearchChange={this.onSearchChange}
                onItemCheck={this.onCompetenciesGroupCheck}
                addButton={{
                    label: 'Добавить группу',
                    onClick: this.onAddCompetenciesGroupClick
                }}
                deleteButton={{
                    label: 'Удалить',
                    onClick: this.onDeleteCompetenciesGroupsClick
                }}/>
        );
    }
}

const mapStoreToProps = ({
    libraryPage: {
        competenciesPage: {
            common: {
                visibleCompetenciesGroups: competenciesGroups,
                deletedCompetenciesGroups
            }
        },
        pageManaging: {
            applyingChanges
        }
    }
}) => {
    return {
        competenciesGroups: competenciesGroups.map(({ id, name }) => {return { id, name }}),
        deletedCompetenciesGroups,
        applyingChanges
    };
}

export default connect(mapStoreToProps)(withStaffixService(withEffectApplyingChanges(CompetenciesGroupList)));