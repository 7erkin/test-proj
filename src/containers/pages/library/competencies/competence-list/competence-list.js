import React, { Component } from 'react'
import withEffectApplyingChanges from '../../../../../hoc/with-effect-applying-changes/with-effect-applying-changes';
import withStaffixService from '../../../../../hoc/hoc-services/with-staffix-service';
import { connect } from 'react-redux';
import { startLoadingCompetencies, saveLoadedCompetencies, finishLoadingCompetencies, updateDeletedCompetencies } from '../../../../../action-creators/library-page/competencies';
import { startApplyingChanges, finishApplyingChanges } from '../../../../../action-creators/library-page';

import {
    Link
} from 'react-router-dom'

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

    onCheckCompetence = (id) => {
        this.props.dispatch(updateDeletedCompetencies(id));
    }

    onDeleteCompetencies = () => {
        const { dispatch, staffixService, deletedCompetencies } = this.props;

        dispatch(startApplyingChanges());
        staffixService.deleteCompetencies(deletedCompetencies)
            .then(() => {
                dispatch(finishApplyingChanges());
            })
    }


    //onSearchcompetenceChange = name => this.props.dispatch(updateNameSearchcompetence(name));

    render() {
        const { competencies, loadingCompetencies, competenciesGroups, match: {params: {idGroup}}, deletedCompetencies } = this.props;

        if(loadingCompetencies)
            return <h2>Loading...</h2>

        const description = this._defineDescriptionGroup(idGroup, competenciesGroups);

        return (
            <form onSubmit={this.onDeleteCompetencies}>
                <p>{description}</p>
                <input type="text" />
                <button type="button" onClick={this.onAddCompetenceClick}>Add</button>
                <button type="submit">Delete</button>
                <ul>
                    {
                        competencies.map(({id, name}) => {
                            return (
                                <li key={id}>
                                    <Link to={`/library/competencies-groups/${idGroup}/edit-competence/${id}`}>
                                        {name}
                                    </Link>
                                    <input type="checkbox" checked={deletedCompetencies.indexOf(id) !== -1} onChange={() => this.onCheckCompetence(id)} />
                                </li>
                            );
                        })
                    }
                </ul>
            </form>
        );
    }
}

const mapStoreToProps = ({
    libraryPage: {
        competencies,
        deletedCompetencies,
        loadingCompetencies,
        applyingChanges,
        competenciesGroups
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