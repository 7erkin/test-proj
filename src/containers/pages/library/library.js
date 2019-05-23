import React, { Component } from 'react'

import LibraryView from '../../../components/pages/library/library-view';
import LibraryTabs from './library-tabs';
import LibraryContentView from '../../../components/pages/library/library-content-view';
import AsideList from './aside-list';
import CenterList from './center-list';

import {
    Switch,
    Route,
    Redirect
} from 'react-router-dom'

const Library = () => {
    return (
        <LibraryView>
            <LibraryTabs />
            <LibraryContentView>
                <Switch>
                    <Redirect from="/library" to="/library/competencies" />
                    <Route path="/library/competencies" render={props => <Competencies {...props} />} />
                    <Route path="/library/indicators" render={props => <Indicators {...props} />}/>
                    <Route path="/library/questions" render={props => null}/>
                </Switch>
            </LibraryContentView>
        </LibraryView>
    );
}

export default Library;