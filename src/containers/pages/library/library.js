import React, { Component } from 'react'
import { connect } from 'react-redux';
import withStaffixService from '../../../hoc/hoc-services/with-staffix-service';
import RequestTabs from '../../../components/pages/exist-request/request-tabs';

const tabs = [
    'Компетенции',
    'Индикаторы',
    'Вопросы'
]

class Library extends Component {
    constructor(props) {
        super(props);
    }

    onTabSwitch = () => {}

    render() {
        // const {
        //     currentTab
        // } = this.props;

        let body;

        // if(currentTab == 'Индикаторы')
        //     body = <Indicators />
        
        // if(currentTab == 'Компетенции')
        //     body = <Competencies />
            
        return (
            <section className="library">
                <h2>Библиотека</h2>
                <div>
                    <RequestTabs tabs={tabs} onTabSwitch={this.onTabSwitch} />
                </div>
            </section>
        );
    }
}

const mapStoreToProps = ({libraryPage}) => {
    return {}
}

export default connect(mapStoreToProps)(withStaffixService(Library));