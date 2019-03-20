import React from 'react'
import { Link } from 'react-router-dom';

const CompanyTable = ({
    companies
}) => {
    return (
        <table>
            <tr>
                <th>Company</th>
                <th>Subdivision</th>
                <th>Description subdivision</th>
            </tr>
            {
                companies.map(el1 => {
                    return el1.subdivisions.map(el2 => {
                        return (
                            <tr>
                                <td>
                                    <Link to={`/companies/editor/${el1.id}`}>{el1.name}</Link>
                                </td>
                                <td>{el2.name}</td>
                                <td>{el2.description}</td>
                            </tr>
                        );
                    });
                })
            }
        </table>
    );
}

export default CompanyTable;