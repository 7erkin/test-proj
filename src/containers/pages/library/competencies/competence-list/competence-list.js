import React, { Component } from 'react'
import withEffectApplyingChanges from '../../../../../hoc/with-effect-applying-changes/with-effect-applying-changes';
import withStaffixService from '../../../../../hoc/hoc-services/with-staffix-service';
import { connect } from 'react-redux';
import { saveLoadedCompetencies, updateDeletedCompetencies, updateVisibleCompetencies } from '../../../../../action-creators/library-page/competencies/competencies';
import { startLoadingCompetencies, finishLoadingCompetencies } from '../../../../../action-creators/library-page/competencies/loading';
import { startApplyingChanges, finishApplyingChanges } from '../../../../../action-creators/library-page/page-managing';

import {
    Link
} from 'react-router-dom'
import DeleteFormView from '../../../../../components/pages/library/delete-form-view';
import LoadingIndicator from '../../../../../components/common/loading-indicator/loading-indicator';
import CompetenceTableView from '../../../../../components/pages/library/competencies/competence-table-view';

class CompetenciesList extends Component {
    constructor(props) {
        super(props);
        this._idRequestedGroupCompetencies = NaN;
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

        this._idRequestedGroupCompetencies = id;

        dispatch(startLoadingCompetencies());
        staffixService.getCompetencies(id)
            .then(competencies => {
                console.log(competencies)
                dispatch(saveLoadedCompetencies(competencies));
                dispatch(finishLoadingCompetencies());
            })
    }

    // TODO call every time but it really need only every time after updating idGroup
    componentDidUpdate() {
        const { match, dispatch, staffixService } = this.props;
        const id = match.params.idGroup;

        if(this._idRequestedGroupCompetencies == id)
            return;

        dispatch(startLoadingCompetencies());
        staffixService.getCompetencies(id)
            .then(competencies => {
                this._idRequestedGroupCompetencies = id;
                dispatch(saveLoadedCompetencies(competencies));
                dispatch(finishLoadingCompetencies());
            })
    }

    onAddCompetenceClick = () => {
        const { history, match } = this.props;
        history.push(`${match.url}/add-competence`);
    }

    onCompetenceCheck = (id) => {
        this.props.dispatch(updateDeletedCompetencies(id));
    }

    onDeleteCompetenciesClick = () => {
        const { dispatch, staffixService, deletedCompetencies } = this.props;

        dispatch(startApplyingChanges());
        staffixService.deleteCompetencies(deletedCompetencies)
            .then(() => {
                dispatch(finishApplyingChanges());
            })
    }


    onSearchChange = pattern => this.props.dispatch(updateVisibleCompetencies(pattern));

    render() {
        const { competencies, loadingCompetencies, competenciesGroups, match: {params: {idGroup}}, deletedCompetencies } = this.props;

        if(loadingCompetencies)
            return <LoadingIndicator />

        const description = this._defineDescriptionGroup(idGroup, competenciesGroups);

        return (
            <DeleteFormView 
                description={description}
                onSearchChange={this.onSearchChange}
                hasCheckedItems={!!deletedCompetencies.length}
                searchPlaceholder="Введите имя компетенции..."
                addButton={{
                    label: 'Добавить компетенцию',
                    onClick: this.onAddCompetenceClick
                }}
                deleteButton={{
                    label: 'Удалить',
                    onClick: this.onDeleteCompetenciesClick
                }}>
                    <CompetenceTableView 
                        competencies={competencies}
                        deletedCompeteceIds={deletedCompetencies}
                        onCompetenceCheck={this.onCompetenceCheck}
                        renderName={(id, name) => {
                            return (
                                <Link to={`/library/competencies-groups/${idGroup}/edit-competence/${id}`}>
                                    {name}
                                </Link>
                            );
                        }} />
                </DeleteFormView>
        );
    }
}

const mapStoreToProps = ({
    libraryPage: {
        competenciesPage: {
            common: {
                visibleCompetencies: competencies,
                deletedCompetencies,
                competenciesGroups
            },
            loading: {
                loadingCompetencies
            }
        },
        pageManaging: {
            applyingChanges
        }
    } 
}) => {

    return {
        deletedCompetencies,
        competencies,
        loadingCompetencies,
        applyingChanges,
        competenciesGroups
    };
}

export default connect(mapStoreToProps)(withStaffixService(withEffectApplyingChanges(CompetenciesList)));