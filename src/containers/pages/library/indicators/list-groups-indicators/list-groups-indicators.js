import React, { Component } from 'react'
import withEffectApplyingChanges from '../../../../../hoc/with-effect-applying-changes/with-effect-applying-changes';
import withStaffixService from '../../../../../hoc/hoc-services/with-staffix-service';
import { connect } from 'react-redux';

import {
    Link
} from 'react-router-dom'

class ListGroupsIndicators extends Component {
    constructor(props) {
        super(props);
    }

    _isValid = name => {
        return true;
    }

    onSubmit = () => {}

    onIndicatorsGroupCheck = id => {}

    onAddIndicatorsGroupClick = () => {
        this.props.history.push('/library/indicators-groups/add');
    }

    onDeleteIndicatorsGroupsClick = () => {}

    render() {
        const { indicatorsGroups, deletedIndicatorsGroups } = this.props;

        return (
            <form onSubmit={this.onSubmit}>
                <input type="text" />
                <button type="button" onClick={this.onAddIndicatorsGroupClick}>Add</button>
                <button type="submit">Delete</button>
                <ul>
                {
                    indicatorsGroups.map(({id, name}) => {
                        return (
                            <li key={id}>
                                <Link to={`/library/indicators-groups/edit/${id}`}>{name}</Link>
                                <input type="checkbox" onChange={() => this.onIndicatorsGroupCheck(id)}/>
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
        deletedIndicatorsGroups
    }
}) => {
    return {
        indicatorsGroups: indicatorsGroups.map(({ id, name }) => {return { id, name }}),
        deletedIndicatorsGroups
    };
}

export default connect(mapStoreToProps)(withStaffixService(withEffectApplyingChanges(ListGroupsIndicators)));