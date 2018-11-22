/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { QueryRenderer, graphql } from "react-relay";
import environment from "./relay-environment";

export default class App extends Component {
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={graphql`
          query AppQuery {
            getBalance {
              principle
            }
          }
        `}
        render={({ error, props }) => {
          if (error) {
            return <View>{error.message}</View>;
          } else if (props) {
            return <View>great!</View>;
          }
          return <View>Loading</View>;
        }}
      />
    );
  }
}
