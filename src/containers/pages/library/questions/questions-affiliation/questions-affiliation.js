import React, { Component } from 'react'
import withEffectApplyingChanges from '../../../../../hoc/with-effect-applying-changes/with-effect-applying-changes';
import withStaffixService from '../../../../../hoc/hoc-services/with-staffix-service';
import { connect } from 'react-redux';

import { 
    saveLoadedQuestionsGroupContent, 
    startLoadingQuestionsGroupContent, 
    finishLoadingQuestionsGroupContent 
} from '../../../../../action-creators/library-page/questions';

import LoadingIndicator from '../../../../../components/common/loading-indicator/loading-indicator';

import QuestionsAffiliationView from '../../../../../components/pages/library/questions/questions-affiliation-view';

class QuestionsAffiliation extends Component {
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
        const id = match.params.idCompetenciesGroup;

        this._idRequestedQuestionsGroup = id;

        dispatch(startLoadingQuestionsGroupContent());
        staffixService.getQuestionsGroupContent(id)
            .then(content => {
                dispatch(saveLoadedQuestionsGroupContent(content));
                dispatch(finishLoadingQuestionsGroupContent());
            })
    }

    // TODO call every time but it really need only every time after updating idGroup
    componentDidUpdate() {
        const { match, dispatch, staffixService } = this.props;
        const id = match.params.idCompetenciesGroup;

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

    onRowClick = (competenceId) => {
        const { history, match: {url} } = this.props;
        history.push(`${url}/questions/${competenceId}`)
    }

    //onSearchIndicatorChange = name => this.props.dispatch(updateNameSearchIndicator(name));

    render() {
        const { questionsGroupContent, loadingQuestionsGroupContent, competenciesGroups, match: {params: {idCompetenciesGroup}} } = this.props;

        if(loadingQuestionsGroupContent)
            return <LoadingIndicator />

        const description = this._defineDescriptionGroup(idCompetenciesGroup, competenciesGroups);

        return (
            <QuestionsAffiliationView 
                competenciesGroupId={idCompetenciesGroup}
                competenceGroupDescription={description}
                questionsGroupContent={questionsGroupContent}
                onAddQuestionClick={this.onAddQuestionClick}
                onRowClick={this.onRowClick} />
        );
    }
}

const mapStoreToProps = ({
    libraryPage: {
        questionsGroupContent,
        loadingQuestionsGroupContent,
        applyingChanges,
        competenciesGroups
    }
}) => {

    return {
        questionsGroupContent,
        loadingQuestionsGroupContent,
        applyingChanges,
        competenciesGroups
    };
}

export default connect(mapStoreToProps)(withStaffixService(withEffectApplyingChanges(QuestionsAffiliation)));