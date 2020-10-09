import React from "react";
import {Route, Switch} from "react-router-dom";
import './app.sass';

import Header from '../app-header';
import {AppMain, WelcomePage, Programs} from '../pages';
import AppFooter from "../app-footer";

const App = () => {
    return (
        <div className="App">
            <header id='headerApp'>
                <Route path="/" component={Header}/>
            </header>
            <main>
                <Switch>
                    <Route path="/" component={WelcomePage} exact/>
                    <Route path="/MainProduct" component={AppMain}/>
                    <Route path="/Programs" component={Programs}/>
                </Switch>
            </main>
            <footer>
                <Route path="/" component={AppFooter}/>
            </footer>
        </div>
    )
};


//<!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="/__/firebase/7.7.0/firebase-app.js"></script>
//
// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->
// <script src="/__/firebase/7.7.0/firebase-analytics.js"></script>
//
// <!-- Initialize Firebase -->
// <script src="/__/firebase/init.js"></script>

export default App;