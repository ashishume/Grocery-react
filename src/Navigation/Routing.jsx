import React, { Suspense, Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Loader from "../Shared/Loader/Loader";
const Dashboard = React.lazy(() => import("../containers/Dashboard"));
const Category = React.lazy(() => import("../containers/Category"));
const Product = React.lazy(() => import("../containers/Product"));

class MainNavigation extends Component {
  render() {
    return (
      <div>
        <Suspense fallback={<Loader />}>
          <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route path="/add-category" exact component={Category} />
            <Route path="/add-product" exact component={Product} />
            <Route path="*" component={() => "404 NOT FOUND"}>
              <Redirect to="/" />
            </Route>
          </Switch>
        </Suspense>
      </div>
    );
  }
}

export default MainNavigation;
