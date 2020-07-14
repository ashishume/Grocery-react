import React, { Component } from "react";
import MainNavigation from "./Navigation/Routing";
import Interceptor from "./Shared/Interceptor";
import Footer from "./components/Footer/Footer";
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <MainNavigation />
        <Interceptor />
        <Footer/>
      </React.Fragment>
    );
  }
}

export default App;
