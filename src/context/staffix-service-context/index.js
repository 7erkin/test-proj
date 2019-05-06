import React from 'react'

const {Provider: StaffixServiceProvider, Consumer: StaffixServiceConsumer} = React.createContext();

export {
    StaffixServiceConsumer,
    StaffixServiceProvider
}