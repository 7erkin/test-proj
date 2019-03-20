import React, {Fragment} from 'react'
import { Switch, Route, Redirect } from 'react-router';
import {
    Link
} from 'react-router-dom'

import IndicatorListContainer from './indicator-list-container';
import IndicatorGroupListContainer from './indicator-group-list-container';
import LeftAsideTemplate from '../../../components/common/template/left-aside-template/left-aside-template';
import IndicatorAsideGroupListContainer from './indicator-aside-group-list-container';

const IndicatorPage = () => {

    const leftComponent = (
        <Fragment>
            <IndicatorAsideGroupListContainer />
            <Link to="/indicators/edit-group">Edit group</Link>
        </Fragment>
    );

    const centerComponent = (
        <Switch>
            <Redirect exact={true} from="/indicators" to="/indicators/group" />
            <Route path="/indicators/group/:id?" render={(props) => <IndicatorListContainer {...props} />}/>
            <Route path="/indicators/edit-group" render={(props) => <IndicatorGroupListContainer {...props}/>} />
        </Switch>
    );

    return <LeftAsideTemplate leftComponent={leftComponent} centerComponent={centerComponent}/>;
}

export default IndicatorPage;