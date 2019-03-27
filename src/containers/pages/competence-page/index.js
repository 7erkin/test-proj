 import React, {Fragment} from 'react'

 import {
     Link, Switch, Route, Redirect
 } from 'react-router-dom'

 import LeftAsideTemplate from '../../../components/common/template/left-aside-template'
import CompetenceListContainer from './competence-list-container';
import CompetenceAsideGroupListContainer from './competence-aside-group-list-container';
import CompetenceGroupListContainer from './competence-group-list-container';

 const CompetencePage = () => {
     
    const leftComponent = (
        <Fragment>
            <CompetenceAsideGroupListContainer />
            <Link to="/competencies/edit-group">Edit group</Link>
        </Fragment>
    );

    const centerComponent = (
        <Switch>
            <Redirect exact={true} from="/competencies" to="/competencies/group" />
            <Route path="/competencies/group/:id?" render={(props) => <CompetenceListContainer {...props}/>} />
            <Route path="/competencies/edit-group" render={(props) => <CompetenceGroupListContainer {...props}/>}/>
        </Switch>
    );

    return <LeftAsideTemplate leftComponent={leftComponent} centerComponent={centerComponent}/>;
 }

 export default CompetencePage;