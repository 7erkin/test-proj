import React, { Component } from 'react'
import { connect } from 'react-redux';
import withStaffixService from '../../../../hoc/with-staffix-service';
import CompetenceForm from '../../../../components/pages/competencies/competence-form';
import Spinner from '../../../../components/spinner';
import { loadingActionCreator, entityActionCreator, visibleActionCreator, editEntityActionCreator } from '../../../../action-creators/competence';

const mergeIndicators = (loadedIndicators, checkedIndicators) => {
    return [
        ...loadedIndicators.filter(el1 => !checkedIndicators.some(el2 => el2.id == el1.id)), 
        ...checkedIndicators
    ];
}

class CompetenceEditFormContainer extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount() {
        const {competencies, editCompetenceId, activeCompetenceGroupId, dispatch, staffixService} = this.props;

        // fill edit competence field with empty indicators. Indicators will be filled when the promise below is resolved
        dispatch(editEntityActionCreator.setEditCompetence(competencies, editCompetenceId, [], activeCompetenceGroupId));
        dispatch(loadingActionCreator.startLoadingIndicatorGroups());

        const getCompetenceIndicatorsPr = staffixService.getCompetenceIndicators(activeCompetenceGroupId, editCompetenceId);
        
        const getIndicatorGroupsPr = staffixService.getIndicatorGroups()

        Promise.all([getCompetenceIndicatorsPr, getIndicatorGroupsPr])
            .then((values) => {
                dispatch(editEntityActionCreator.setEditCompetence(competencies, editCompetenceId, values[0], activeCompetenceGroupId));
                dispatch(entityActionCreator.saveIndicatorGroups(values[1]));
                dispatch(loadingActionCreator.indicatorGroupsLoaded());
            })
    }

    componentWillUnmount() {
        this.props.dispatch(visibleActionCreator.setEditCompetenceFormVisible(false));
    }

    onCompetenceNameChange = name => {
        this.props.dispatch(editEntityActionCreator.updateEditCompetenceName(name));
    }

    onCompetenceDescriptionChange = description => {
        this.props.dispatch(editEntityActionCreator.updateEditCompetenceDescription(description));
    }

    onCompetenceGroupChange = id => {
        this.props.dispatch(editEntityActionCreator.updateEditCompetenceGroupId(id));
    }

    onIndicatorInfluenceChange = (id, influence) => {
        this.props.dispatch(editEntityActionCreator.updateEditCompetenceIndicatorInfluence(id, influence));
    }

    onIndicatorChecked = (id, name, groupId) => {
        this.props.dispatch(editEntityActionCreator.updateEditCompetenceIndicators(id, name, groupId));
    }

    onIndicatorGroupClicked = id => {
        this.props.dispatch(entityActionCreator.setActiveIndicatorGroupId(id));
        this.props.dispatch(loadingActionCreator.startLoadingIndicators());
        this.props.staffixService.getIndicators(id)
            .then(indicators => {
                this.props.dispatch(entityActionCreator.saveIndicators(indicators));
                this.props.dispatch(loadingActionCreator.indicatorsLoaded());
            })
    }

    onSubmit = () => {
        this.props.dispatch(editEntityActionCreator.resetEditCompetence());
        this.props.dispatch(loadingActionCreator.startLoadingCompetencies());
        this.props.staffixService.updateCompetence(this.props.editCompetence)
            .then(() => this.props.staffixService.getCompetencies(this.props.activeCompetenceGroupId))
            .then(competencies => {
                this.props.dispatch(entityActionCreator.saveCompetencies(competencies));
                this.props.dispatch(loadingActionCreator.competenciesLoaded());
                this.props.dispatch(visibleActionCreator.setEditCompetenceFormVisible(false));
            })
    }

    render() {
        const {
            competenceGroups,
            activeIndicatorGroupId,
            indicators,
            indicatorGroups,
            editCompetence: competence,
            loading
        } = this.props;

        return (
            <CompetenceForm 
                onSubmit={this.onSubmit}
                inputName={{
                    value: competence.name,
                    onChange: this.onCompetenceNameChange,
                    placeholder: 'Input competence name'
                }}
                inputDescription={{
                    value: competence.description,
                    onChange: this.onCompetenceDescriptionChange,
                    placeholder: 'Input competence description'
                }}
                selectGroup={{
                    value: competence.groupId,
                    onChange: this.onCompetenceGroupChange,
                    competenceGroups 
                }}
                Spinner={Spinner}
                isIndicatorGroupsLoading={loading.indicatorGroups}
                accordeon={{
                    groups: indicatorGroups.map(el => {
                        const checkedIndicators = competence.indicators.filter(el2 => el2.groupId == el.id);
                        return {
                            id: el.id,
                            name: el.name,
                            items: activeIndicatorGroupId == el.id ? mergeIndicators(indicators, checkedIndicators) : checkedIndicators
                        }
                    }),
                    onPanelClick: this.onIndicatorGroupClicked,
                    renderItems: (items, groupId) => {
                        if(groupId == activeIndicatorGroupId && loading.indicators) return <Spinner />;
                        return items.map(item => {
                            const isChecked = competence.indicators.some(el => el.id == item.id);
                            return (
                                <li key={item.id}>
                                    {item.name}
                                    {isChecked ? 
                                        <select value={item.influence} onChange={evt => this.onIndicatorInfluenceChange(item.id, evt.target.value)}>
                                            <option value="Positive">Positive</option>
                                            <option value="Negative">Negative</option>
                                        </select>
                                        : null
                                    }
                                    <input type="checkbox" onChange={evt => this.onIndicatorChecked(item.id, item.name, groupId)} checked={isChecked} />
                                </li>
                            );
                        });
                    }
                }}/>
        );
    }
}

const mapStoreToProps = (store) => {
    const {competencePage} = store;
    return {
        competencies: competencePage.entity.competencies,
        editCompetenceId: competencePage.entity.editCompetenceId,
        activeCompetenceGroupId: competencePage.entity.activeCompetenceGroupId,
        competenceGroups: competencePage.entity.competenceGroups,
        indicatorGroups: competencePage.entity.indicatorGroups,
        indicators: competencePage.entity.indicators,
        activeIndicatorGroupId: competencePage.entity.activeIndicatorGroupId,
        editCompetence: competencePage.editEntity.competence,
        loading: competencePage.loading
    };
}

export default connect(mapStoreToProps)(withStaffixService(CompetenceEditFormContainer));