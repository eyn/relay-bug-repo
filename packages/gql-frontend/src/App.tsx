import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { QueryRenderer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import environment from "./environment";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <QueryRenderer
            environment={environment}
            query={graphql`
              query HelloQuery {
                hello {
                  id
                }  
              }
            `}
            variables={{}}
            render={({ error, props }) => {
              if (error) {
                return <div>Error!</div>;
              }
              if (!props) {
                return <div>Loading...</div>;
              }
              return <div>User ID: {props.hello.id}</div>;
            }}
          />
        </header>
      </div>
    );
  }
}

export default App;
