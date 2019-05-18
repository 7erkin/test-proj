import React, { Component, Fragment } from 'react'
import { entityGroup as namesGroupsEntities} from '../../containers/pages/library/utils';

const withCenterListData = WrappedContainer => {
    return class extends Component {
        constructor(props)
        {
            super(props);
            this._loaderData = {};

        }

        defineLoaderData = () => {
            const {staffixService, activeTab} = this.props;

            if(activeTab.toUpperCase() === namesGroupsEntities.COMPETENCE.toUpperCase() || activeTab === '')
                this._loaderData = staffixService.getCompetencies;
            if(activeTab.toUpperCase() === namesGroupsEntities.INDICATOR.toUpperCase())
                this._loaderData = staffixService.getIndicators;
            if(activeTab.toUpperCase() === namesGroupsEntities.QUESTION.toUpperCase())
                this._loaderData = staffixService.getQuestions;
        }

        render(){

            this.defineLoaderData();

            return <WrappedContainer {...this.props} getData={this._loaderData} />
        }
    }
}

export default withCenterListData;
