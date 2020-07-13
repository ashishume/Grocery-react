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
    console.log(query);
    console.log(localStorage.getItem("pendingOrder"));

    // this.props.addOrders()
  }

  render() {
    return (
      <Fragment>
        <Navbar />
        <div className="container">
          <div className="row">
            <div className="col-sm-12" style={{ textAlign: "center" }}>
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
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
export default connect("", { addOrders })(PaymentSuccess);
