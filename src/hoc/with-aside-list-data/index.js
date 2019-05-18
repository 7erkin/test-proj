import React, { Component, Fragment } from 'react'
import { entityGroup as namesGroupsEntities} from '../../containers/pages/library/utils';

const withAsideListData =  WrappedContainer => {
    return class extends Component {
        constructor(props)
        {
            super(props);
            this._loaderData = () => {};
        }

        _defineLoaderData = () => {
            const {staffixService, activeTab} = this.props;


            if(activeTab.toUpperCase() === namesGroupsEntities.COMPETENCE.toUpperCase() || activeTab === '')
                this._loaderData = staffixService.getGroupsCompetenies;
            if(activeTab.toUpperCase() === namesGroupsEntities.INDICATOR.toUpperCase())
                this._loaderData = staffixService.getGroupsIndicators;
            if(activeTab.toUpperCase() === namesGroupsEntities.QUESTION.toUpperCase())
                this._loaderData = staffixService.getGroupsQuestions;
        }

        render(){
            this._defineLoaderData();

            return <WrappedContainer {...this.props} getData={this._loaderData} />
        }
    }
}

export default withAsideListData;
