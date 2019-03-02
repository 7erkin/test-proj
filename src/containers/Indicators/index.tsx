import React from 'react'

import {
    Switch,
    Route,
    Redirect,
    Link
} from 'react-router-dom'

import {connect} from 'react-redux'

import './style.css'

import mockData from '../../fixtures/indicator-page'

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
} from '../../store/actions/indicator'

import { Store } from '../../types/store';
import { IndicatorGroup, IndicatorStore } from '../../types/indicator-page';
import IAction from '../../types/action';
    
const getInitialGroupId = (groups: Array<IndicatorGroup>) => {
    const ids = groups.map(group => group.id);
    ids.sort();
    return ids[0] == undefined ? -1 : ids[0];
};

interface IProps {
    indicatorStore: IndicatorStore,
    dispatch(action: IAction): void
}
interface IState {
    activeGroupId: number
}

class Indicators extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            activeGroupId: getInitialGroupId(this.props.indicatorStore.indicatorGroups)
        }
    }

    componentDidMount = () => {
        this.props.dispatch(saveLoadedIndicatorGroups(JSON.stringify(mockData)));
    }

    onAddIndicator = (indicatorName: string, groupId: number) => {
        if(this.props.indicatorStore.hasIndicatorInAnyGroup(indicatorName)) return;
        this.props.dispatch(addIndicator(indicatorName, groupId));
    }

    onRemoveIndicators = (indicatorIds: Array<number>) => {
        if(!confirm("Удалить выделенные индикаторы?")) return;
        indicatorIds.forEach(id => this.props.dispatch(deleteIndicator(id, this.state.activeGroupId)));
    }

    onAddIndicatorGroup = (groupName: string, description: string) => {
        if(this.props.indicatorStore.hasGroup(groupName)) return;
        this.props.dispatch(addIndicatorGroup(groupName, description));
    }
    onRemoveIndicatorGroups = (groupIds: Array<number>) => {
        if(!confirm("Удалить выделенные группы индикаторов?")) return;
        groupIds.forEach(groupId => this.props.dispatch(deleteIndicatorGroup(groupId)));
    }

    onSetActiveIndicatorGroup = (groupId: number) => this.setState({activeGroupId: groupId});

    // update state on change props
    static getDerivedStateFromProps = (nextProps: IProps, prevState: IState) => {
        if(prevState.activeGroupId !== -1) return {};
        return {
            activeGroupId: getInitialGroupId(nextProps.indicatorStore.indicatorGroups)
        }
    }

    render() {
        const indicatorGroups = this.props.indicatorStore.indicatorGroups;
        return (
            <section className="indicators">
                <h2 className="visually-hidden">Indicators</h2>
                {this.state.activeGroupId == -1 ? '' :
                    <div className="horizontal-wrap">
                        <div className="aside-navigation vertical-wrap">
                            <IndicatorGroupList 
                                indicatorGroups={indicatorGroups} 
                                onGroupSelect={this.onSetActiveIndicatorGroup} 
                                activeGroupId={this.state.activeGroupId}
                            />
                            <button type="button" className="btn">
                                <Link to="/indicators/indicator-group-editor">Group</Link>
                            </button>
                        </div>
                        <div className="vertical-wrap" style={{width: '100%', 'margin-left': '100px'}}>
                            <Switch>
                                <Redirect exact={true} from="/indicators" to={`/indicators/indicator-editor/${this.state.activeGroupId}`} />
                                <Route path="/indicators/indicator-editor/:groupid" render={props => {
                                    const index = indicatorGroups.findIndex(group => group.id == props.match.params.groupid);
                                    return index == -1 ? <div>Indicator group wasn't found</div> : <IndicatorEditor indicatorGroup={indicatorGroups[index]} onRemoveIndicators={this.onRemoveIndicators} />
                                }}/>
                                <Route path="/indicators/indicator-group-editor" render={() => {
                                    return <IndicatorGroupEditor indicatorGroups={indicatorGroups} onRemoveGroups={this.onRemoveIndicatorGroups}/>
                                }}/>
                                <Route path="/indicators/addindicator" render={(props) => <AddIndicatorForm {...props} indicatorGroups={indicatorGroups} onSubmit={this.onAddIndicator}/>}/>
                                <Route path="/indicators/addgroup" render={(props) => <AddIndicatorGroupForm {...props} onSubmit={this.onAddIndicatorGroup}/>} />
                            </Switch>
                        </div>
                    </div>
                }
            </section>
        );
    }
} 

const putStateToProps = (store: Store) => {
    console.log('--pst: ', store);
    return {
        indicatorStore: store.indicatorStore
    }
}

export default connect(putStateToProps, null)(Indicators);