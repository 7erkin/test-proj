import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'

import MainNavigation from './containers/MainNavigation'
import Candidates from './containers/Candidates'
import Polls from './containers/Polls'
import Positions from './containers/Positions'
import Indicators from './containers/Indicators'
import NotFound from './containers/NotFound'
import Competencies from './containers/Competencies'    

import {Route, BrowserRouter, Switch} from 'react-router-dom'
import {Provider} from 'react-redux'

import store from './store/config-store'

class App extends React.Component {
    render() {
        return ( 
            <Provider store={store}>
                <BrowserRouter>
                <div className="container">
                    <MainNavigation />
                    <Switch>
                        <Route path="/candidates" component={Candidates} />
                        <Route path="/polls" component={Polls} />
                        <Route path="/positions" component={Positions} />
                        <Route path="/competencies" component={Competencies} />
                        <Route path="/indicators" component={Indicators} />
                        <Route path="*" component={NotFound} />
                    </Switch>
                </div>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;