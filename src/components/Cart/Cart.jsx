import React, { Fragment } from "react";
import "./Cart.css";
import { Button, Popup, Divider, Message } from "semantic-ui-react";
import CheckOutCalculation from "../PaymentCalculation/CheckOutCalculation";
import history from "../../history";
import QuantityDropdown from "../QuantityDropdown";
const Cart = (props) => {
  if (props.cartInfo.length == 0) {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12" style={{ textAlign: "center" }}>
            <Message style={{ textAlign: "center" }}>No Items found</Message>
            <Button
              icon="home"
              content="Continue shopping"
              color="blue"
              onClick={() => history.push("/")}
            />
          </div>
        </div>
      </div>
    );
  }
  return (
    <Fragment>
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <div className="cart-container">
              <h2 className="title-header">
                {props.cartInfo.length}
                {props.cartInfo.length == 1 ? " item" : " items"} in the cart
              </h2>
              <p>Order summary</p>
              <Divider />
              {props.cartInfo.map((value, i) => {
                let name = value.name.substring(0, 20);
                if (value.name.length > 20)
                  name = value.name.substring(0, 20) + "...";

                return (
                  <div key={i} className="cart-item">
                    <div className="product-name">
                      <img className="cart-image" src={value.image} />
                      <span className="product-text">{name}</span>
                      <div className="item-price">
                        ₹ {value.originalPrice * value.quantity}
                      </div>
                      <div className="show-price">
                        <strike>
                          M.R.P ₹ {value.showPrice * value.quantity}
                        </strike>
                      </div>
                    </div>

                    <div className="change-quantity">
                      <QuantityDropdown
                        qty={value.quantity}
                        changeQuantityHandler={(data) =>
                          props.changeQuantityHandler(data, value)
                        }
                      />
                      <Popup
                        content="Remove from cart"
                        className="popup-remove"
                        trigger={
                          <Button
                            color="red"
                            size="mini"
                            icon="trash alternate outline"
                            onClick={() => props.removeItemFromCart(value)}
                          />
                        }
                      />
                    </div>
                    <Divider />
                  </div>
                );
              })}
            </div>
          </div>

          <div className="col-sm-6">
            <div className="payment-container">
              {props.cartInfo ? (
                <CheckOutCalculation paymentInfo={props.cartInfo} />
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Cart;
