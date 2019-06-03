import React, { Component } from 'react'
import withEffectApplyingChanges from '../../../../../hoc/with-effect-applying-changes/with-effect-applying-changes';
import withStaffixService from '../../../../../hoc/hoc-services/with-staffix-service';
import { connect } from 'react-redux';

import {
    Link
} from 'react-router-dom'

import { updateDeletedQuestionsGroups, questionsGroupsDeleted } from '../../../../../action-creators/library-page/questions';
import { startApplyingChanges, finishApplyingChanges } from '../../../../../action-creators/library-page';

class QuestionsGroupList extends Component {
    constructor(props) {
        super(props);
    }

    onSubmit = () => {
        const {dispatch, staffixService, deletedQuestionsGroups} = this.props;

        dispatch(startApplyingChanges());
        staffixService.deleteQuestionsGroups(deletedQuestionsGroups)
            .then(() => {
                dispatch(questionsGroupsDeleted());
                dispatch(finishApplyingChanges());
            })
    }

    onQuestionsGroupClick = id => {
        this.props.dispatch(updateDeletedQuestionsGroups(id))
    }

    onAddQuestionsGroupClick = () => {
        this.props.history.push('/library/questions-groups/add');
    }

    render() {
        const { questionsGroups, deletedQuestionsGroups } = this.props;

        return (
            <form onSubmit={evt => {
                evt.preventDefault();
                this.onSubmit();
            }}>
                <input type="text" />
                <button type="button" onClick={this.onAddQuestionsGroupClick}>Add</button>
                <button type="submit">Delete</button>
                <ul>
                {
                    questionsGroups.map(({id, name}) => {
                        return (
                            <li key={id}>
                                <Link to={`/library/questions-groups/edit/${id}`}>{name}</Link>
                                <input type="checkbox" checked={deletedQuestionsGroups.findIndex(el => el == id) !== -1} onChange={() => this.onQuestionsGroupClick(id)}/>
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
        questionsGroups,
        deletedQuestionsGroups,
        applyingChanges
    }
}) => {
    return {
        questionsGroups: questionsGroups.map(({ id, name }) => {return { id, name }}),
        deletedQuestionsGroups,
        applyingChanges
    };
}

export default connect(mapStoreToProps)(withStaffixService(withEffectApplyingChanges(QuestionsGroupList)));