import React from 'react';
import {RootContainer} from 'react-relay';
import TreasureHunt from './treasureHunt';
import TreasureHuntRoute from './treasureHuntRoute';

export default class Game extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{height: 400}}>
                <RootContainer Component={TreasureHunt} route={new TreasureHuntRoute()} />
            </div>
        );
    }
}