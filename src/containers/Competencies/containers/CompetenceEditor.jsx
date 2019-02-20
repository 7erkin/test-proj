import React from 'react'

import IndicatorEditList from '../components/IndicatorEditList'
import CompetenceGroupSelector from '../components/CompetenceGroupSelector'

class CompetenceEditor extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <form className="competence-edit">
                <input type="text" placeholder="Input competence name" onChange={}/> <br />
                <CompetenceGroupSelector competenceGroups={} onSelect={}/>
                <IndicatorEditList indicatorGroups={}/>
                <button type="button">Cancel</button>
                <button type="button">Delete</button>
                <button type="submit">Save</button>
            </form>
        );
    }
}

export default CompetenceEditor;