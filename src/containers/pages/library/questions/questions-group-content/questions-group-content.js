import React, { Component } from 'react'
import withEffectApplyingChanges from '../../../../../hoc/with-effect-applying-changes/with-effect-applying-changes';
import withStaffixService from '../../../../../hoc/hoc-services/with-staffix-service';
import { connect } from 'react-redux';
import { startApplyingChanges, finishApplyingChanges } from '../../../../../action-creators/library-page';

import {
    Link
} from 'react-router-dom'
import { saveLoadedQuestionsGroupContent, startLoadingQuestionsGroupContent, finishLoadingQuestionsGroupContent } from '../../../../../action-creators/library-page/questions';

class QuestionsGroupContent extends Component {
    constructor(props) {
        super(props);
        this._idRequestedQuestionsGroup = NaN;
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

        this._idRequestedQuestionsGroup = id;

        dispatch(startLoadingQuestionsGroupContent());
        staffixService.getQuestionsGroupContent(id)
            .then(content => {
                console.log('content ', content)
                dispatch(saveLoadedQuestionsGroupContent(content));
                dispatch(finishLoadingQuestionsGroupContent());
            })
    }

    // TODO call every time but it really need only every time after updating idGroup
    componentDidUpdate() {
        const { match, dispatch, staffixService } = this.props;
        const id = match.params.idGroup;

        if(this._idRequestedQuestionsGroup == id)
            return;

        dispatch(startLoadingQuestionsGroupContent());
        staffixService.getQuestionsGroupContent(id)
            .then(content => {
                console.log('content ', content)
                this._idRequestedQuestionsGroup = id;
                dispatch(saveLoadedQuestionsGroupContent(content));
                dispatch(finishLoadingQuestionsGroupContent());
            })
    }

    onAddQuestionClick = () => {
        const { history, match } = this.props;
        history.push(`${match.url}/add-question`);
    }

    //onSearchIndicatorChange = name => this.props.dispatch(updateNameSearchIndicator(name));

    render() {
        const { questionsGroupContent, loadingQuestionsGroupContent, questionsGroups, match: {params: {idGroup}}, match: {url} } = this.props;

        if(loadingQuestionsGroupContent)
            return <h2>Loading...</h2>

        const description = this._defineDescriptionGroup(idGroup, questionsGroups);

        return (
            <section>
                <p>{description}</p>
                <input type="text" />
                <button type="button" onClick={this.onAddQuestionClick}>Add</button>
                <ul>
                    {
                        questionsGroupContent.map((el, index) => {
                            return (
                                <li key={index}>
                                    {'Competence name: '}
                                    {el.competenceName} {' ===== '}
                                    {'Competence description: '}
                                    {el.competenceDescription} {' ===== '}
                                    {'Quantity questions: '}
                                    <Link to={`${url}/questions/${el.idCompetence}`}>{el.questions}</Link>
                                </li>
                            );
                        })
                    }
                </ul>
            </section>
        );
    }
}

const mapStoreToProps = ({
    libraryPage: {
        questionsGroupContent,
        loadingQuestionsGroupContent,
        applyingChanges,
        questionsGroups
    }
}) => {

    return {
        questionsGroupContent,
        loadingQuestionsGroupContent,
        applyingChanges,
        questionsGroups
    };
}

export default connect(mapStoreToProps)(withStaffixService(withEffectApplyingChanges(QuestionsGroupContent)));