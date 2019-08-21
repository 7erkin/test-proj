import React, { Component } from 'react'
import AsideListView from '../../../../../../components/pages/library/aside-list-view';
import { connect } from 'react-redux';

class SubdivisionAsideList extends Component {

    onSubdivisionClick = () => {}

    onEditSubdivisionsClick = () => {}

    render() {
        const { subdivisions } = this.props

        return (
            <AsideListView 
                items={{
                    values: subdivisions,
                    onClick: this.onSubdivisionClick
                }} 
                editButton={{
                    onClick: this.onEditSubdivisionsClick
                }} />
        )
    }
}

const mapStateToProps = ({
    companiesPage: {
        companyStructure: {
            entities: {
                subdivisions
            }
        }
    }
}) => {
    return {
        subdivisions
    }
}

export default connect(mapStateToProps)(SubdivisionAsideList)