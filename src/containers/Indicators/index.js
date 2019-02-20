import React from 'react'

import {
    Switch,
    Route,
    Redirect,
    Link
} from 'react-router-dom'

import {connect} from 'react-redux'

import './style.css'

import indicatorGroups from './mock'

import IndicatorGroupList from './AsideIndicatorGroupList'
import IndicatorEditor from './IndicatorEditor'
import IndicatorGroupEditor from './IndicatorGroupEditor'
import AddIndicatorForm from './AddIndicatorForm'
import AddIndicatorGroupForm from './AddIndicatorGroupForm'

import {
    addIndicator, 
    addIndicatorGroup, 
    saveLoadedIndicatorGroups,
    deleteIndicator,
    deleteIndicatorGroup
} from '../../store/action'

const getInitialGroupId = groups => {
    const ids = groups.map(group => group.id);
    ids.sort();
    return ids[0] == undefined ? -1 : ids[0];
};

class Indicators extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activeGroupId: getInitialGroupId(this.props.indicatorGroups)
        }
    }

    componentDidMount = () => {
        const loadedIndicatorGroups = indicatorGroups;
        this.props.dispatch(saveLoadedIndicatorGroups(loadedIndicatorGroups));
    }

    onAddIndicator = (indicatorName, groupId) => {
        this.props.dispatch(addIndicator(indicatorName, groupId));
    }

    onRemoveIndicators = (indicatorIds) => {
        indicatorIds.forEach(id => this.props.dispatch(deleteIndicator(id, this.state.activeGroupId)));
    }

    onAddIndicatorGroup = (groupName, description) => {
        this.props.dispatch(addIndicatorGroup(groupName, description));
    }
    onRemoveIndicatorGroups = (groupIds) => {
        groupIds.forEach(groupId => this.props.dispatch(deleteIndicatorGroup(groupId)));
    }

    onSetActiveIndicatorGroup = groupId => this.setState({activeGroupId: groupId});

    // update state on change props
    static getDerivedStateFromProps = (nextProps, prevState) => {
        return {
            indicatorGroups: nextProps.indicatorGroups.slice()
        }
    }

    render() {
        const initialGroupId = getInitialGroupId(this.props.indicatorGroups)

        return (
            <section className="indicators">
                <h2 className="visually-hidden">Indicators</h2>
                <div className="horizontal-wrap">
                    <div className="aside-navigation vertical-wrap">
                        <IndicatorGroupList 
                            indicatorGroups={indicatorGroups} 
                            onGroupSelect={this.onSetActiveIndicatorGroup} 
                            activeGroupId={this.state.activeGroupId == -1 ? initialGroupId : this.state.activeGroupId}
                        />
                        <button type="button" className="btn">
                            <Link to="/indicators/indicator-group-editor">Group</Link>
                        </button>
                    </div>
                    <div className="vertical-wrap" style={{width: '100%', 'margin-left': '100px'}}>
                        <Switch>
                            <Redirect exact={true} from="/indicators" to={`/indicators/indicator-editor/${1}`} />
                            <Route path="/indicators/indicator-editor/:groupid" render={props => {
                                const index = indicatorGroups.findIndex(group => group.id == props.match.params.groupid);
                                return index == -1 ? <div>Indicator group wasn't found</div> : <IndicatorEditor indicatorGroup={indicatorGroups[index]} onRemoveIndicators={this.onRemoveIndicators} />
                            }}/>
                            <Route path="/indicators/indicator-group-editor" render={() => {
                                return <IndicatorGroupEditor indicatorGroups={indicatorGroups} onRemoveGroups={this.onRemoveIndicatorGroups}/>
                            }}/>
                            <Route path="/indicators/addindicator" render={() => <AddIndicatorForm indicatorGroups={indicatorGroups} onSubmit={this.onAddIndicator}/>}/>
                            <Route path="/indicators/addgroup" render={() => <AddIndicatorGroupForm onSubmit={this.onAddIndicatorGroup}/>} />
                        </Switch>
                    </div>
                </div>
            </section>
        );
    }
} 

const putStateToProps = store => {
    return {
        indicatorGroups: store.indicatorGroups.slice()
    }
}

export default connect(putStateToProps)(Indicators);