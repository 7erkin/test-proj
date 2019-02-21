import React from 'react'
import SearchLine from './SearchLine';
import IndicatorGroupDescription from './IndicatorGroupDescription'
import RemoveIndicatorForm from './RemoveIndicatorForm'

const findByPattern = (indicators, pattern) => indicators.filter(indicator => indicator.name.indexOf(pattern) !== -1);

class IndicatorEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            originalIndicators: props.indicatorGroup.indicators,
            visibleIndicators: props.indicatorGroup.indicators,
            pattern: ''
        }
    }

    isIndicatorExist = properIndicator => {
        return this.state.originalIndicators.findIndex(indicator => indicator.id === properIndicator.id) !== -1;
    }

    // why static?! holy shit - we have to define when the props has been changed or it was setState
    static getDerivedStateFromProps = (nextProps, prevState) => {
        const isIndicatorsRemains = nextProps.indicatorGroup.indicators.every(ind1 => {
            return prevState.originalIndicators.findIndex(ind2 => ind2.id === ind1.id) !== -1;
        });

        if(isIndicatorsRemains)
            return null;
            
        return {
            originalIndicators: nextProps.indicatorGroup.indicators,
            visibleIndicators: nextProps.indicatorGroup.indicators,
            pattern: ''
        }
    }

    onSearch = (value) => {
        const matchedIndicators = findByPattern(this.state.originalIndicators, value);
        console.log(matchedIndicators);
        this.setState({
            visibleIndicators: matchedIndicators,
            pattern: value
        });
    }

    render() {
        const {
            indicatorGroup,
            onRemoveIndicators
        } = this.props;

        return (
            <div>
                <h3 className="visually-hidden">Indicator Editor</h3>
                <SearchLine value={this.state.pattern} onChange={this.onSearch} placeholder="Input indicator name"/>
                <IndicatorGroupDescription description={indicatorGroup.description}/>
                <RemoveIndicatorForm indicators={this.state.visibleIndicators} onRemoveIndicators={onRemoveIndicators}/>
            </div> 
        );
    }
}

export default IndicatorEditor;