import React from 'react'
import {StaffixServiceConsumer} from '../../../context/staffix-service-context'

export default WrappedComponent => {
    return class extends React.Component {
        constructor(props){
            super(props);
        }
        render() {
            return (
                <StaffixServiceConsumer>
                    {value => <WrappedComponent {...this.props} staffixService={value}/>}
                </StaffixServiceConsumer>
            );
        }
    }
} 