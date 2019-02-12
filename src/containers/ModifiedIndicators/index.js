import React from 'react'
import './style.css'

import {connect} from 'react-redux'

import GroupList from './containers/GroupList'
import GroupInfo from './containers/GroupInfo'
import EditMode from './components/EditMode'
import AddIndicatorForm from './components/AddIndicatorForm'
import AddGroupForm from './components/AddGroupForm'

import {
    Switch, 
    Route, 
    Redirect
} from 'react-router-dom'

import {
    addIndicator, 
    addIndicatorGroup, 
    saveLoadedIndicatorGroups,
    deleteIndicator,
    deleteIndicatorGroup
} from '../../store/action'

import mockLoadedData from './mock'

const NO_GROUPS = -1;

const getDefaultRenderedGroupId = groups => {
    const ids = groups.map(group => group.id);
    ids.sort();
    return ids[0] == undefined ? NO_GROUPS : ids[0];
};

class ModifiedIndicators extends React.Component {
    constructor(props) {
        super(props);

        const id = getDefaultRenderedGroupId(props.indicatorGroups);

        this.state = {
            isEditModeOn: false,
            isAddIndicatorFormOpen: false,
            isAddGroupFormOpen: false,
            indicatorGroups: props.indicatorGroups,
            defaultGroupId: id,
            activeGroupId: id
        }
    }
    
    componentDidMount() {
        const loadedIndicatorGroups = mockLoadedData;
        this.props.dispatch(saveLoadedIndicatorGroups(loadedIndicatorGroups));
    }

    onSwitchEditMode = () => {
        this.setState({
            isEditModeOn: !this.state.isEditModeOn
        });
    }
    onGroupAdd = (groupName, description) => {
        this.props.dispatch(addIndicatorGroup(groupName, description));
    }
    onGroupDelete = groupId => {
        this.props.dispatch(deleteIndicatorGroup(groupId));
    }
    onIndicatorAdd = (indicatorName) => {
        this.props.dispatch(addIndicator(indicatorName, this.state.activeGroupId));
    }
    onIndicatorDelete = (indicatorId) => {
        this.props.dispatch(deleteIndicator(indicatorId, this.state.activeGroupId));
    }
    onCloseAddGroupForm = () => {
        this.setState({
            isAddGroupFormOpen: false
        });
    }
    onCloseAddIndicatorForm = () => {
        this.setState({
            isAddIndicatorFormOpen: false
        });
    }
    onAddGroupFormOpen = () => this.setState({
        isAddGroupFormOpen: true
    })
    onAddIndicatorFormOpen = () => this.setState({
        isAddIndicatorFormOpen: true
    })
    onSelectActiveGroup = (groupId) => {
        this.setState({
            activeGroupId: groupId
        });
    }

    static getDerivedStateFromProps = (nextProps, prevState) => {
        console.log(nextProps);
        return {
            indicatorGroups: nextProps.indicatorGroups.slice(),
            defaultGroupId: getDefaultRenderedGroupId(nextProps.indicatorGroups.slice())
        }
    }

    render() {
        return (this.state.defaultGroupId == NO_GROUPS ? <h1>No groups found</h1> :
            (<div>
                <EditMode 
                    isOn={this.state.isEditModeOn} 
                    onSwitch={this.onSwitchEditMode}/>
                <div className="horizontal-wrap container">
                    <GroupList 
                        groups={this.state.indicatorGroups}
                        defaultGroupId={this.state.defaultGroupId}
                        activeGroupId={this.state.activeGroupId}
                        onAddGroupFormOpen={this.onAddGroupFormOpen}
                        onGroupDelete={this.onGroupDelete} 
                        onSelectGroup={this.onSelectActiveGroup}
                        isEditModeOn={this.state.isEditModeOn}/>
                    <Switch>
                        <Redirect exact={true} from="/indicators/" to={`/indicators/${this.state.defaultGroupId}`} />
                        <Route path="/indicators/:id" render={(props) => 
                            <GroupInfo {...props}
                                groups={this.state.indicatorGroups}
                                isEditModeOn={this.state.isEditModeOn}
                                onAddIndicatorFormOpen={this.onAddIndicatorFormOpen}
                                onIndicatorDelete={this.onIndicatorDelete} />
                        }/>
                    </Switch>
                </div>
                {!this.state.isAddIndicatorFormOpen ? <div/> : <AddIndicatorForm 
                        groups={this.state.indicatorGroups}
                        onIndicatorAdd={this.onIndicatorAdd}
                        onClose={this.onCloseAddIndicatorForm}/>
                }
                {!this.state.isAddGroupFormOpen ? <div/> : <AddGroupForm 
                        groups={this.state.indicatorGroups}
                        onGroupAdd={this.onGroupAdd}
                        onClose={this.onCloseAddGroupForm}/>
                }
            </div>
        ));
    }
}

const putStateToProps = store => {
    return {
        indicatorGroups: store.indicatorGroups.slice()
    };
}

export default connect(putStateToProps)(ModifiedIndicators);