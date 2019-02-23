import React from 'react'

import {
    Link
} from 'react-router-dom'

import SearchLine from '../../common-components/SearchLine'
import CompetenceGroupDescription from './CompetenceGroupDescription'
import CompetenceTable from './CompetenceTable'

const findByPattern = (competenceGroups, pattern) => competenceGroups.filter(group => group.description.indexOf(pattern) !== -1);

const SEARCH_LINE_PLACEHOLDER = 'Input competence name';

class CompetenceGroupInfo extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            competencies: props.competenceGroup.competencies,
            visibleCompetencies: props.competenceGroup.competencies,
            pattern: ''
        }
    }

    onSearch = (pattern) => {
        // wrong way
        this.setState({
            visibleCompetencies: findByPattern(this.state.competencies, pattern),
            pattern: pattern
        })
    };

    static getDerivedStateFromProps(nextProps, prevState){
        const match = nextProps.competenceGroup.competencies.every(competence1 => {
            return prevState.competencies.findIndex(competence2 => competence1.id === competence2.id) !== -1;
        });

        return match ? null : {
            competencies: nextProps.competenceGroup.competencies,
            visibleCompetencies: nextProps.competenceGroup.competencies,
            pattern: ''
        }
    }

    render() {
        return (
            <section className="competence-group-info">
                <SearchLine value={this.state.pattern} placeholder={SEARCH_LINE_PLACEHOLDER} onChange={this.onSearch}/> <br />
                <Link to="/competencies/competence-editor/new">Add competence</Link>
                <CompetenceGroupDescription description={this.props.competenceGroup.description}/>
                <CompetenceTable competencies={this.state.visibleCompetencies}/>
            </section>
        );
    }
}

export default CompetenceGroupInfo;