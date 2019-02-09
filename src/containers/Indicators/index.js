import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import IndicatorList from './indicator-list'
import AddIndicatorGroupForm from './add-indicator-group-form'
import AddIndicatorForm from './add-indicator-form'

import {connect} from'react-redux'

import {
    addIndicator, 
    addIndicatorGroup, 
    saveLoadedIndicatorGroups,
    deleteIndicator,
    deleteIndicatorGroup
} from '../../store/action'

class Indicators extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount() {
        const loadedIndicators =  [
                {
                    id: 0,
                    name: 'Group 1',
                    description: 'Description indicator group 1',
                    indicators: [
                        'ind1',
                        'ind2',
                        'ind3'
                    ]
                },
                {
                    id: 1,
                    name: 'Group 2',
                    description: 'Description indicator group 2',
                    indicators: [
                        'ind1',
                        'ind2'
                    ]
                },
                {
                    id: 2,
                    name: 'Group 3',
                    description: 'Description indicator group 3',
                    indicators: [
                        'ind5',
                        'ind10'
                    ]
                }
            ];
        this.props.dispatch(saveLoadedIndicatorGroups(loadedIndicators));
    }

    addIndicatorCb = (indicatorName, groupId) => {
        this.props.dispatch(addIndicator(indicatorName, groupId));
    }
    addIndicatorGroupCb = (indicatorGroupName) => {
        this.props.dispatch(addIndicatorGroup(indicatorGroupName));
    }
    deleteIndicatorCb = (indicatorName, groupId) => {
        this.props.dispatch(deleteIndicator(indicatorName, groupId));
    }
    deleteIndicatorGroupCb = (indicatorGroupName) => {
        this.props.dispatch(deleteIndicatorGroup(indicatorGroupName));
    }

    render() { 
        const indicatorGroups = this.props.indicatorGroups;
        return (
                <Switch>
                    <Redirect exact={true} from='/indicators/' to='/indicators/0' />
                    <Route path="/indicators/addindicator" render={() => <AddIndicatorForm 
                        indicatorGroups={indicatorGroups}
                        callback={{
                            addIndicator: this.addIndicatorCb,
                            deleteIndicator: this.deleteIndicatorCb
                        }}/>}></Route>
                    <Route path="/indicators/addindicatorgroup" render={() => <AddIndicatorGroupForm 
                        indicatorGroups={indicatorGroups}
                        callback={{
                            addIndicatorGroup: this.addIndicatorGroupCb,
                            deleteIndicatorGroup: this.deleteIndicatorGroupCb
                        }}/>}></Route>
                    <Route path="/indicators/:indicatorGroupId" render={(props) => <IndicatorList {...props} indicatorGroups={indicatorGroups}/>}></Route>
                </Switch>
        );
    }
}

// define what part of store will be passed into our smart component as Props
const putStateToProps = store => {
    return {
        indicatorGroups: store.indicatorGroups
    }
};

// what a syntax!#$
// export linked with store component
export default connect(putStateToProps)(Indicators)


