import React, { Component, Fragment } from "react";
import Cart from "../components/Cart/Cart";
import Navbar from "../Shared/Navbar/Navbar";
import { Container } from "semantic-ui-react";

import {
  QuantityStorageService,
  RemoveFromCartService,
  GetAllStorageData,
} from "../Shared/StorageService";
class CheckoutCart extends Component {
  state = {
    cartInfo: [],
  };
  componentDidMount() {
    this.setState({
      cartInfo: GetAllStorageData(),
    });
  }

  changeQuantityHandler = (qty, value) => {
    QuantityStorageService(qty.value, value);
    this.setState({
      cartInfo: GetAllStorageData(),
    });
  };

  removeItemFromCart = (value) => {
    RemoveFromCartService(value);
    this.setState({
      cartInfo: GetAllStorageData(),
    });
  };

  render() {
    return (
      <Fragment>
        <Navbar />
        <Container>
          <Cart
            removeItemFromCart={(value) => this.removeItemFromCart(value)}
            changeQuantityHandler={(data, value) =>
              this.changeQuantityHandler(data, value)
            }
            cartInfo={this.state.cartInfo}
          />
        </Container>
      </Fragment>
    );
  }
}

export default CheckoutCart;
