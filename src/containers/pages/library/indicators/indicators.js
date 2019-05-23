import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types'

class Indicators extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {
            visibleFormAddIndicator,
            visibleFormAddGroupIndicators,
            visibleFormEditIndicator,
            visibleFormEditGroupIndicators
        } = this.props;

        if(visibleFormAddIndicator)
            return <FormAddIndicator />
        
        if(visibleFormAddGroupIndicators)
            return <FormAddGroupIndicators />
        
        if(visibleFormEditIndicator)
            return <FormEditIndicator />
        
        if(visibleFormEditGroupIndicators)
            return <FormEditGroupIndicators />

        return <ListIndicators />
    }
}

Indicators.propTypes = {
    visibleFormAddIndicator: PropTypes.bool.isRequired,
    visibleFormAddGroupIndicators: PropTypes.bool.isRequired,
    visibleFormEditIndicator: PropTypes.bool.isRequired,
    visibleFormEditGroupIndicators: PropTypes.bool.isRequired,
}

const mapStoreToProps = ({libraryPage: {
    visibleFormAddEntity: visibleFormAddIndicator,
    visibleFormAddGroupEntities: visibleFormAddGroupIndicators,
    visibleFormEditEntity: visibleFormEditIndicator,
    visibleFormEditGroupEntities: visibleFormEditGroupIndicators
}}) => {
    return {
        visibleFormAddIndicator,
        visibleFormAddGroupIndicators,
        visibleFormEditIndicator,
        visibleFormEditGroupIndicators
    }
}

export default connect(mapStoreToProps)(Indicators);