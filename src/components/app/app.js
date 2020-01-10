import React from "react";
import {Route, Switch} from "react-router-dom";
import './app.sass';

import Header from '../app-header';
import {AppMain, CartPage} from '../pages';
import AppFooter from "../app-footer";

const App = () => {
    return (
        <div className="App">
            <header>
                <Route path="/" component={Header}/>
            </header>
            <main>
                <Switch>
                    <Route path="/" component={AppMain} exact/>
                </Switch>
            </main>
            <footer>
                <Route path="/" component={CartPage}/>
                <Route path="/" component={AppFooter}/>
            </footer>
        </div>

    )
};

export default App;