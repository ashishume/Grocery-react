import React from "react";
import { Card, Icon, Image, Button } from "semantic-ui-react";

import "./FoodItemCard.css";
const FoodItemCard = (props) => {
  return (
    <Card className="card">
      <Image
        src={require("../../assets/bournvita-750-g-0-20200621.jpeg")}
        wrapped
        ui={false}
      />
      <Card.Content>
        <Card.Header>Bornvita 750g with free packets</Card.Header>
        <Card.Meta>
          <strike>M.R.P ₹500</strike>
        </Card.Meta>
        <Card.Description>
          <h3>
            <strong>₹300</strong>
          </h3>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button
          color="green"
          onClick={props.addProductOnCart}
          style={{ width: "100%" }}
        >
          Add to cart
        </Button>
      </Card.Content>
    </Card>
  );
};

export default FoodItemCard;
