import React, { Fragment } from "react";
import { Button } from "semantic-ui-react";
import "./CheckoutCalculation.css";
const CheckOutCalculation = ({
  paymentInfo,
  onClickPaymentHandler,
  buttonText,
  disabledButton,
}) => {
  let showPrice = 0;
  let originalPrice = 0;
  const renderPaymentData = () =>
    paymentInfo.map((info) => {
      showPrice += info.showPrice * info.quantity;
      originalPrice += info.originalPrice * info.quantity;
    });

  return (
    <Fragment>
      {renderPaymentData()}
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <h3>Payment Details</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <h3>MRP TOTAL</h3>
          </div>
          <div className="col-sm-6" style={{ textAlign: "right" }}>
            <h3>₹ {showPrice}</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <h3>Discount</h3>
          </div>
          <div className="col-sm-6" style={{ textAlign: "right" }}>
            <h3> -₹{showPrice - originalPrice}</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <h3>Total amount</h3>
          </div>
          <div className="col-sm-6" style={{ textAlign: "right" }}>
            <h3> ₹{originalPrice}</h3>
          </div>
        </div>
        <div className="row">
          <div
            className="col-sm-12"
            style={{
              margin: "5px",
              padding: "5px",
              border: "solid 1px lightgreen",
            }}
          >
            <h3>Total savings ₹{showPrice - originalPrice}</h3>
          </div>
        </div>
        <div className="row">
          <div
            className="col-sm-6"
            id="original-price"
            style={{ textAlign: "right" }}
          >
            <h3>Amount payable: ₹{originalPrice}</h3>
          </div>
          <div className="col-sm-6">
            <Button
              disabled={disabledButton}
              icon="payment"
              className="button-primary"
              fluid
              color="blue"
              onClick={() => onClickPaymentHandler()}
              content={buttonText}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CheckOutCalculation;
