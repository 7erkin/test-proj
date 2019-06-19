import React, { Component } from 'react'
import withEffectApplyingChanges from '../../../../../hoc/with-effect-applying-changes/with-effect-applying-changes';
import withStaffixService from '../../../../../hoc/hoc-services/with-staffix-service';
import { connect } from 'react-redux';

import {  
    startLoadingContent, 
    finishLoadingContent 
} from '../../../../../action-creators/library-page/questions/loading';

import {  
    saveLoadedContent, updateVisibleContent
} from '../../../../../action-creators/library-page/questions/questions';

import LoadingIndicator from '../../../../../components/common/loading-indicator/loading-indicator';

import QuestionsAffiliationView from '../../../../../components/pages/library/questions/questions-affiliation-view';

class QuestionsAffiliation extends Component {
    constructor(props) {
        super(props);
        this._idRequestedQuestionsGroup = NaN;
    }

    _defineDescriptionGroup = (idGroup, groups) => {
        const index = groups.findIndex(el => el.id == idGroup);
        return groups[index].description;
    }

    componentDidMount() {
        const { match, dispatch, staffixService } = this.props;
        const id = match.params.idCompetenciesGroup;

        this._idRequestedQuestionsGroup = id;

        dispatch(startLoadingContent());
        staffixService.getQuestionsGroupContent(id)
            .then(content => {
                dispatch(saveLoadedContent(content));
                dispatch(finishLoadingContent());
            })
    }

    // TODO call every time but it really need only every time after updating idGroup
    componentDidUpdate() {
        const { match, dispatch, staffixService } = this.props;
        const id = match.params.idCompetenciesGroup;

        if(this._idRequestedQuestionsGroup == id)
            return;

        dispatch(startLoadingContent());
        staffixService.getQuestionsGroupContent(id)
            .then(content => {
                this._idRequestedQuestionsGroup = id;
                dispatch(saveLoadedContent(content));
                dispatch(finishLoadingContent());
            })
    }

    onRowClick = (competenceId) => {
        const { history, match: {url} } = this.props;
        history.push(`${url}/questions/${competenceId}`)
    }

    onSearchContent = competenceName => {
        this.props.dispatch(updateVisibleContent(competenceName))
    }

    render() {
        const { content, loadingContent, competenciesGroups, match: {params: {idCompetenciesGroup}} } = this.props;

        if(loadingContent)
            return <LoadingIndicator />

        const description = this._defineDescriptionGroup(idCompetenciesGroup, competenciesGroups);

        return (
            <QuestionsAffiliationView 
                competenciesGroupId={idCompetenciesGroup}
                competenceGroupDescription={description}
                onSearchContent={this.onSearchContent}
                content={content} />
        );
    }
}

const mapStoreToProps = ({
    libraryPage: {
        competenciesPage: {
            common: {
                competenciesGroups
            }
        },
        questionsPage: {
            common: {
                visibleContent: content
            },
            loading: {
                loadingContent
            }
        },
        pageManaging: {
            applyingChanges
        }
    }
}) => {

    return {
        content,
        loadingContent,
        applyingChanges,
        competenciesGroups
    };
}

export default connect(mapStoreToProps)(withStaffixService(withEffectApplyingChanges(QuestionsAffiliation)));