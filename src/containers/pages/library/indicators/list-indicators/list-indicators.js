import React, { Component } from 'react'
import withEffectApplyingChanges from '../../../../../hoc/with-effect-applying-changes/with-effect-applying-changes';
import withStaffixService from '../../../../../hoc/hoc-services/with-staffix-service';
import { connect } from 'react-redux';
import { startLoadingIndicators, saveLoadedIndicators, finishLoadingIndicators, updateDeletedIndicators } from '../../../../../action-creators/library-page/indicators';
import { startApplyingChanges, finishApplyingChanges } from '../../../../../action-creators/library-page';

import {
    Link
} from 'react-router-dom'

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

    onCheckIndicator = (id) => {
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


    //onSearchIndicatorChange = name => this.props.dispatch(updateNameSearchIndicator(name));

    render() {
        const { indicators, loadingIndicators, indicatorsGroups, match: {params: {idGroup}}, deletedIndicators } = this.props;

        if(loadingIndicators)
            return <h2>Loading...</h2>

        const description = this._defineDescriptionGroup(idGroup, indicatorsGroups);

        return (
            <form onSubmit={this.onDeleteIndicators}>
                <p>{description}</p>
                <input type="text" />
                <button type="button" onClick={this.onAddIndicatorClick}>Add</button>
                <button type="submit">Delete</button>
                <ul>
                    {
                        indicators.map(({id, name}) => {
                            return (
                                <li key={id}>
                                    <Link to={`/library/indicators-groups/${idGroup}/edit-indicator/${id}`}>
                                        {name}
                                    </Link>
                                    <input type="checkbox" checked={deletedIndicators.indexOf(id) !== -1} onChange={() => this.onCheckIndicator(id)} />
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
        indicators,
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