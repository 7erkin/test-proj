import React, { Component } from 'react'

import LibraryView from '../../../components/pages/library/library-view';
import LibraryTabs from './library-tabs';
import LibraryContentView from '../../../components/pages/library/library-content-view';
import AsideList from './aside-list';
import CenterList from './center-list';

const Library = () => {
    return (
        <LibraryView>
            <LibraryTabs />
            <LibraryContentView>
                <AsideList />
                <CenterList />
            </LibraryContentView>
        </LibraryView>
    );
}

export default Library;