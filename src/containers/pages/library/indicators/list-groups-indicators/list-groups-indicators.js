import React, { Component } from 'react'
import withEffectApplyingChanges from '../../../../../hoc/with-effect-applying-changes/with-effect-applying-changes';
import withStaffixService from '../../../../../hoc/hoc-services/with-staffix-service';
import { connect } from 'react-redux';

import {
    Link
} from 'react-router-dom'
import { updateDeletedIndicatorsGroups, indicatorsGroupsDeleted } from '../../../../../action-creators/library-page/indicators';
import { startApplyingChanges, finishApplyingChanges } from '../../../../../action-creators/library-page';

class ListGroupsIndicators extends Component {
    constructor(props) {
        super(props);
    }

    _isValid = name => {
        return true;
    }

    onSubmit = () => {
        const {dispatch, staffixService, deletedIndicatorsGroups} = this.props;

        dispatch(startApplyingChanges());
        staffixService.deleteIndicatorsGroups(deletedIndicatorsGroups)
            .then(() => {
                dispatch(finishApplyingChanges());
                dispatch(indicatorsGroupsDeleted());
            })
    }

    onIndicatorsGroupCheck = id => {
        this.props.dispatch(updateDeletedIndicatorsGroups(id))
    }

    onAddIndicatorsGroupClick = () => {
        this.props.history.push('/library/indicators-groups/add');
    }

    render() {
        const { indicatorsGroups, deletedIndicatorsGroups } = this.props;

        return (
            <form onSubmit={evt => {
                evt.preventDefault();
                this.onSubmit();
            }}>
                <input type="text" />
                <button type="button" onClick={this.onAddIndicatorsGroupClick}>Add</button>
                <button type="submit">Delete</button>
                <ul>
                {
                    indicatorsGroups.map(({id, name}) => {
                        return (
                            <li key={id}>
                                <Link to={`/library/indicators-groups/edit/${id}`}>{name}</Link>
                                <input type="checkbox" checked={deletedIndicatorsGroups.findIndex(el => el == id) !== -1} onChange={() => this.onIndicatorsGroupCheck(id)}/>
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
        indicatorsGroups,
        deletedIndicatorsGroups,
        applyingChanges
    }
}) => {
    return {
        indicatorsGroups: indicatorsGroups.map(({ id, name }) => {return { id, name }}),
        deletedIndicatorsGroups,
        applyingChanges
    };
}

export default connect(mapStoreToProps)(withStaffixService(withEffectApplyingChanges(ListGroupsIndicators)));