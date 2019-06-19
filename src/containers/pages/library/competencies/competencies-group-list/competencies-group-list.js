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
import CompetenciesGroupTableView from '../../../../../components/pages/library/competencies/competencies-group-table-view';

class CompetenciesGroupList extends Component {
    constructor(props) {
        super(props);
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
                searchPlaceholder="Введите название группы..."
                onSearchChange={this.onSearchChange}
                addButton={{
                    label: 'Добавить группу',
                    onClick: this.onAddCompetenciesGroupClick
                }}
                deleteButton={{
                    label: 'Удалить',
                    onClick: this.onDeleteCompetenciesGroupsClick
                }}>
                    <CompetenciesGroupTableView 
                        deletedGroupIds={deletedCompetenciesGroups}
                        groups={competenciesGroups}
                        renderName={(id, name) => {
                            return (
                                <Link to={`/library/competencies-groups/edit/${id}`}>
                                    {name}
                                </Link>
                            );
                        }} 
                        onGroupCheck={this.onCompetenciesGroupCheck} />
                </DeleteFormView>
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