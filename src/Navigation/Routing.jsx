import React, { Suspense, Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Loader from "../Shared/Loader/Loader";
import ProtectedRoutes from "./ProtectedRoutes";
const Signin = React.lazy(() => import("../containers/Auth/Signin/Signin"));
const Signup = React.lazy(() => import("../containers/Auth/Signup/Signup"));
const Dashboard = React.lazy(() => import("../containers/Dashboard"));
const Category = React.lazy(() => import("../containers/Category"));
const Product = React.lazy(() => import("../containers/Product"));
const ImageLinksTable = React.lazy(() =>
  import("../components/ImageLinksTable/ImageLinksTable")
);
const CheckoutCart = React.lazy(() => import("../containers/CheckoutCart"));
const ProductDetails = React.lazy(() => import("../containers/ProductDetails"));
const ShowAllProductsList = React.lazy(() =>
  import("../containers/ShowProductsList")
);

class MainNavigation extends Component {
  render() {
    return (
      <div>
        <Suspense fallback={<Loader />}>
          <Switch>
            <Route path="/auth/signin" exact component={Signin} />
            <Route path="/" exact component={Dashboard} />
            <Route path="/auth/signup" exact component={Signup} />
            <Route path="/category/:id" exact component={ShowAllProductsList} />
            <Route path="/grocery/:id" exact component={ProductDetails} />
            <Route path="/checkout/cart" exact component={CheckoutCart} />
            <Route path="*" component={() => "404 NOT FOUND"}>
              {/*Protected Routes */}

              <ProtectedRoutes path="/add-product" exact component={Product} />
              <ProtectedRoutes
                path="/add-category"
                exact
                component={Category}
              />
              <ProtectedRoutes
                path="/add-image-link"
                exact
                component={ImageLinksTable}
              />

              <Redirect to="/" />
            </Route>
          </Switch>
        </Suspense>
      </div>
    );
  }
}

export default MainNavigation;
