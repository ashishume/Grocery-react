import React, { useState, Fragment, useEffect } from "react";
import "./ProductDetailCard.css";
import QuantityDropdown from "../QuantityDropdown";
import { Button, Icon, Popup } from "semantic-ui-react";

const ProductDetailCard = ({
  content,
  addProductOnCart,
  removeFromCartHandler,
  changeQuantityHandler,
}) => {
  const clickAddToCartHandler = (e) => {
    addProductOnCart();
    setVisible(false);
  };

  const changeQuantity = (qty) => {
    changeQuantityHandler(qty.value, content);
    setQty(qty.value);
  };
  const removeItemFromCart = (e) => {
    removeFromCartHandler();
    setVisible(true);
  };
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
            if (value._id == content._id) {
              setVisible(false);
              setQty(value.quantity);
            }
          });
        }
      }
    };
    fetchStorageData();
  });
  return (
    <Fragment>
      {
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <div className="product-image-container">
                <img src={content.image} className="product-image" />
              </div>
            </div>
            <div className="col-sm-6">
              <h3 className="display-item-name">{content.name}</h3>

              <div className="showPrice">
                <p>
                  <strike>M.R.P. ₹ {content.showPrice}</strike>
                </p>
              </div>
              <div className="originalPrice">
                <p>Price ₹{content.originalPrice}</p>
              </div>
              <div className="itemQuantity">
                {!isVisible ? (
                  <Fragment>
                    <QuantityDropdown
                      qty={qty}
                      changeQuantityHandler={(data) => changeQuantity(data)}
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
                  </Fragment>
                ) : null}
              </div>
              <div className="addToCartContainer">
                {isVisible ? (
                  <div className="addCart">
                    <Button
                      fluid
                      color="blue"
                      onClick={(e) => clickAddToCartHandler(e)}
                    >
                      <Icon name="add to cart" /> Add to cart
                    </Button>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      }
    </Fragment>
  );
};
export default ProductDetailCard;
