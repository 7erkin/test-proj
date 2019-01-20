import React from 'react'
import TableHeader from '../TableHeader'
import TableRow from '../TableRow'

import './style.css'

class CandidatesTable extends React.Component{
    constructor(props) {
        super(props);
    }

    getHeaders = () => Object.keys(this.props.candidates[0]).filter(field => field !== 'id');
    
    render(){
        return (
            <table className="candidates-table table table-bordered">
                <TableHeader headers={this.getHeaders()} />
                {this.props.candidates.map(candidate => <TableRow candidate={candidate} />)}
            </table>
        );
    }
}

export default CandidatesTable;
