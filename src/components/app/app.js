import React, {Fragment} from 'react'
import { Switch, Route, Redirect } from 'react-router';

import NotFound from '../pages/not-found'
import MainNavigation from '../main-navigation';
import IndicatorPage from '../../containers/pages/indicator-page';

import './app.css'
import CompanyPage from '../../containers/pages/company-page';

const App = () => {
    return (
        <div className="container">
            <MainNavigation />
            <Switch>
                <Route exact path="/" render={() => <div>Welcome!</div>} />
                <Route path="/indicators" component={IndicatorPage} />
                <Route path="/companies" component={CompanyPage} />
                <Route path="*" component={NotFound}/>
            </Switch>
        </div>
    );
}

export default App;