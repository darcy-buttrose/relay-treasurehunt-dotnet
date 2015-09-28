import {Route, QL} from 'react-relay';

export default class extends Route {
    static path = '/';
    static queries = {
        game : () => QL`query { game }`
    };
    static routeName = 'TreasureHuntRoute';
}