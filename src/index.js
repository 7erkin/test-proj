import React from "react"
import ReactDOM from "react-dom"
import App from "./containers/app"

import store from './store'

import {
    BrowserRouter
} from 'react-router-dom'

import {Provider} from 'react-redux'
import { StaffixServiceProvider } from "./context/staffix-service-context";
import DummyStaffixService from "./services/dummy-staffix-service";

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <StaffixServiceProvider value={new DummyStaffixService()}>
                <App/>
            </StaffixServiceProvider>
        </BrowserRouter>
    </Provider>
, document.getElementById("root"));