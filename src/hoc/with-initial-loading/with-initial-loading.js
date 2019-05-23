import React, { Component } from 'react'

import {
    startInitialLoading,
    finishInitialLoading,
    saveLoadedGroupsEntities,
    saveLoadedEntities
} from '../../action-creators/library-page'

// если групп не загружено, то загружаем группы, определяем 
// по умолчанию отображаемую группу, загружаем ее сущности и затем отрисовываем 
// обернутые контейнеры
const withInitialLoading = WrappedContainer => {

    return class extends Component {
        constructor(props) {
            super(props);
        }

        componentDidMount() {
            const {
                dispatch,
                staffixService
            } = this.props;

            staffixService.getCompetencies()
                .then(data => dispatch(saveLoadedGroupsEntities(data)));
        }

        render() {
            if(this.props.groupsEntities.length === 0)
                return <h2>Loading...</h2>;

            return (
                <WrappedContainer {...this.props}/>
            );
        }
    }
}

export default withInitialLoading;
