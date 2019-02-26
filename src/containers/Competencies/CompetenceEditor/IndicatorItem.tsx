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

class IndicatorItem extends React.Component<Props, any> {
    constructor(props: Props){
        super(props);

    }

    render() {
        const {
            onChecked,
            onUnchecked,
            indicator,
            competence
        } = this.props as Props;

        const isChecked = competence.hasIndicator(indicator.id);

        return (
            <li 
                key={indicator.id} 
                className={`indicator-item ${isChecked ? '' : 'indicator-item-hidden'}`}>
                    {indicator.name}
                    {isChecked ? (
                        <select 
                            onChange={event => {
                                const influence = event.target.value as unknown;
                                onChecked(indicator.id, influence as Influence);
                            }} 
                            value={competence.getIndicatorInfluence(indicator.id)}>
                            <option value={Influence.Positive}>Positive</option>
                            <option value={Influence.Negative}>Negative</option>
                        </select>) : ''}
                        <input type="checkbox" checked={isChecked} onChange={() => {
                            if(isChecked){
                                onUnchecked(indicator.id);
                                return;
                            } 
                            onChecked(indicator.id, Influence.Positive);
                        }}/>
            </li>
        );
    }
}

export default IndicatorItem;