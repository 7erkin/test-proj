import React, {Component} from 'react'

import LibraryTabsView from '../../../../components/pages/library/library-tabs-view';

class CompanyTabs extends Component {
    constructor(props){
        super(props);
    }

    onClick = tabName => {
        const {
            history,
            match: {
                params: {
                    idCompany
                }
            }
        } = this.props

        if(tabName.toUpperCase() == 'ОСНОВНАЯ ИНФОРМАЦИЯ')
            history.push(`/companies/${idCompany}/info`)

        if(tabName.toUpperCase() == 'ОРГАНИЗАЦИОННАЯ СТРУКТУРА')
            history.push(`/companies/${idCompany}/structure`)
        
        if(tabName.toUpperCase() == 'МОДЕЛЬ КОМПЕТЕНЦИЙ')
            history.push(`/companies/${idCompany}/competencies-model`)

        if(tabName.toUpperCase() == 'ЗАЯВКИ')
            history.push(`/companies/${idCompany}/requests`)
    }

    render() {
        const {
            url
        } = this.props

        return (
            <LibraryTabsView 
                tabs={[
                    {
                        name: 'Основная информация',
                        url: `${url}/info`
                    },
                    {
                        name: 'Организационная структура',
                        url: `${url}/structure`
                    },
                    {
                        name: 'Модель компетенций',
                        url: `${url}/competencies-model`
                    },
                    {
                        name: 'Заявки',
                        url: `${url}/requests`
                    }
                ]}
                onClick={this.onClick} />
        );
    }
} 

export default CompanyTabs;