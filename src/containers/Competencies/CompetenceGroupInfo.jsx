import React from 'react'

import {
    Link
} from 'react-router-dom'

import SearchLine from '../../common-components/SearchLine'
import CompetenceGroupDescription from './CompetenceGroupDescription'
import CompetenceTable from './CompetenceTable'

const SEARCH_LINE_PLACEHOLDER = 'Input competence name';

class CompetenceGroupInfo extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            competencies: props.competencies,
            visibleCompetencies: props.competencies
        }

        this.pattern = '';
    }

    onSearch = (pattern) => {
        // wrong way
        this.pattern = pattern;
        this.setState({
            visibleCompetencies: this.state.competencies
        })
    };

    render() {
        return (
            <section className="competence-group-info">
                <SearchLine value={this.pattern} placeholder={SEARCH_LINE_PLACEHOLDER} onChange={this.onSearch}/> <br />
                <Link to="/competencies/competence-editor">Add competence</Link>
                <CompetenceGroupDescription description={this.props.competenceGroup.description}/>
                <CompetenceTable competencies={this.props.competenceGroup.competencies}/>
            </section>
        );
    }
}

export default CompetenceGroupInfo;