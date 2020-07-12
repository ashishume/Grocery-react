import React, { useState, useEffect } from "react";
import {
  Button,
  Label,
  Icon,
  Popup,
} from "semantic-ui-react";
import "./FoodItemCard.css";
import history from "../../history";
import QuantityDropdown from "../QuantityDropdown";
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

  const onClickOfFoodItemHandler = (e) => {
    history.push(`/grocery/${props.content._id}`);
    e.stopPropagation();
  };

  const clickAddToCartHandler = (e) => {
    e.stopPropagation();
    props.addProductOnCart();
    setVisible(false);
  };

  const removeItemFromCart = (e) => {
    e.stopPropagation();
    props.removeFromCartHandler();
    setVisible(true);
  };
  const changeQuantityHandler = (data) => {
    props.onChooseItemQuantity(data);
    setQty(data.value);
  };

  let name = props.content.name.substring(0, 55);
  if (props.content.name.length > 55)
    name = props.content.name.substring(0, 55) + "...";

  return (
    <div className="foodCard" onClick={(e) => onClickOfFoodItemHandler(e)}>
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
      <div className="food-title">{name}</div>
      <div className="showPrice">
        <strike>M.R.P. ₹{props.content.showPrice}</strike>
      </div>
      <div className="originalPrice">
        <strong>₹{props.content.originalPrice}</strong>
      </div>
      {isVisible ? (
        <div className="addCart">
          <Button fluid color="blue" onClick={(e) => clickAddToCartHandler(e)}>
            <Icon name="add to cart" /> Add to cart
          </Button>
        </div>
      ) : null}
      {!isVisible ? (
        <div className="quantity-container">
          <QuantityDropdown
            qty={qty}
            changeQuantityHandler={(data) => changeQuantityHandler(data)}
          />
          <Popup
            content="Remove from cart"
            trigger={
              <Button
                color="red"
                icon="trash alternate outline"
                onClick={(e) => removeItemFromCart(e)}
              />
            }
          />
        </div>
      ) : null}
    </div>
  );
};

export default FoodItemCard;
