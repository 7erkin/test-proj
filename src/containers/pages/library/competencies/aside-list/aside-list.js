import React, { Component } from 'react'
import { connect } from 'react-redux';
import AsideListView from '../../../../../components/pages/library/aside-list-view';

class AsideList extends Component {
    constructor(props){
        super(props);
    }

    onActiveGroupChange = id => {
        this.props.history.push(`/library/competencies-groups/${id}`);
    }

    onEditButtonClick = () => {
        this.props.history.push('/library/competencies-groups/edit');
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
                }} 
                editButton={{
                    onClick: this.onEditButtonClick
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