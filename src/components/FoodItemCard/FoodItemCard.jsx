import React from "react";
import {  Button, Label } from "semantic-ui-react";

import "./FoodItemCard.css";
const FoodItemCard = ({ content, addProductOnCart }) => {
  const discountPercent = parseInt(
    ((content.showPrice - content.originalPrice) / content.showPrice) * 100
  );

  return (
    <div className="foodCard">
      <Label as="a" size="large" color="red" horizontal>
        {discountPercent}% off
      </Label>
      <div className="food-image-container">
        <img className="foodItemImage" alt="food-card" src={content.image} />
      </div>
      <div className="title">{content.name}</div>
      <div className="showPrice">
        <strike>M.R.P. ₹{content.showPrice}</strike>
      </div>
      <div className="originalPrice">
        <strong>₹{content.originalPrice}</strong>
      </div>
      <div className="addCart">
        <Button fluid color="blue" onClick={addProductOnCart}>
          Add to cart
        </Button>
      </div>
    </div>
  );
};

export default FoodItemCard;
