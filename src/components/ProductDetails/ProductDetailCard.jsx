import React, { useState, Fragment, useEffect } from "react";
import "./ProductDetailCard.css";
import QuantityDropdown from "../QuantityDropdown";
import { Button, Icon, Popup } from "semantic-ui-react";
import history from "../../history";
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
            if (value._id === content._id) {
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
                <img
                  src={content.image}
                  alt="product"
                  className="product-image"
                />
              </div>
            </div>
            <div className="col-sm-6">
              <h3 className="display-item-name">
                {content.name.substring(0, 76)}
              </h3>
              <p className="stock-price-display">In stock</p>
              <p className="cod-text">Cash on delivery available</p>
              <div className="product-showPrice">
                <p>
                  <strike>M.R.P. ₹ {content.showPrice}</strike>
                </p>
              </div>
              <div className="product-originalPrice">
                <p>Price ₹{content.originalPrice}</p>
              </div>
              <div className="savings-amount-text">
                <p>
                  Your saving ₹
                  {parseInt(content.showPrice - content.originalPrice)}
                </p>
              </div>
              <div className="itemQuantity">
                {!isVisible ? (
                  <Fragment>
                    <QuantityDropdown
                      qty={qty}
                      changeQuantityHandler={(data) => changeQuantity(data)}
                    />
                    &nbsp; &nbsp; &nbsp;
                    <Popup
                      content="Remove from cart"
                      trigger={
                        <Button
                          size="big"
                          color="red"
                          icon="trash alternate outline"
                          onClick={(e) => removeItemFromCart(e)}
                        />
                      }
                    />
                    <Button
                      size="big"
                      color="teal"
                      onClick={() => history.push("/checkout/cart")}
                    >
                      <Icon name="add to cart" /> Go to cart
                    </Button>
                  </Fragment>
                ) : null}
              </div>
              <div className="addToCartContainer">
                {isVisible ? (
                  <div className="addCart">
                    <Button
                      size="big"
                      fluid
                      color="blue"
                      onClick={(e) => clickAddToCartHandler(e)}
                    >
                      <Icon name="add to cart" /> Add to cart
                    </Button>
                  </div>
                ) : null}
              </div>

              <p className="product-description">
                <strong>Product Description:</strong> {content.description}
              </p>
            </div>
          </div>
        </div>
      }
      <br/>
      <br/>
      <br/>
      <br/>
    </Fragment>
  );
};
export default ProductDetailCard;
