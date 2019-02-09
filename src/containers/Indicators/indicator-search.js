import React from 'react'

class SearchIndicators extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <input type="search" onChange={(event) => {
                this.props.callback.onIndicatorSearch(event.target.value)
            }}/>
        );
    }
}

export default SearchIndicators;