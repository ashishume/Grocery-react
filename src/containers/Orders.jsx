import React, { Component, Fragment } from "react";
import OrdersForm from "../components/Orders/OrdersForm";
import Navbar from "../Shared/Navbar/Navbar";
import CheckOutCalculation from "../components/PaymentCalculation/CheckOutCalculation";
import { GetAllStorageData } from "../Shared/StorageService";
import history from "../history";
import { addOrders, showAllOrders } from "../store/actions/orders";
import { connect } from "react-redux";

class Orders extends Component {
  onSubmitHandler = (e) => {
    let originalPrice = 0;
    let productDetails = [];
    this.state.cartInfo.map((info) => {
      originalPrice += info.originalPrice * info.quantity;

      productDetails.push({
        productName: info.name,
        productId: info._id,
        quantity: info.quantity,
        rate: info.originalPrice,
      });
    });

    const address = `City:${e.city}, PIN code:${e.pincode}, State:${e.state}, Address:${e.address}, Landmark:${e.landmark}, Phone:${e.phone}`;
    const body = {
      customerId: localStorage.getItem("userId"),
      customerName: e.name,
      Address: address,
      productDetails: productDetails,
      totalPricePaid: originalPrice,
    };
    this.props.addOrders(body);
  };
  state = {
    cartInfo: [],
  };

  componentDidMount() {
    this.setState({
      cartInfo: GetAllStorageData(),
    });

    this.props.showAllOrders();
  }

  onClickPaymentHandler = () => {
    // history.push("/checkout/orders");
  };
  render() {
    const body = {
      name: localStorage.getItem("name"),
    };
    return (
      <Fragment>
        <Navbar />
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <h3>Order summary</h3>
              <OrdersForm
                initialValues={body}
                onSubmitHandler={(e) => this.onSubmitHandler(e)}
              />
            </div>
            <div className="col-sm-6">
              <CheckOutCalculation
                onClickPaymentHandler={() => this.onClickPaymentHandler()}
                buttonText="Make payment"
                paymentInfo={this.state.cartInfo}
              />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    orders: state.orders.orders,
  };
};
export default connect(mapStateToProps, { showAllOrders, addOrders })(Orders);
