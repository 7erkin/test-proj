import React, {Component} from 'react'

import LibraryTabsView from '../../../../components/pages/library/library-tabs-view';

class LibraryTabs extends Component {
    constructor(props){
        super(props);
    }

    onClick = tabName => {
        if(tabName.toUpperCase() == 'ИНДИКАТОРЫ')
            this.props.history.push('/library/indicators-groups')

        if(tabName.toUpperCase() == 'КОМПЕТЕНЦИИ')
            this.props.history.push('/library/competencies-groups')
        
        if(tabName.toUpperCase() == '')
            this.props.history.push('/library/indicators-groups')
    }

    render() {

        return (
            <LibraryTabsView 
                tabs={[
                    {
                        name: 'Компетенции',
                        url: '/library/competencies-groups'
                    },
                    {
                        name: 'Индикаторы',
                        url: '/library/indicators-groups'
                    },
                    {
                        name: 'Вопросы',
                        url: ''
                    }
                ]}
                onClick={this.onClick} />
        );
    }
} 

export default LibraryTabs;