import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import ProjectDashboard from './containers/project-dashboard';
import reducers from './reducers';

require('../sass/main.scss');

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <ProjectDashboard />
    </Provider>
    , document.querySelector('.container')
);
