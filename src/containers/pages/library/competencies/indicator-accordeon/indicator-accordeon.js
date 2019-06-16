import React, { Component } from 'react'
import { connect } from 'react-redux';
import withStaffixService from '../../../../../hoc/hoc-services/with-staffix-service';

import Accordeon from '../../../../../components/pages/library/accordeon';
import { startLoadingIndicators, finishLoadingIndicators } from '../../../../../action-creators/library-page/indicators/loading';
import { saveLoadedIndicators } from '../../../../../action-creators/library-page/indicators/indicators';
import withPointedIndicators from '../../../../../hoc/with-pointed-indicators';

import { mode } from '../../../../../hoc/with-pointed-indicators/with-pointed-indicators';
import LoadingIndicator from '../../../../../components/common/loading-indicator/loading-indicator';

class IndicatorAccordeon extends Component {
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

    render() {
        const {
            indicators,
            indicatorsGroups,
            loadingIndicators,
            pointedIndicators,
            onIndicatorCheck
        } = this.props;

        return (
            <Accordeon 
                    indicatorsGroups={indicatorsGroups} 
                    renderItems={(indicatorsGroupId) => {
                        if(this._currentIndicatorsGroupId == indicatorsGroupId && loadingIndicators)
                            return <LoadingIndicator />
                
                        if(!pointedIndicators.some(el => el.idGroup == indicatorsGroupId) && this._currentIndicatorsGroupId !== indicatorsGroupId)
                            return null;
                
                        if(this._currentIndicatorsGroupId == indicatorsGroupId)
                            return (
                                <ul>
                                    {indicators.map(el1 => {
                                        const checked = pointedIndicators.some(el2 => el2.id == el1.id);
                                            return (
                                                <li key={Math.random() * 1000}>
                                                    {el1.name}
                                                    <input type="checkbox" checked={checked} onChange={evt => {
                                                        evt.preventDefault();
                                                        onIndicatorCheck({...el1})
                                                    }} />
                                                </li>
                                            );
                                        })
                                    }
                                </ul>
                            );
                
                        return (
                            <ul>
                                {pointedIndicators.
                                        filter(el => el.idGroup == indicatorsGroupId).
                                        map(el => {
                                            return (
                                                <li key={Math.random() * 1000}>
                                                    {el.name}
                                                    <input type="checkbox" checked={true} onChange={evt => {
                                                        evt.preventDefault();
                                                        onIndicatorCheck({...el})
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
        competenciesPage: {
            newCompetence,
            editCompetence
        },
        indicatorsPage: {
            common: {
                indicators,
                indicatorsGroups
            },
            loading: {
                loadingIndicators
            }
        }
    }
}) => {
    return {
        indicators,
        indicatorsGroups,
        loadingIndicators,
        newCompetence,
        editCompetence
    }
}

const EditCompetenceIndicatorAccordeon = connect(mapStoreToProps)(
                                            withStaffixService(
                                                withPointedIndicators(mode.EDIT)(IndicatorAccordeon)
                                            )
                                        );

const AddCopmetenceIndicatorAccordeon = connect(mapStoreToProps)(
                                            withStaffixService(
                                                withPointedIndicators(mode.ADD)(IndicatorAccordeon)
                                            )
                                        );


export {
    EditCompetenceIndicatorAccordeon,
    AddCopmetenceIndicatorAccordeon
}