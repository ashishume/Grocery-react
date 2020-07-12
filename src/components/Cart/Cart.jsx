import React, { Fragment } from "react";
import "./Cart.css";
import { Dropdown, Button, Grid, Popup, Divider } from "semantic-ui-react";
import _ from "lodash";
import CheckOutCalculation from "../PaymentCalculation/CheckOutCalculation";

const Cart = (props) => {
  const getOptions = (number, prefix = "Choice ") =>
    _.times(number, (index) => ({
      key: index + 1,
      text: `${prefix}${index + 1}`,
      value: index + 1,
    }));

  return (
    <Fragment>
      <Grid>
        <Grid.Row>
          <Grid.Column width={8}>
            <div className="cart-container">
              <h2>
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
                      {value.name}
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
                        value={value.quantity}
                        onChange={(e, data) =>
                          props.changeQuantityHandler(data, value)
                        }
                        selection
                        options={getOptions(10, "")}
                      />
                      <Popup
                        content="Remove from cart"
                        trigger={
                          <Button
                            color="red"
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
          </Grid.Column>
          <Grid.Column width={8}>
            <div className="payment-container">
              {props.cartInfo ? (
                <CheckOutCalculation paymentInfo={props.cartInfo} />
              ) : null}
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Fragment>
  );
};

export default Cart;
