import React from 'react'
import {Route, BrowserRouter, Switch, Link} from 'react-router-dom'

import './style.css'

import AddCompany from '../AddCompany'

class CompanyList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {companies} = this.props;

        return (
            <div>
                <ul className="company-list">
                    {companies.map(company => 
                        <li className="company-item" key={company.id}>
                            <Link to={`/candidates/${company.id}`}>{company.name}</Link>
                        </li>)
                    }
                </ul>
                <AddCompany />
            </div>
        );
    }
}

export default CompanyList;