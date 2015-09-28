import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route} from 'react-router';

import App from './components/app';
import Query from './components/query/query';
import Game from './components/game/game';

ReactDOM.render(
    <Router>
        <Route component={App} path="/">
            <Route path="query" component={Query} />
            <Route path="game" component={Game} />
        </Route>
    </Router>
    ,document.getElementById('app')
);
