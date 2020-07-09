import React, { Component } from "react";
// import FoodItem from "./components/FoodItem/FoodItem";
import { Icon, Button } from "semantic-ui-react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 7,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 7,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 4,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};
class ItemListScroller extends Component {
  render() {
    return (
      <div className="App">
          Scroller
        {/* <Carousel
          swipeable={true}
          draggable={false}
          responsive={responsive}
          removeArrowOnDeviceType={["tablet", "mobile"]}
          deviceType={this.props.deviceType}
          itemClass="carousel-item-padding-10-px"
        >
          <FoodItem />
          <FoodItem />
          <FoodItem />
          <FoodItem />
          <FoodItem />
          <FoodItem />
          <FoodItem />
          <FoodItem />
          <FoodItem />
        </Carousel> */}
      </div>
    );
  }
}

export default ItemListScroller;
