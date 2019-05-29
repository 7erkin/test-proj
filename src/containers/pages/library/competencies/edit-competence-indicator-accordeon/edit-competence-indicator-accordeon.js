import React, { Component } from 'react'
import { connect } from 'react-redux';
import withStaffixService from '../../../../../hoc/hoc-services/with-staffix-service';

import Accordeon from '../../../../../components/pages/library/accordeon';
import { startLoadingIndicators, saveLoadedIndicators, finishLoadingIndicators } from '../../../../../action-creators/library-page/indicators';
import { updateEditCompetencePointedIndicators } from '../../../../../action-creators/library-page/competencies';

class EditCompetenceIndicatorAccordeon extends Component {
    constructor(props){
        super(props);

        this._currentIndicatorsGroupId = NaN;
    }

    onIndicatorsGroupClick = id => {
        this._currentIndicatorsGroupId = id;

        const {
            dispatch, staffixService
        } = this.props;

        dispatch(startLoadingIndicators());
        staffixService.getIndicators(id)
            .then(indicators => {
                dispatch(saveLoadedIndicators(indicators));
                dispatch(finishLoadingIndicators());
            })
    }

    onIndicatorPointOut = indicator => {
        this.props.dispatch(updateEditCompetencePointedIndicators(indicator));
    }

    render() {
        const {
            indicators,
            indicatorsGroups,
            loadingIndicators,
            pointedIndicators
        } = this.props;

        return (
            <Accordeon 
                    indicatorsGroups={indicatorsGroups} 
                    renderItems={(indicatorsGroupId) => {
                        if(this._currentIndicatorsGroupId == indicatorsGroupId && loadingIndicators)
                            return <h2>Loading indicators...</h2>

                        if(!pointedIndicators.some(el => el.idGroup == indicatorsGroupId) && this._currentIndicatorsGroupId !== indicatorsGroupId)
                            return null;

                        if(this._currentIndicatorsGroupId == indicatorsGroupId)
                            return (
                                <ul>
                                    {
                                        indicators.
                                            map(el1 => {
                                                const checked = pointedIndicators.some(el2 => el2.id == el1.id);
                                                return (
                                                    <li>
                                                        {el1.name}
                                                        <input 
                                                            type="checkbox" 
                                                            checked={checked} 
                                                            onChange={evt => {
                                                                evt.preventDefault();
                                                                this.onIndicatorPointOut({...el1})
                                                                }} />
                                                    </li>
                                                );
                                            })
                                    }
                                </ul>
                            );

                        return (
                            <ul>
                                {
                                    pointedIndicators.
                                        filter(el => el.idGroup == indicatorsGroupId).
                                        map(el => {
                                            return (
                                                <li>
                                                    {el.name}
                                                    <input 
                                                        type="checkbox" 
                                                        checked={true} 
                                                        onChange={evt => {
                                                            evt.preventDefault();
                                                            this.onIndicatorPointOut({...el})
                                                            }} />
                                                </li>
                                            );
                                        })
                                }
                            </ul>
                        );
                    }}
                    onIndicatorsGroupClick={this.onIndicatorsGroupClick}/>
        );
    }
}

const mapStoreToProps = ({
    libraryPage: {
        editCompetence: {
            indicators: pointedIndicators
        },
        indicators,
        indicatorsGroups,
        loadingIndicators
    }
}) => {
    return {
        indicators,
        indicatorsGroups,
        loadingIndicators,
        pointedIndicators
    }
}

export default connect(mapStoreToProps)(withStaffixService(EditCompetenceIndicatorAccordeon));