import SearchBar from 'material-ui-search-bar'
import React from 'react';

const style = {
    margin: '0 auto',
    maxWidth: 800
}

export default (props) => {
    return <SearchBar {...props} style={style} />
}