import React, { Component } from 'react'
import { connect } from 'react-redux';
import withStaffixService from '../../../../hoc/hoc-services/with-staffix-service';
import withEffectApplyingChanges from '../../../../hoc/with-effect-applying-changes';

class questions extends Component {
    constructor(props){
        super(props);
        this._initialIndicatorGroupId = NaN;
    }

    // incorrect for empty groups
    _defineIdGroupDefaultRendering = (groups) => {
        return groups[0].id;
    }

    _isComeByReference = () => {
        return this.props.history.url === '/library/questions-groups';
    }

    _defineIdGroupRendering = (groups) => {
        if(this._isComeByReference()) 
            return Number(this.props.history.match.params.idGroup);

        return this._defineIdGroupDefaultRendering(groups);
    }

    componentWillUnmount() {
        const {
            dispatch
        } = this.props;

        dispatch(resetInitialLoading());
    }

    componentDidMount() {
        const {
            dispatch,
            staffixService
        } = this.props;

        staffixService.getGroupsquestions()
            .then(groups => {
                dispatch(saveLoadedquestionsGroups(groups));
                this._initialIndicatorGroupId = this._defineIdGroupRendering(groups);
                dispatch(fulfilInitialLoading());
            })
    }

    componentDidUpdate() {
        const {
            dispatch,
            staffixService,
            loadingInitial
        } = this.props;

        if(loadingInitial)
            return;
    
            staffixService.getGroupsquestions()
                .then(groups => {
                    dispatch(saveLoadedquestionsGroups(groups));
                    this._initialIndicatorGroupId = this._defineIdGroupRendering(groups);
                    dispatch(fulfilInitialLoading());
                })
    }

    render() {
        const {
            loadingInitial
        } = this.props;

        if(!loadingInitial)
            return <h2>Loading...</h2>

        return (
            <Switch>
                <Redirect exact={true} from="/library/questions-groups" to={`/library/questions-groups/${this._initialIndicatorGroupId}`} />
                <Route path="/library/questions-groups/:idGroup" render={props => {
                    return (
                        <Fragment>
                            <AsideList {...props}/>
                            <Switch>
                                <Route exact path="/library/questions-groups/:idGroup/add-indicator" render={(props) => <FormAddIndicator {...props}/>}/>
                                <Route exact path="/library/questions-groups/:idGroup/edit-indicator/:idIndicator" render={(props) => <FormEditIndicator {...props}/>}/>
                                <Route exact path="/library/questions-groups/edit" render={(props) => <ListGroupsquestions {...props}/>}/>
                                <Route exact path="/library/questions-groups/edit/:idGroup" render={(props) => <FormEditGroupquestions {...props}/>}/>
                                <Route exact path="/library/questions-groups/add" render={(props) => <FormAddGroupquestions {...props}/>}/>
                                <Route exact path="/library/questions-groups/:idGroup" render={(props) => <Listquestions {...props}/>}/>
                            </Switch>
                        </Fragment>
                    );
                }} />
            </Switch>
        );
    }
}

const mapStoreToProps = ({
    libraryPage: {
        loadingInitial
    }
}) => {
    return {
        loadingInitial
    };
}

export default connect(mapStoreToProps)(withStaffixService(questions));