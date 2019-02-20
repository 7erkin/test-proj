import React from 'react'

import {
    Switch,
    Route,
    Redirect
} from 'react-router-dom'

import CompetenceEditor from './containers/CompetenceEditor';
import AddCompetenceGroupButton from './components/AddCompetenceGroupButton'
import EditorSwitcher from './components/EditorSwitcher';

/* 
const state = {
    isEditModeOn: '',
    activeCompetenceGroupId: '',
    defaultCompetenceGroupId: ''
}
*/

const getEditForCompetence = (competenceGroups, activeCompetenceGroupId, competenceId) => {
    let properCompetence;

    competenceGroups.some(group => {
        if(group.id != activeCompetenceGroupId)
            return false;

        group.competencies.some(competence => {
            if(competence.id != competenceId)
                return false;

            properCompetence = competence;
            return true;
        });

        return true;
    });

    return properCompetence
};

class Competencies extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isEditorOn: false,
            activeCompetenceGroupId: 0
        };
    }

    onSelectCompetenceGroup = (competenceGroupId) => {}
    onEditModeChange = () => {};
    onRemoveCompetenceGroup = (competenceGroupId) => {}
    onRemoveCompetence = (competenceId) => {}
    onSaveCompetence = () => {}

    render() {
        const {
            competenceGroups
        } = props;

        return (
            <section className="competencies">
                <EditorSwitcher />
                <div className="horizontal-wrapper">
                    <div className="vertical-wrapper">
                        {this.state.isEditorOn ? <AddCompetenceGroupButton /> : <div></div>}
                        <CompetenceGroupList 
                            competenceGroupList={competenceGroups} 
                            activeCompetenceGroupId={this.state.activeCompetenceGroupId}
                        />
                    </div>
                    <div className="vertical-wrapper">
                        <Switch>
                            <Redirect exact={true} from="/competence" to="/competence" />
                            <Route 
                                path="/competence/:id" 
                                render={props => 
                                    <CompetenceGroupInfo 
                                        {...props} 
                                        isEditorOn={this.state.isEditorOn}
                                        competenceGroups={competenceGroups}
                                    />
                                }
                            />
                            <Route exact={true} path="/competence-editor/new" component={CompetenceEditor}/> 
                            <Route path="/competence-editor/:id" render={props => 
                                <CompetenceEditor 
                                    {...props} 
                                    competence={getEditForCompetence(competenceGroups, this.state.activeCompetenceGroup, props.match.params.id)}
                                    />
                                }
                                onSaveCompetence={onSaveCompetence} 
                            />
                        </Switch>
                    </div>
                </div>
            </section>
        );
    }
}

export default Competencies;