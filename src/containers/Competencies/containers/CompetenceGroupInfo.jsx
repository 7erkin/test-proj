import React from 'react'

import CompetenceSearch from '../components/CompetenceSearch'
import CompetenceGroupDescription from '../components/CompetenceGroupDescription';
import CompetenciesTable from '../components/CompetenciesTable';

const getActiveCompetenceGroup = (groups, groupId) => {
    return groups.find(group => group.id === groupId);
};
const findByPattern = () => {}

class CompetenceGroupInfo extends React.Component {
    constructor(props) {
        super(props);

        const id = props.match.params.id;
        this.state = {
            visibleCompetencies: props.competenceGroups[id].competencies
        };
    }

    onCompetenceSearchInput = (pattern) => {
        this.setState({
            visibleCompetencies: findByPattern(pattern)
        });
    }
    static getDerivedStateToProps = (nextProps, prevState) => {
        // call after:
        // case setState
        // case changeProps
    }

    render() {
        const {
            isEditorOn,
            competenceGroups
        } = this.props;

        const groupId = this.props.params.match.id;
        const activeGroup = getActiveCompetenceGroup(competenceGroups, groupId);

        return (
            <section className="competence-group-info">
                <CompetenceSearch onInput={this.onCompetenceSearchInput}/>
                {isEditorOn ? <AddCompetenceButton /> : <div></div>}
                <CompetenceGroupDescription description={activeGroup.description}/>
                <CompetenciesTable competencies={this.state.visibleCompetencies}/>
            </section>
        );
    }
}