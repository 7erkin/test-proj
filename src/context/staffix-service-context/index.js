import React, {Context} from 'react'

const {Provider: StaffixServiceProvider, Consumer: StaffixServiceConsumer} = React.createContext();

export {
    StaffixServiceProvider,
    StaffixServiceConsumer
}