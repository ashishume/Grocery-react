import React, { Component, Fragment } from "react";
import OrdersForm from "../components/Orders/OrdersForm";
import Navbar from "../Shared/Navbar/Navbar";
import CheckOutCalculation from "../components/PaymentCalculation/CheckOutCalculation";
import { GetAllStorageData } from "../Shared/StorageService";
import { addOrders, showAllOrders } from "../store/actions/orders";
import { connect } from "react-redux";
import { Button, Dropdown } from "semantic-ui-react";
import HttpService from "../API/HttpService";
import { API_NAME } from "../API/ApiPaths";
class Orders extends Component {
  paymentOptions = [
    { key: "Online Payment", text: "Online Payment", value: "Online Payment" },
    {
      key: "Cash on Delivery",
      text: "Cash on Delivery",
      value: "Cash on Delivery",
    },
  ];
  onSaveAdress = (e) => {
    localStorage.setItem("phone", e.phone);
    const address = `City:${e.city}, PIN code:${e.pincode}, State:${e.state}, Address:${e.address}, Landmark:${e.landmark}, Phone:${e.phone}`;
    localStorage.setItem("address", JSON.stringify(address));
    this.setState({
      addressSaved: true,
    });
  };
  state = {
    cartInfo: [],
    addressSaved: false,
    isOnline: true,
    modeOfPayment: "Online Payment",
  };

  componentDidMount() {
    this.setState({
      cartInfo: GetAllStorageData(),
    });
    this.props.showAllOrders();
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

    const mailBody = {
      email: localStorage.getItem("email"),
      subject: `Your Order has been successfully placed`,
      html: ` <div
    border: solid 1px gray;
      border-radius: 10px;
      text-align: left;
      padding: 10px;
      margin: 10px;
      width: 400px;
      height: 400px;
      @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
      font-family: 'Roboto', sans-serif;
      font-size: 20px;
      line-height: 30px;
    "
  >
    Hi Ashish Debnath,<br />
    Your order has been placed successfully<br />
    Please refer to the my orders get more details
    <a href="https://shopnsave39.com/my-orders" target="_blank">click here</a>
    Order details:<br/ >
    Name: ${localStorage.getItem("name")}<br />
    Address:${localStorage.getItem("address")}<br />
    Total Amount: ₹ ${originalPrice}<br />
    Paid via: ${this.state.modeOfPayment}<br />
    <br />
  </div>`,
    };
    const body = {
      customerId: localStorage.getItem("userId"),
      customerName: localStorage.getItem("name"),
      Address: localStorage.getItem("address"),
      productDetails: productDetails,
      totalPricePaid: originalPrice,
      modeOfPayment: this.state.modeOfPayment,
    };
    const mailData = JSON.stringify(mailBody);
    localStorage.setItem("mailData", mailData);
    if (this.state.modeOfPayment === "Online Payment") {
      const data = JSON.stringify(body, function replacer(key, value) {
        return value;
      });
      localStorage.setItem("pendingOrder", data);
      this.makePayment(body.totalPricePaid);
    } else {
      this.props.addOrders(body);
    }
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
    HttpService.post(API_NAME.PAYMENTS, body).then((response) => {
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
  onChangeOfModeOfPaymentDetails = (e, data) => {
    this.setState({
      modeOfPayment: data.value,
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
              <br />
              <br />
              <Dropdown
                fluid
                value={this.state.modeOfPayment}
                placeholder="Mode of payment"
                onChange={(e, data) =>
                  this.onChangeOfModeOfPaymentDetails(e, data)
                }
                selection
                options={this.paymentOptions}
              />
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
