import React from 'react'
import { Indicator } from '../../Indicators/types';
import { Influence, Competence } from '../types';

interface Props {
    onUnchecked: (indicatorId: number) => void,
    getIndicatorInfluence: (indicatorId: number) => Influence,
    onChecked: (indicatorId: number, influence: Influence) => void,
    isIndicatorChecked: (indicatorId: number) => boolean,
    indicator: Indicator,
    competence: Competence
};

interface State {
    isChecked: boolean
}


class IndicatorItem extends React.Component<Props, State> {
    constructor(props: Props){
        super(props);

        this.state = {
            isChecked: props.competence.hasIndicator(props.indicator.id)
        };
    }

    render() {
        const {
            onChecked,
            onUnchecked,
            indicator,
            competence
        } = this.props as Props;

        debugger; 

        return (
            <li 
                key={indicator.id} 
                className={`indicator-item ${this.state.isChecked ? '' : 'indicator-item-hidden'}`}>
                    {indicator.name}
                    <select 
                        onChange={event => {
                            const influence = event.target.value as unknown;
                            onChecked(indicator.id, influence as Influence);
                        }} 
                        value={this.state.isChecked ? Influence.Positive : Influence.Undefined}>
                        <option value={Influence.Undefined}>Choose influence</option>
                        <option value={Influence.Positive}>Positive</option>
                        <option value={Influence.Negative}>Negative</option>
                    </select>
                    <input type="checkbox" checked={this.state.isChecked} onChange={() => {
                        if(this.state.isChecked) onUnchecked(indicator.id);
                    }}/>
            </li>
        );
    }
}

export default IndicatorItem;