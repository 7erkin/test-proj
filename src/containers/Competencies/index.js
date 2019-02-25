import React from 'react'

import {
    Switch,
    Route,
    Link,
    Redirect
} from 'react-router-dom'

import mockData from './mock'

import './style.css'

import {
    connect
} from 'react-redux'

import CompetenceGroupInfo from './CompetenceGroupInfo'
import CompetenceEditor from './CompetenceEditor/CompetenceEditor'

import {
    changeCompetence,
    createCompetence,
    createCompetenceGroup,
    deleteCompetence,
    deleteCompetenceGroup,
    saveLoadedCompetenceGroups
} from '../../store/actions/competence'

import AsideCompetenceGroupList from './AsideCompetenceGroupList';
import RemoveCompetenceGroupForm from './RemoveCompetenceGroupForm';
import AddCompetenceGroupForm from './AddCompetenceGroupForm'
import CompetenceGroupDescription from './CompetenceGroupDescription';

const getCompetenceGroupById = (competenceGroups, competenceGroupId) => {
    const index = competenceGroups.findIndex(group => group.id == competenceGroupId);
    console.log(competenceGroups[index], 'sd');
    return competenceGroups[index];
}

class Competence extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            activeCompetenceGroupId: 1
        };
    }

    componentDidMount() {
        this.props.dispatch(saveLoadedCompetenceGroups(mockData))
    }

    onSaveCompetence = () => {}
    onDeleteCompetence = () => {}
    onUpdateCompetence = () => {}

    onSetActiveCompetenceGroup = groupId => this.setState({activeCompetenceGroupId: groupId});

    onCompetenceGroupAdd = (competenceGroupName, competenceGroupDescription) => {
        this.props.dispatch(createCompetenceGroup(competenceGroupName, competenceGroupDescription));
    };

    render() {
        return (
            <div className="horizontal-wrap">
                <h1 className="visually-hidden">Competencies</h1>
                <section className="navigation-competence-group-list vertical-wrap">
                    <h2 className="visually-hidden">Competence group list</h2>
                    <AsideCompetenceGroupList 
                        competenceGroups={this.props.competenceGroups} 
                        activeGroupId={this.state.activeCompetenceGroupId} 
                        onGroupSelect={this.onSetActiveCompetenceGroup}/>
                    <Link to="/competencies/group-editor">Group</Link>
                </section>
                <div className="vertical-wrap">
                    <Switch>
                        <Redirect exact={true} from="/competencies" to={`/competencies/group-info/${1}`}/>
                        <Route path="/competencies/group-info/:groupid" render={props => {  
                            const index = this.props.competenceGroups.findIndex(group => group.id == props.match.params.groupid);
                            return index == -1 ? <div>Err</div> : <CompetenceGroupInfo competenceGroup={this.props.competenceGroups[index]} />
                        }}></Route>
                        <Route path="/competencies/group-editor" render={() => {
                            return (
                                <section class="competence-group-editor">
                                    <h2 class="visually-hidden">Competence group editor</h2>
                                    <Switch>
                                        <Redirect exact={true} from="/competencies/group-editor" to="/competencies/group-editor/remove-group"/>
                                        <Route path="/competencies/group-editor/remove-group" render={() => {
                                            return (
                                                <RemoveCompetenceGroupForm competenceGroups={this.props.competenceGroups} onRemoveGroups={this.onRemoveGroups}/>
                                            );
                                        }} />
                                        <Route path="/competencies/group-editor/add-group" render={() => {
                                            return (
                                                <AddCompetenceGroupForm onCompetenceGroupAdd={this.onCompetenceGroupAdd}/>
                                            );
                                        }}/>
                                    </Switch>
                                </section>
                            );
                        }}></Route>
                        <Route path="/competencies/competence-editor/:id" render={props => {
                            const id = props.match.params.id;

                            return (
                                <CompetenceEditor 
                                    indicatorGroups={this.props.indicatorGroups}
                                    competenceGroups={this.props.competenceGroups}
                                    onSaveCompetence={this.onSaveCompetence} 
                                    onDeleteCompetence={this.onDeleteCompetence}
                                    competenceGroupId={this.state.activeCompetenceGroupId}
                                    competenceId={id}
                                    isNew={isNaN(+id)}/>
                            );
                        }}></Route>
                    </Switch>
                </div>
            </div>
        );
    }
}

const putStateToProps = store => {
    console.log('---store in competence', store);
    return {
        competenceGroups: store.competenceGroups,
        indicatorGroups: store.indicatorGroups
    }
}

export default connect(putStateToProps)(Competence);