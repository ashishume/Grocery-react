import React, { Component, Fragment } from "react";
import OrdersForm from "../components/Orders/OrdersForm";
import Navbar from "../Shared/Navbar/Navbar";
import CheckOutCalculation from "../components/PaymentCalculation/CheckOutCalculation";
import { GetAllStorageData } from "../Shared/StorageService";
import history from "../history";
import { addOrders, showAllOrders } from "../store/actions/orders";
import { connect } from "react-redux";
import { Button } from "semantic-ui-react";
import HttpService from "../API/HttpService";
import { API_NAME } from "../API/ApiPaths";
class Orders extends Component {
  onSaveAdress = (e) => {
    localStorage.setItem("phone", e.phone);
    const address = `City:${e.city}, PIN code:${e.pincode}, State:${e.state}, Address:${e.address}, Landmark:${e.landmark}, Phone:${e.phone}`;
    localStorage.setItem("address", JSON.stringify(address));
    this.setState({
      addressSaved: true,
    });
    // this.props.addOrders(body);
  };
  state = {
    cartInfo: [],
    addressSaved: false,
  };

  componentDidMount() {
    this.setState({
      cartInfo: GetAllStorageData(),
    });

    this.props.showAllOrders();

    // window.location.href = "https://www.google.com/";
  }

  onClickPaymentHandler = () => {
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

    const body = {
      customerId: localStorage.getItem("userId"),
      customerName: localStorage.getItem("name"),
      Address: localStorage.getItem("address"),
      productDetails: productDetails,
      totalPricePaid: originalPrice,
    };

    const data = JSON.stringify(body, function replacer(key, value) {
      return value;
    });
    localStorage.setItem("pendingOrder", data);
    this.makePayment(body.totalPricePaid);
  };

  makePayment = (amount) => {
    const orderId = "order_" + Math.floor(Math.random(0, 10000) * 100000);
    const body = {
      name: localStorage.getItem("name"),
      amount: amount,
      returnUrl: `${window.location.origin}/payment-complete`,
      orderId: orderId,
      email: localStorage.getItem("email"),
      phone: localStorage.getItem("phone"),
    };
    console.log(body);

    HttpService.post(API_NAME.PAYMENTS, body).then((response) => {
      console.log(response);
      if (response.status == 201)
        window.location.href = response.data.paymentLink;
    });
  };

  removeAddressHandler = () => {
    localStorage.removeItem("address");
    this.setState({
      addressSaved: false,
    });
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
              {!this.state.addressSaved && !localStorage.getItem("address") ? (
                <OrdersForm
                  initialValues={body}
                  onSubmitHandler={(e) => this.onSaveAdress(e)}
                />
              ) : (
                <Fragment>
                  <h2>Saved Address</h2>
                  <p>{JSON.parse(localStorage.getItem("address"))}</p>
                  <Button
                    color="red"
                    onClick={() => this.removeAddressHandler()}
                  >
                    Remove Address
                  </Button>
                </Fragment>
              )}
            </div>
            <div className="col-sm-6">
              <CheckOutCalculation
                onClickPaymentHandler={() => this.onClickPaymentHandler()}
                disabledButton={
                  !this.state.addressSaved &&
                  !Boolean(localStorage.getItem("address"))
                }
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
