import React, { Fragment } from "react";
import "./Cart.css";
import {
  Dropdown,
  Button,
  Grid,
  Popup,
  Divider,
  Message,
} from "semantic-ui-react";
import _ from "lodash";
import CheckOutCalculation from "../PaymentCalculation/CheckOutCalculation";
import history from "../../history";
const Cart = (props) => {
  const getOptions = (number, prefix = "Choice ") =>
    _.times(number, (index) => ({
      key: index,
      text: `${prefix}${index}`,
      value: index,
    }));

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
                return (
                  <div key={i} className="cart-item">
                    <div className="product-name">
                      <img className="cart-image" src={value.image} />
                      <span className="product-text">{value.name}</span>
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
                      <Dropdown
                        placeholder="Qty"
                        compact
                        className="dropdown"
                        value={value.quantity}
                        onChange={(e, data) =>
                          props.changeQuantityHandler(data, value)
                        }
                        selection
                        options={getOptions(10, "")}
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
