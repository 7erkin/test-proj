import React from 'react'

class TableRow extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        return (
            <tr>
                <td>{this.props.candidate.position}</td>
                <td>{this.props.candidate.name}</td>
                <td>{this.props.candidate.model ? <input type="checkbox" checked></input> : <input type="checkbox"></input>}</td>
                <td>{this.props.candidate.results ? <button className="btn btn-primary">Results</button> : <button className="btn btn-danger">Define</button>}</td>
            </tr>
        );
    }
}

export default TableRow;