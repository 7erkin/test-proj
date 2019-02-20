import React from 'react'

import {
    Switch,
    Route,
    Link
} from 'react-router-dom'

import mockData from './mock'

import {
    connect
} from 'react-redux'

class Competence extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount() {
        const loadedData = mockData;

        // this.dispatch
    }

    render() {
        return (
            <div>
                <h1 class="visually-hidden">Competencies</h1>
                <NavigationCompetenceGroupList />
                <Switch>
                    <Route to="/competence/group-info/:groupid"></Route>
                    <Route to="/competence/group-editor"></Route>
                    <Route to="/competence/editor/:groupid"></Route>
                </Switch>
            </div>
        );
    }
}

const putStateToProps = store => {
    return {
        competenceGroups: store.competenceGroups
    }
}

export default connect(putStateToProps)(Competence);