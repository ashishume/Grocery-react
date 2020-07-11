import React, { Component, useEffect } from "react";
// import FoodItem from "./components/FoodItem/FoodItem";
import { Icon, Button, Container, Message } from "semantic-ui-react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { connect } from "react-redux";
import {
  AddToCartStorageService,
  QuantityStorageService,
  RemoveFromCartService,
} from "../Shared/StorageService";
import { showAllLatestProducts } from "../store/actions/products";
import FoodItemCard from "../components/FoodItemCard/FoodItemCard";
import history from "../history";
import "../GlobalStyle.css";
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

class ItemListScroller extends Component {
  componentDidMount() {
    this.props.showAllLatestProducts();
  }

  addProductOnCart = (value) => {
    AddToCartStorageService(value);
  };

  onChooseItemQuantity = (qty, value) => {
    QuantityStorageService(qty.value, value);
  };

  removeFromCartHandler = (value) => {
    RemoveFromCartService(value);
  };

  render() {
    return (
      <Container>
        <h2 className="heading">
          Latest Groceries <Icon name="food" />
        </h2>
        <Carousel
          swipeable={true}
          draggable={false}
          responsive={responsive}
          removeArrowOnDeviceType={["tablet", "mobile"]}
          itemClass="carousel-item-padding-10-px"
        >
          {this.props.products.length ? (
            this.props.products.map((value, i) => {
              return (
                <FoodItemCard
                  onChooseItemQuantity={(e) =>
                    this.onChooseItemQuantity(e, value)
                  }
                  key={i}
                  content={value}
                  removeFromCartHandler={() =>
                    this.removeFromCartHandler(value)
                  }
                  addProductOnCart={() => this.addProductOnCart(value)}
                />
              );
            })
          ) : (
            <Container textAlign="center">
              <Message>No products found</Message>
            </Container>
          )}
        </Carousel>
      </Container>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    products: state.products.products,
  };
};
export default connect(mapStateToProps, { showAllLatestProducts })(
  ItemListScroller
);
