import React, { Fragment } from 'react'
import { connect } from 'react-redux';

import withStaffixService from '../../../../hoc/hoc-services/with-staffix-service'
import AsideList from '../aside-list';
import CenterList from '../center-list';

import {
    Switch,
    Route,
} from 'react-router-dom'
import withInitialLoading from '../../../../hoc/with-initial-loading';

const Competencies = props1 => {
    return (
        <Switch>
            <Route path="/competencies/:id" render={(props2) => {
                <Fragment>
                    <AsideList />
                    <CenterList />
                </Fragment>
            }} />
        </Switch>
    );
}

const mapStoreToProps = ({

}) => {
    return {};
}

export default connect(mapStoreToProps)(withStaffixService(withInitialLoading(Competencies)));