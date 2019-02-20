import React from 'react'

class IndicatorEditList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            shownIndicatorGroupId: this.props.indicatorGroups[0].id
        }
    }

    render() { 
        const {
            indicatorGroups
        } = props;
        
        return (
            <ul class="accordion">
                {indicatorGroups.map(group => {
                    return (
                        <li key={group.id}>
                            <div className="card">
                                <div className="card-header" id="headingOne">
                                    <h5 className="mb-0">
                                        <button onClick={event => this.setState({shownIndicatorGroupId: group.id})} className="btn btn-link" type="button" data-toggle="collapse" aria-expanded="true">
                                            {group.name}
                                        </button>
                                    </h5>
                                </div>
                            </div>
                            <div className={`collapse ${this.state.shownIndicatorGroupId == group.id ? 'show' : ''}`}>
                                <ul className="card-body">
                                    {group.indicators.map(indicator => <li key={indicator.id}>{indicator.name}</li>)}
                                </ul>
                            </div>
                        </li>
                    );
                })}
            </ul>
        );
    }
}

export default IndicatorEditList;