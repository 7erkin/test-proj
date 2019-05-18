import React from 'react'
import {StaffixServiceConsumer} from '../../../context/staffix-service-context'

export default WrappedContainer => {
    return class extends React.Component {
        constructor(props){
            super(props);
        }
        render() {
            return (
                <StaffixServiceConsumer>
                    {value => <WrappedContainer {...this.props} staffixService={value}/>}
                </StaffixServiceConsumer>
            );
        }
    }
} 