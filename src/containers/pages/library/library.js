import React, { Component, Fragment } from 'react'

import LibraryView from '../../../components/pages/library/library-view';
import LibraryTabs from './library-tabs';
import LibraryContentView from '../../../components/pages/library/library-content-view';

import {
    Switch,
    Route,
    Redirect
} from 'react-router-dom'
import Indicators from './indicators';

const Library = () => {
    return (
        <LibraryView>
            <LibraryTabs />
            <LibraryContentView>
                <Switch>
                    <Redirect exact={true} from="/library" to="/library/indicators-groups" />
                    <Route path="/library/groups-competencies" render={(props) => {
                        return (
                            <Switch>
                                <Redirect exact={true} from="/library/groups-competencies" to="/library/groups-competencies/1" />
                                <Route path="/library/groups-competencies/:idGroup" render={props => {
                                    return (
                                        <Fragment>
                                            <h1>Groups</h1>
                                            <Switch>
                                                <Route exact path="/library/groups-competencies/:idGroup/add-indicator" render={() => <h1>Add ind</h1>}/>
                                                <Route exact path="/library/groups-competencies/:idGroup/edit-indicator/:idIndicator" render={() => <h1>Edit ind id</h1>}/>
                                                <Route exact path="/library/groups-competencies/edit" render={() => <h1>Edit group</h1>}/>
                                                <Route exact path="/library/groups-competencies/edit/:idGroup" render={() => <h1>Edit group id</h1>}/>
                                                <Route exact path="/library/groups-competencies/add" render={() => <h1>Add group</h1>}/>
                                                <Route exact path="/library/groups-competencies/:idGroup" render={() => <h1>Entities</h1>}/>
                                            </Switch>
                                        </Fragment>
                                    );
                                }} />
                            </Switch>
                        );
                    }} />
                    <Route path="/library/indicators-groups" render={(props) => <Indicators {...props}/>}/>
                </Switch>
            </LibraryContentView>
        </LibraryView>
    );
}

export default Library;