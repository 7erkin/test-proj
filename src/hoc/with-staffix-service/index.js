import React, { Component } from 'react'
import {StaffixServiceConsumer} from '../../context/staffix-service-context'

const withStaffixService = (WrappedComponent) => {
    return class extends Component {
        constructor(props) {
            super(props);
        }

        render() {
            return (
                <StaffixServiceConsumer>
                    {
                        (service) => {
                            return <WrappedComponent {...this.props} staffixService={service} />
                        }
                    }
                </StaffixServiceConsumer>
            );
        }
    }
}

export default withStaffixService;