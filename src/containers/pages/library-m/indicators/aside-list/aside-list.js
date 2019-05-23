import React, { Component } from 'react'
import { connect } from 'react-redux';
import AsideListView from '../../../../../components/pages/library/aside-list-view';

class AsideList extends Component {
    constructor(props){
        super(props);
    }

    onActiveGroupChange = id => {
        this.props.history.push(`/library/indicators-groups/${id}`);
    }

    onEditButtonClick = () => {
        this.props.history.push('/library/indicators-groups/edit');
    }

    render() {
        const {
            indicatorsGroups
        } = this.props;

        return (
            <AsideListView 
                items={{
                    values: indicatorsGroups, 
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
        indicatorsGroups
    }
}) => {
    return {
        indicatorsGroups
    }
}

export default connect(mapStoreToProps)(AsideList);