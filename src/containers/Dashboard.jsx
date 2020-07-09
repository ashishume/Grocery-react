import React, { Component } from "react";
import FoodItemCard from "../components/FoodItemCard/FoodItemCard";
import Navbar from "../Shared/Navbar/Navbar";
import Carousel from "react-multi-carousel";
import ImageCarousel from "../components/ImageCarousel/ImageCarousel";
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 6,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 5,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};
class Dashboard extends Component {
  addProductOnCartHandler = (e) => {
    console.log("click");
  };

  onItemClickEvent = (e) => {
    console.log(e);
  };
  render() {
    return (
      <div>
        <Navbar />
        <ImageCarousel onItemClickEvent={(e) => this.onItemClickEvent(e)} />
        <Carousel responsive={responsive}>
          <FoodItemCard
            addProductOnCart={(e) => this.addProductOnCartHandler(e)}
          />
          <FoodItemCard
            addProductOnCart={(e) => this.addProductOnCartHandler(e)}
          />
          <FoodItemCard
            addProductOnCart={(e) => this.addProductOnCartHandler(e)}
          />
          <FoodItemCard
            addProductOnCart={(e) => this.addProductOnCartHandler(e)}
          />
          <FoodItemCard
            addProductOnCart={(e) => this.addProductOnCartHandler(e)}
          />
          <FoodItemCard
            addProductOnCart={(e) => this.addProductOnCartHandler(e)}
          />
          <FoodItemCard
            addProductOnCart={(e) => this.addProductOnCartHandler(e)}
          />
          <FoodItemCard
            addProductOnCart={(e) => this.addProductOnCartHandler(e)}
          />
        </Carousel>
        ;
      </div>
    );
  }
}

export default Dashboard;
