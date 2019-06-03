import React, { Component } from 'react'
import { connect } from 'react-redux';
import AsideListView from '../../../../../components/pages/library/aside-list-view';

class AsideList extends Component {
    constructor(props){
        super(props);
    }

    onActiveGroupChange = id => {
        this.props.history.push(`/library/questions-groups/${id}`);
    }

    onEditButtonClick = () => {
        this.props.history.push('/library/questions-groups/edit');
    }

    render() {
        const {
            questionsGroups
        } = this.props;

        return (
            <AsideListView 
                items={{
                    values: questionsGroups, 
                    onClick: this.onActiveGroupChange
                }} 
                editButton={{
                    name: 'Edit', 
                    onClick: this.onEditButtonClick
                }}/>
        );
    }
}

const mapStoreToProps = ({
    libraryPage: {
        questionsGroups
    }
}) => {
    return {
        questionsGroups
    }
}

export default connect(mapStoreToProps)(AsideList);