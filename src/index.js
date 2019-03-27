import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'

import App from './components/app'
// import ErrorBoundry from './containers/error-boundry'

import store from './store';
import { StaffixServiceProvider } from './context/staffix-service-context';
import DummyStaffixService from './services/dummy-staffix-service';

ReactDOM.render(
  <Provider store={store}>
      <BrowserRouter>
        <StaffixServiceProvider value={new DummyStaffixService()}>
          <App/>
        </StaffixServiceProvider>
      </BrowserRouter>
  </Provider>, document.getElementById('root'));
