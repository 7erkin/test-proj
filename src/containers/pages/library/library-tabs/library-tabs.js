import React, {Component} from 'react'
import { connect } from 'react-redux';


import LibraryTabsView from '../../../../components/pages/library/library-tabs-view';

class LibraryTabs extends Component{
    constructor(props){
        super(props);
        this._tabs = ["Компетенции", "Индикаторы", "Вопросы"];
    }

    onTabClick = tabName => {
        this.props.history.push('');
    }

    render() {
        const {activeTab} = this.props;
        return <LibraryTabsView activeTab={activeTab} tabs={this._tabs} onClick={this.onTabClick}/>;
    }
}

const mapStoreToProps = ({libraryPage: {activeTab}}) => {
    return {
        activeTab
    };
}

export default connect(mapStoreToProps)(LibraryTabs);