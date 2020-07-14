import React, { Component, Fragment } from "react";
import MyOrdersTable from "../components/MyOrdersTable/MyOrdersTable";
import { connect } from "react-redux";
import { showAllOrders, updateOrder } from "../store/actions/orders";
import Navbar from "../Shared/Navbar/Navbar";
import { Button, Message } from "semantic-ui-react";
import history from "../history";

class AllOrders extends Component {
  componentDidMount() {
    this.props.showAllOrders();
  }
  updateOrderStatus = async (e) => {
    await this.props.updateOrder(e);
    await this.props.showAllOrders();
  };
  render() {
    return (
      <Fragment>
        <Navbar />
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h2>All Orders</h2>
              {this.props.orders.length ? (
                <MyOrdersTable
                  updateOrderStatus={(e) => this.updateOrderStatus(e)}
                  isAdminOrders={true}
                  orders={this.props.orders}
                />
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
        <br />
        <br />
        <br />
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    orders: state.orders.orders,
  };
};
export default connect(mapStateToProps, { updateOrder,showAllOrders })(
  AllOrders
);
