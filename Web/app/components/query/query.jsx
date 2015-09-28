import React from 'react';
import GraphiQL from 'graphiql';
import fetch from 'isomorphic-fetch';

export default class Query extends React.Component {
    constructor(props) {
        super(props);
    }

    graphQLFetcher(graphQLParams) {
        console.log(JSON.stringify(graphQLParams));
        return fetch(window.location.origin + '/api/graphql', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(graphQLParams),
        }).then(response => response.json());
    }

    render() {
        return (
                <div style={{height: 400}}>
                    <GraphiQL fetcher={this.graphQLFetcher} />
                </div>
        );
    }
}
