import React from 'react'

import fixturesDivisions from '../../../../fixtures/divisions'
import fixturesCandidates from '../../../../fixtures/table'

import Divisions from '../Divisions'
import CandidatesTable from '../Table'
import Search from '../Search'

export default function CandidatesCompany(props){
    console.log('-----', props.match.params.companyid);
    return (
        <div className="vertical-wrapper">
            <div className="horizontal-wrapper">
                <Divisions divisions={fixturesDivisions[props.match.params.companyid].divisions} /> 
                <Search />
            </div>
            <CandidatesTable candidates={fixturesCandidates[props.match.params.companyid].candidates} /> 
        </div>
    );
};