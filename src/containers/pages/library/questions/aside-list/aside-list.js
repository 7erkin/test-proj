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
            competenciesGroups
        } = this.props;

        return (
            <AsideListView 
                items={{
                    values: competenciesGroups, 
                    onClick: this.onActiveGroupChange
                }}/>
        );
    }
}

const mapStoreToProps = ({
    libraryPage: {
        competenciesPage: {
            common: {
                competenciesGroups
            }
        }
    }
}) => {
    return {
        competenciesGroups
    }
}

export default connect(mapStoreToProps)(AsideList);