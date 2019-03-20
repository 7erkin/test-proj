import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router';
import CompanyViewerContainer from './company-viewer-container';
import CompanyEditorContainer from './company-editor-container';
import CompanyCreatorContainer from './company-creator-container/company-creator-container';

class CompanyPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <section className="company-page">
                <Switch>
                    <Redirect exact={true} from="/companies" to="/companies/viewer" />
                    <Route path="/companies/viewer/:id?" render={(props) => <CompanyViewerContainer {...props} />} />
                    <Route path="/companies/editor/:id?" render={(props) => {
                        return props.match.params.id == undefined ? <CompanyCreatorContainer {...props}/> : <CompanyEditorContainer {...props}/>;
                    }} />
                </Switch>
            </section>
        );
    }
}

export default CompanyPage;