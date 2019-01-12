import React, { Component } from "react";
import graphql from "babel-plugin-relay/macro";
import environment from "./environment";
import { QueryRenderer } from "react-relay";

const query = graphql`
  query App_Hello1Query($id: ID!) {
    hello(id: $id) {
      id
      text,
      date
    }
  }
`;

class App extends Component {
  state = {
    id: 1,
    nonce: 1
  };

  render() {
    const { id, nonce } = this.state;
    return (
      <div className="App">
        <div>
          State Id: {id}<br/>
          State Nonce: {nonce}<br />
        </div>
        <br />
        <QueryRenderer
          environment={environment}
          query={query}
          variables={{ id: String(id), nonce }}
          render={({ error, props }) => {
            if (error) {
              return <div>Error!</div>;
            }
            if (!props) {
              return <div>Loading...</div>;
            }
            return <div>User: {JSON.stringify(props.hello)}</div>;
          }}
        />
        <QueryRenderer
          environment={environment}
          query={graphql`
            query App_Hello2Query($id: ID!) {
              hello(id: $id) {
                id
                text
                date
              }
            }
          `}
          variables={{ id: "1", nonce }}
          render={({ error, props }) => {
            if (error) {
              return <div>Error!</div>;
            }
            if (!props) {
              return <div>Loading...</div>;
            }
            return <div>User: {JSON.stringify(props.hello)}</div>;
          }}
        />
        <br />
        <button
          onClick={() => this.setState({ nonce: nonce + 1 })}
        >
          Increment Nonce
        </button>
        <button onClick={() => this.setState({ id: id + 1 })}>Increment Id</button>
        <button onClick={() => console.log(environment)}>
          Print Environment
        </button>
        <div>
          <ol>
            <li>Click Update Nonce a few times</li>
            <li>Click Increment a few times</li>
            <li>Click Update Nonce</li>
            <li>id of top item switches back to 1</li>
          </ol>
        </div>
      </div>
    );
  }
}

export default App;
