import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'

import MainNavigation from './containers/MainNavigation'
import Candidates from './containers/Candidates'
import NotFound from './containers/NotFound'    

import {Route, BrowserRouter, Switch} from 'react-router-dom'

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div className="container">
                    <MainNavigation />
                    <Switch>
                        <Route path="/candidates" component={Candidates} />
                        <Route path="*" component={NotFound} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;