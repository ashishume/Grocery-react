import React, { useState, useEffect } from "react";
import {
  Button,
  Label,
  Icon,
  Select,
  Dropdown,
  Popup,
} from "semantic-ui-react";
import _ from "lodash";
import "./FoodItemCard.css";
const FoodItemCard = (props) => {
  const discountPercent = parseInt(
    ((props.content.showPrice - props.content.originalPrice) /
      props.content.showPrice) *
      100
  );

  const [isVisible, setVisible] = useState(true);
  const [qty, setQty] = useState(0);
  useEffect(() => {
    const fetchStorageData = () => {
      setVisible(true);
      const localData = localStorage.getItem("cartItems");
      if (localData !== null) {
        const tempArray = JSON.parse(localData);
        if (tempArray) {
          tempArray.map((value) => {
            if (value._id == props.content._id) {
              setVisible(false);
              setQty(value.quantity);
            }
          });
        }
      }
    };
    fetchStorageData();
  });

  const clickAddToCartHandler = () => {
    props.addProductOnCart();
    setVisible(false);
  };

  const changeQuantityHandler = (data) => {
    props.onChooseItemQuantity(data);
    setQty(data.value);
  };

  const getOptions = (number, prefix = "Choice ") =>
    _.times(number, (index) => ({
      key: index,
      text: `${prefix}${index}`,
      value: index,
    }));

  const removeItemFromCart = () => {
    props.removeFromCartHandler();
    setVisible(true);
  };

  return (
    <div className="foodCard">
      <Label as="a" size="large" color="red" horizontal>
        {discountPercent}% off
      </Label>
      <div className="food-image-container">
        <img
          className="foodItemImage"
          alt="food-card"
          src={props.content.image}
        />
      </div>
      <div className="title">{props.content.name}</div>
      <div className="showPrice">
        <strike>M.R.P. ₹{props.content.showPrice}</strike>
      </div>
      <div className="originalPrice">
        <strong>₹{props.content.originalPrice}</strong>
      </div>
      {isVisible ? (
        <div className="addCart">
          <Button fluid color="blue" onClick={() => clickAddToCartHandler()}>
            <Icon name="add to cart" /> Add to cart
          </Button>
        </div>
      ) : null}
      {!isVisible ? (
        <div className="quantity-container">
          <Dropdown
            placeholder="Qty"
            compact
            value={qty}
            onChange={(e, data) => changeQuantityHandler(data)}
            selection
            options={getOptions(10, "")}
          />
          <Popup
            content="Remove from cart"
            trigger={
              <Button
                color="red"
                icon="trash alternate outline"
                onClick={() => removeItemFromCart()}
              />
            }
          />
        </div>
      ) : null}
    </div>
  );
};

export default FoodItemCard;
