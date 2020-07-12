import React, { Fragment} from "react";
import { Container, Button, Divider, Grid } from "semantic-ui-react";
import "./CheckoutCalculation.css";
const CheckOutCalculation = ({ paymentInfo }) => {
  let showPrice = 0;
  let originalPrice = 0;
  const renderPaymentData = () => {
    paymentInfo.map((info) => {
      console.log(info);
      showPrice += info.showPrice * info.quantity;
      originalPrice += info.originalPrice * info.quantity;
    });
  };

  return (
    <Fragment>
      <Container>
        {renderPaymentData()}
        <Grid className="payment-grid-system">
          <Grid.Row>
            <Grid.Column>
              <h3>Payment Details</h3>
              <Divider />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={8}>MRP TOTAL</Grid.Column>
            <Grid.Column width={8} textAlign="right">
              ₹ {showPrice}
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={8}>Discount</Grid.Column>
            <Grid.Column width={8} textAlign="right">
              -₹{showPrice - originalPrice}
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={8}>Total amount</Grid.Column>
            <Grid.Column width={8} textAlign="right">
              ₹{originalPrice}
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={8}>Total savings</Grid.Column>
            <Grid.Column width={8} textAlign="right">
              ₹{showPrice - originalPrice}
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width={8}>
              <h3>Amount payable: ₹{originalPrice}</h3>
            </Grid.Column>
            <Grid.Column width={8} textAlign="right">
              <Button icon="payment" fluid color="blue" content="Proceed" />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Fragment>
  );
};

export default CheckOutCalculation;
