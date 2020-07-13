import React, { Component, Fragment } from "react";
import MyOrdersTable from "../components/MyOrdersTable/MyOrdersTable";
import { connect } from "react-redux";
import { showOrderByCustomerId } from "../store/actions/orders";
import Navbar from "../Shared/Navbar/Navbar";
import { Button, Message } from "semantic-ui-react";
import history from "../history";

class MyOrders extends Component {
  componentDidMount() {
    const userId = localStorage.getItem("userId");
    this.props.showOrderByCustomerId(userId);
  }

  render() {
    return (
      <Fragment>
        <Navbar />
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h2>My Orders</h2>
              {this.props.orders.length ? (
                <MyOrdersTable orders={this.props.orders} />
              ) : (
                <Fragment>
                  <h4 style={{ textAlign: "center" }}></h4>
                  <Message style={{ textAlign: "center" }}>
                    No orders found
                  </Message>
                  <Button
                    icon="home"
                    content="Continue shopping"
                    color="blue"
                    onClick={() => history.push("/dashboard")}
                  />
                </Fragment>
              )}
            </div>
          </div>
        </div>
            <br/>
            <br/>
            <br/>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    orders: state.orders.orders,
  };
};
export default connect(mapStateToProps, { showOrderByCustomerId })(MyOrders);
