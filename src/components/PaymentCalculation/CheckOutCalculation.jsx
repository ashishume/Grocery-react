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
      <div className="container" id="payment-details-container">
        <div className="row">
          <div className="col-sm-6">
            <p className="paragraph-text">Payment Details</p>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <p className="paragraph-text">MRP TOTAL</p>
          </div>
          <div className="col-sm-6" style={{ textAlign: "right" }}>
            <p className="paragraph-text">₹ {showPrice}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <p className="paragraph-text">Discount</p>
          </div>
          <div className="col-sm-6" style={{ textAlign: "right" }}>
            <p className="paragraph-text"> -₹{showPrice - originalPrice}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <p className="paragraph-text">Total amount</p>
          </div>
          <div className="col-sm-6" style={{ textAlign: "right" }}>
            <p className="paragraph-text"> ₹{originalPrice}</p>
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
            <p className="paragraph-text">
              Total savings ₹{showPrice - originalPrice}
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6" id="original-price">
            <div style={{ fontSize: "16px", fontWeight: "700" }}>
              Amount payable: ₹{originalPrice}
            </div>
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
