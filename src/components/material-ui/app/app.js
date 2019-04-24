import Drawer from './custom-drawer'
import Settings from '@material-ui/icons/Settings'
import People from '@material-ui/icons/People'
import List from '@material-ui/icons/List'
import Book from '@material-ui/icons/Book'
import React from 'react'

import {Link} from 'react-router-dom'
const localHoc = items => WrappedComponent => {
    return (props) => {
        return <WrappedComponent menuElements={items} {...props} />
    }
}

const items = [
    {
        to: '/requests',
        name: 'Заявки',
        icon: <List />
    },
    {
        to: '/companies',
        name: 'Компании',
        icon: <People />
    },
    {
        to: '/libraries',
        name: 'Библиотека',
        icon: <Book />
    },
    {
        to: '/settings',
        name: 'Настройки',
        icon: <Settings />
    }
]
export default localHoc(items)(Drawer);