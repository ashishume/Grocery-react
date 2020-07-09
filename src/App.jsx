import React, { Component } from "react";
import MainNavigation from "./Navigation/Routing";
import Interceptor from "./Shared/Interceptor";
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Interceptor />
        <MainNavigation />
      </React.Fragment>
    );
  }
}

export default App;
