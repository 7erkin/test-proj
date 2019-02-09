import React from 'react'
import './style.css'

import {connect} from 'react-redux'

import GroupList from './GroupList'
import GroupInfo from './GroupInfo'
import EditMode from './EditMode'
import AddIndicatorForm from './AddIndicatorForm'
import AddGroupForm from './AddGroupForm'

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

const getDefaultRenderedGroupId = groups => {
    const ids = groups.map(group => group.id);
    ids.sort();
    return ids[0] == undefined ? -1 : ids[0];
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
            defaultGroupId: id
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
    onIndicatorAdd = (indicatorName, groupId) => {
        this.props.dispatch(addIndicator(indicatorName, groupId));
    }
    onIndicatorDelete = (indicatorId, groupId) => {
        this.props.dispatch(deleteIndicator(indicatorId, groupId));
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

    static getDerivedStateFromProps = (nextProps, prevState) => {
        alert('kek');
        console.log(nextProps);
        return {
            indicatorGroups: nextProps.indicatorGroups.slice(),
            defaultGroupId: getDefaultRenderedGroupId(nextProps.indicatorGroups.slice())
        }
    }

    render() {
        return (this.state.defaultGroupId == -1 ? <h1>No groups found</h1> :
            (<div>
                <EditMode 
                    isOn={this.state.isEditModeOn} 
                    onSwitch={this.onSwitchEditMode}/>
                <div className="horizontal-wrap container">
                    <GroupList 
                        groups={this.state.indicatorGroups}
                        defaultGroupId={this.state.defaultGroupId}
                        onAddGroupFormOpen={this.onAddGroupFormOpen}
                        onGroupDelete={this.onGroupDelete} 
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