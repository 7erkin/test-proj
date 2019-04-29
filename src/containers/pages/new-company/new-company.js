import React, { Component } from 'react'
import NewCompanyPageComponent from '../../../components/pages/new-company';

export default class NewCompanyPage extends Component {
    constructor(props) {
        super(props);
    }

    onSubmit = () => {}

    onCancel = () => {}

    render() {

        return <NewCompanyPageComponent onSubmit={this.onSubmit} onCancel={this.onCancel}/>
    }
}