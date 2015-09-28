import React from 'react';
import {Link} from 'react-router';
import {LinkContainer} from 'react-router-bootstrap';
import {Navbar, Nav, NavItem} from 'react-bootstrap';

export default class App extends React.Component {
    render() {
        return (
            <div>
            <Navbar brand="Treasure Hunt">
                <Nav>
                    <LinkContainer to="game">
                        <NavItem>Game</NavItem>
                    </LinkContainer>
                    <LinkContainer to="query">
                        <NavItem>Query</NavItem>
                    </LinkContainer>
                </Nav>
            </Navbar>
            {this.props.children}
            </div>
        );
    }
}