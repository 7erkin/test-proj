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
import Competencies from './competencies'

const Library = () => {
    return (
        <LibraryView>
            <LibraryTabs />
            <LibraryContentView>
                <Switch>
                    <Redirect exact={true} from="/library" to="/library/competencies-groups" />
                    <Route path="/library/competencies-groups" render={(props) => <Competencies {...props}/> }/>
                    <Route path="/library/indicators-groups" render={(props) => <Indicators {...props}/> }/>
                </Switch>
            </LibraryContentView>
        </LibraryView>
    );
}

export default Library;