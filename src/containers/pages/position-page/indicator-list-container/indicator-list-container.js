import React, { Component, Fragment } from 'react'
import AccordeonIndicatorContainer from '../../../accordeon-indicator-container.js';
import { connect } from 'react-redux';
import withStaffixService from '../../../../hoc/with-staffix-service';
import { pointedEntityActionCreator } from '../../../../action-creators/position/index.js';

class IndicatorListContainer extends Component {
    constructor(props) {
        super(props);
    }

    onIndicatorChecked = (id, name, groupId) => {
        this.props.dispatch(pointedEntityActionCreator.updatePointedIndicators(id, name, groupId));
    }

    onApply = () => {
        const {dispatch, staffixService, pointedIndicators} = this.props;
        const ids = pointedIndicators.map(el => el.id);
        staffixService.getCompetenciesByIndicators(ids)
            .then(competenies => {
                
            })
    }

    onCancel = () => {}

    render() {
        const {
            pointedIndicators,
            loading
        } = this.props;

        return (
            <section>
                <AccordeonIndicatorContainer renderIndicators={(indicators, groupId) => {
                        // find out if we have some matched pointed indicators for group with groupId
                        const matchedIndicators = pointedIndicators.filter(el => el.groupId == groupId);
                        // if indicators is empty a group with groupId isn't active and we have to render all matched ind as checked
                        if(indicators.length) {
                            return indicators.map(el => {
                                const {id, name} = el;
                                return (
                                    <li key={id}>
                                        {name}
                                        <input 
                                            type="checkbox" 
                                            onChange={() => this.onIndicatorChecked(id, name, groupId)} 
                                            checked={matchedIndicators.some(el => el.id == id)}/>
                                    </li>
                                );
                            })
                        } else {
                            return matchedIndicators.map(el => {
                                const {id, name, groupId} = el;
                                return (
                                    <li key={id}>
                                        {name}
                                        <input 
                                            type="checkbox" 
                                            onChange={() => this.onIndicatorChecked(id, name, groupId)}
                                            checked={true}
                                        />
                                    </li>
                                );
                            })
                        }
                    }
                }/>
                {!loading.indicatorGroups ?
                    <Fragment>
                        <button type="button" onClick={this.onCancel}>Cancel</button>
                        <button type="button" onClick={this.onApply}>Apply</button>
                    </Fragment> :
                    null
                }
            </section>
        );
    }
}

const mapStoreToProps = store => {
    const {positionPage} = store;
    const {common} = store;
    const {
        loading
    } = common.accordeonIndicator;
    const {
        indicators: pointedIndicators
    } = positionPage.pointedEntity;
    return {
        pointedIndicators,
        loading
    };
}

export default connect(mapStoreToProps)(withStaffixService(IndicatorListContainer));
