import React, { Suspense, Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Loader from "../Shared/Loader/Loader";
import ProtectedRoutes from "./ProtectedRoutes";
import AdminProtectedRoutes from "./AdminProtectedRoutes";

const NewPassword = React.lazy(() =>
  import("../components/NewPassword/NewPassword")
);
const ForgotPassword = React.lazy(() =>
  import("../components/ForgotPassword/ForgotPassword")
);
const AllOrders = React.lazy(() => import("../containers/AllOrders"));
const PrivacyPolicy = React.lazy(() =>
  import("../components/PrivacyPolicy/PrivacyPolicy")
);
const TermsAndCondition = React.lazy(() =>
  import("../components/TermsAndCondition/TermsAndCondition")
);
const PaymentSuccess = React.lazy(() => import("../containers/PaymentSuccess"));
const MyOrders = React.lazy(() => import("../containers/MyOrders"));
const Orders = React.lazy(() => import("../containers/Orders"));
const Signin = React.lazy(() => import("../containers/Auth/Signin/Signin"));
const Signup = React.lazy(() => import("../containers/Auth/Signup/Signup"));
const Dashboard = React.lazy(() => import("../containers/Dashboard"));
const Category = React.lazy(() => import("../containers/Category"));
const Product = React.lazy(() => import("../containers/Product"));
const AdminPanelAccess = React.lazy(() =>
  import("../containers/AdminPanelAccess")
);
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
            <Route path="/privacy-policy" exact component={PrivacyPolicy} />
            <Route
              path="/terms-and-condition"
              exact
              component={TermsAndCondition}
            />
            <Route
              path="/auth/forgot-password"
              exact
              component={ForgotPassword}
            />
            <Route path="/auth/new-password/:id" exact component={NewPassword} />
            {/*Protected Routes */}

            <ProtectedRoutes
              path="/payment-complete"
              exact
              component={PaymentSuccess}
            />

            <ProtectedRoutes path="/my-orders" exact component={MyOrders} />
            <ProtectedRoutes path="/checkout/orders" exact component={Orders} />

            {/* Admin routes */}
            <AdminProtectedRoutes
              path="/admin-access-details"
              exact
              component={AdminPanelAccess}
            />
            <AdminProtectedRoutes
              path="/all-orders"
              exact
              component={AllOrders}
            />
            <AdminProtectedRoutes
              path="/add-product"
              exact
              component={Product}
            />
            <AdminProtectedRoutes
              path="/add-category"
              exact
              component={Category}
            />
            <AdminProtectedRoutes
              path="/add-image-link"
              exact
              component={ImageLinksTable}
            />

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
