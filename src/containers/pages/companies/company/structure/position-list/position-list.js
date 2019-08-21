import React, { Component } from 'react'

import { connect } from 'react-redux'

import { startLoadingPositions, finishLoadingPositions } from '../../../../../../action-creators/companies-page/company-structure/network-waiting'

import {
    Link
} from 'react-router-dom'
import { saveLoadedPositions, updateDeletedPositions, updateVisiblePositions } from '../../../../../../action-creators/companies-page/company-structure/entities';
import LoadingIndicator from '../../../../../../components/common/loading-indicator/loading-indicator';
import DeleteFormView from '../../../../../../components/pages/library/delete-form-view'
import withStaffixService from '../../../../../../hoc/hoc-services/with-staffix-service';


// TODO: should reset store becaues deletedPositionsIds is remains after deleting
class PositionList extends Component {
    constructor(props) {
        super(props);
        this._idRequestedGroupIndicators = NaN;
    }

    _defineDescriptionGroup = (idGroup, groups) => {
        const index = groups.findIndex(el => el.id == idGroup);
        return groups[index].description;
    }

    componentDidMount() {
        const { match, dispatch, staffixService } = this.props;
        const id = match.params.idSubdivision;

        this._idRequestedGroupIndicators = id;

        dispatch(startLoadingPositions());
        staffixService.getPositions(id)
            .then(positions => {
                dispatch(saveLoadedPositions(positions));
                dispatch(finishLoadingPositions());
            })
    }

    // TODO call every time but it really need only every time after updating idGroup
    componentDidUpdate() {
        const { match, dispatch, staffixService } = this.props;
        const id = match.params.idGroup;

        if(this._idRequestedGroupIndicators == id)
            return;

        dispatch(startLoadingPositions());
        staffixService.getPositions(id)
            .then(positions => {
                this._idRequestedGroupIndicators = id;
                dispatch(saveLoadedPositions(positions));
                dispatch(finishLoadingPositions());
            })
    }

    onAddPositionClick = () => {
        const { history, match } = this.props;
        history.push(`${match.url}/add-position`);
    }

    onPositionCheck = (id) => {
        this.props.dispatch(updateDeletedPositions(id));
    }

    onDeletePositions = () => {
        const { dispatch, staffixService, deletedPositions } = this.props;

        dispatch(startLoadingPositions())
        staffixService.deletePositions(deletedPositions)
            .then(() => {
                dispatch(finishLoadingPositions())
            })
    }

    onSearchChange = pattern => {
        this.props.dispatch(updateVisiblePositions(pattern))
    }

    render() {
        const { positions, loadingPositions, subdivisions, match: {params: {idSubdivision}}, deletedPositions } = this.props;

        if(loadingPositions)
            return <LoadingIndicator />

        const renderPositionName = (itemId, name) => {
            return (
                <Link to={`/companies/${idSubdivision}/edit-position/${itemId}`}>
                    {name}
                </Link>
            );
        }

        return (
            <DeleteFormView
                onSearchChange={this.onSearchChange}
                hasCheckedItems={!!deletedPositions.length}
                searchPlaceholder="Введите название должности..."
                addButton={{
                    label: 'Добавить должность',
                    onClick: this.onAddIndicatorClick
                }}
                deleteButton={{
                    label: 'Удалить',
                    onClick: this.onDeleteIndicators
                }}
            >
            </DeleteFormView>
        );
    }
}

const mapStoreToProps = ({
    companiesPage: {
        companyStructure: {
            entities: {
                positions,
                subdivisions,
                deletedPositions
            },
            networkWaiting: {
                loadingPositions
            }
        }
    }
}) => {

    return {
        deletedPositions,
        positions,
        loadingPositions,
        subdivisions
    };
}

export default connect(mapStoreToProps)(withStaffixService(PositionList))