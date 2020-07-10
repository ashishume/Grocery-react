import React, { Component } from "react";
import FoodItemCard from "../components/FoodItemCard/FoodItemCard";
import Navbar from "../Shared/Navbar/Navbar";
import Carousel from "react-multi-carousel";
import ImageCarousel from "../components/ImageCarousel/ImageCarousel";
import ImageUpload from "./ImageUpload";
import Category from "./Category";
import { connect } from "react-redux";
import { List, Container } from "semantic-ui-react";
import { showProductsByCategoryId } from "../store/actions/products";
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
        <Container>
          {/* <ImageCarousel onItemClickEvent={(e) => this.onItemClickEvent(e)} /> */}
          {
            // console.log(this.props.category)

            this.props.category.map((value, i) => {
              return (
                <div role="list" key={i} className="ui list">
                  <div role="listitem" className="item">
                    {value.name}
                    {/* {this.props.showProductsByCategoryId(value._id)} */}
                    {/* <Carousel responsive={responsive}>
                    <FoodItemCard
                    addProductOnCart={(e) => this.addProductOnCartHandler(e)}
                    />
                  </Carousel> */}
                  </div>
                </div>
              );
            })
          }
        </Container>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    category: state.category.category,
    products: state.products.products,
  };
};
export default connect(mapStateToProps, { showProductsByCategoryId })(
  Dashboard
);
