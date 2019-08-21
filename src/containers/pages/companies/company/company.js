import React, { Component, Fragment } from 'react'
import CompanyTabs from '../company-tabs';
import { Switch, Redirect, Route } from 'react-router-dom';
import Structure from './structure';

class Company extends Component {
    render() {
        const {
            match: {
                url
            }
        } = this.props

        return (
            <article className="company">
                <Switch>
                    <Redirect exact from={url} to={`${url}/info`} />
                    <Route path="*" render={(props) => {
                        const { history, match, match: { url } } = props

                        return (
                            <Fragment>
                                <CompanyTabs match={match} history={history} url={url} />
                                <Switch>
                                    <Route exact path={`/companies/:idCompany/info`} render={(props) => <h1>Info</h1>} />
                                    <Route path={`/companies/:idCompany/structure`} render={(props) => <Structure {...props} /> } />
                                    <Route path={`/companies/:idCompany/competencies-model`} render={(props) => <h1>Competencies model</h1>} />
                                    <Route path={`/companies/:idCompany/requests`} render={(props) => <h1>Requests</h1>} />
                                </Switch>
                            </Fragment>
                        )
                    }} />
                </Switch>
            </article>
        )
    }
}

export default Company