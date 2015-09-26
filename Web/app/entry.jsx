import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route} from 'react-router';

import App from './app';
import Query from './query';
import Game from './game';

ReactDOM.render(
    <Router>
        <Route component={App} path="/">
            <Route path="query" component={Query} />
            <Route path="game" component={Game} />
        </Route>
    </Router>
    ,document.getElementById('app')
);
