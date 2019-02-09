import React from 'react'

class IndicatorTable extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const indicators = this.props.indicators;

        return (
            <ul>
                {indicators.map((indicator, value) => <li key={value}>{indicator}</li>)}
            </ul>
        );
    }
}

export default IndicatorTable;