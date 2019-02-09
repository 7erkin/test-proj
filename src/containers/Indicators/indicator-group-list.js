import React from 'react'
import {Link} from 'react-router-dom'

class IndicatorGroupList extends React.Component {
    constructor(props){
        super(props);
    }

    render = () => {
        return (
            <ul>
                {this.props.indicatorGroups.map((group, index) => <li key={group.id}>
                    <Link to={`/indicators/${index}`}>{group.name}</Link>
                </li>)}
            </ul>
        );
    }
}

export default IndicatorGroupList;