import React from 'react'

class Divisions extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        const {divisions} = this.props;
        return (
            <select>
                {divisions.map(division => <option>{division}</option>)}
            </select>
        );
    }
}

export default Divisions;