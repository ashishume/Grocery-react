import React, { Component, Fragment } from "react";
import { Icon, Button } from "semantic-ui-react";
import { addOrders } from "../store/actions/orders";
import { connect } from "react-redux";
import Navbar from "../Shared/Navbar/Navbar";
import history from "../history";
import queryString from "query-string";

class PaymentSuccess extends Component {

  componentDidMount() {
    const { location } = this.props;
    const query = queryString.parse(location.search);
    const pendingOrder = JSON.parse(localStorage.getItem("pendingOrder"));
    this.props.addOrders(pendingOrder);
  }

  render() {
    return (
      <Fragment>
        <Navbar />
        <div className="container">
          <div className="row">
            <div className="col-sm-12" style={{ textAlign: "center" }}>
              <Fragment>
                <h2 style={{ fontWeight: "lighter" }}>
                  Congratulations your order has been confirmed
                </h2>
                <Icon name="check circle" size="massive" color="green" />
                <br />
                <br />
                <Button onClick={() => history.push("/my-orders")}>
                  <Icon name="cart" />
                  My Orders
                </Button>
              </Fragment>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
export default connect("", { addOrders })(PaymentSuccess);
