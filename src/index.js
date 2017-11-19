import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';

import ProjectDashboard from './containers/project-dashboard';
import reducers from './reducers';

require('../sass/main.scss');

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <ProjectDashboard />
    </Provider>
    , document.querySelector('.container-fluid')
);
