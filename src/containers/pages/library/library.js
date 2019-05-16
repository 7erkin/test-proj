import React, { Component } from 'react'
import { connect } from 'react-redux';
import withStaffixService from '../../../hoc/hoc-services/with-staffix-service';
import PropTypes from 'prop-types'
import Indicators from './indicators';

import {entityGroup} from './utils'
import LibraryView from '../../../components/pages/library/library-view';
import LibraryTabs from './library-tabs';
import LibraryContentView from '../../../components/pages/library/library-content-view';
import Competencies from './competencies';
import AsideList from './aside-list';

import {
    switchTab
} from '../../../action-creators/library-page'

class Library extends Component {
    constructor(props) {
        super(props);
    }

    componentWillUnmount() {
        this.props.dispatch(switchTab(''));
    }

    render() {
        const {activeTab} = this.props;

        let body = null;

        if(activeTab.toUpperCase() === entityGroup.COMPETENCE.toUpperCase() || activeTab.length === 0)
            body = <Competencies />
        
        if(activeTab.toUpperCase() === entityGroup.INDICATOR.toUpperCase())
            body = <Indicators />
        
        if(activeTab.toUpperCase() === entityGroup.QUESTION.toUpperCase())
            body = <h2>Not ready yet</h2>

        if(body === null) return null;
            
        return (
            <LibraryView>
                <LibraryTabs />
                <LibraryContentView>
                    <AsideList />
                    {
                        body
                    }
                </LibraryContentView>
            </LibraryView>
        );
    }
}

Library.propTypes = {
    activeTab: PropTypes.string.isRequired
}

const mapStoreToProps = ({libraryPage: {activeTab}}) => {
    return {
        activeTab
    }
}

export default connect(mapStoreToProps)(withStaffixService(Library));