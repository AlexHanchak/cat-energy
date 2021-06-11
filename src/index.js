import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';

import App from './components/app';
import ErrorBoundry from "./components/error-boundry";
import {FoodstoreService} from "./services/foodstore-service";
import {FoodstoreServiceProvider} from "./components/foodstore-service-context";
import store from "./store";
import './res.sass';
import "bootstrap";

const foodstoreService = new FoodstoreService();

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry>
            <FoodstoreServiceProvider value={foodstoreService}>
                <Router>
                    <App/>
                </Router>
            </FoodstoreServiceProvider>
        </ErrorBoundry>
    </Provider>
    , document.getElementById('root')
);
