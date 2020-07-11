import React, { Component } from "react";
// import FoodItemCard from "../components/FoodItemCard/FoodItemCard";
// import Navbar from "../Shared/Navbar/Navbar";
// import Carousel from "react-multi-carousel";
// import ImageCarousel from "../components/ImageCarousel/ImageCarousel";
// import ImageUpload from "./ImageUpload";
// import Category from "./Category";
import { connect } from "react-redux";
import { Icon, Container } from "semantic-ui-react";
import { showProductsByCategoryId } from "../store/actions/products";
import CategoryCard from "../components/CategoryCard/CategoryCard";
import history from "../history";
import AdminNavbar from "../Shared/AdminNavbar/AdminNavbar";
// const responsive = {
//   superLargeDesktop: {
//     breakpoint: { max: 4000, min: 3000 },
//     items: 6,
//   },
//   desktop: {
//     breakpoint: { max: 3000, min: 1024 },
//     items: 6,
//   },
//   tablet: {
//     breakpoint: { max: 1024, min: 464 },
//     items: 5,
//   },
//   mobile: {
//     breakpoint: { max: 464, min: 0 },
//     items: 2,
//   },
// };
class Dashboard extends Component {
  addProductOnCartHandler = (e) => {
    console.log("click");
  };

  routeToCategoryHandler = (value) => {
    console.log(value);
    history.push(`/category/${value._id}`);
  };

  onItemClickEvent = (e) => {
    console.log(e);
  };
  render() {
    return (
      <div>
        {/* <Navbar /> */}
        <AdminNavbar/>
        {/* <ImageCarousel onItemClickEvent={(e) => this.onItemClickEvent(e)} /> */}
        <Container>
          <h2 style={{ fontSize: "30px", marginTop: "20px", fontWeight: 700 }}>
            Shop by categories <Icon name="shop" />
          </h2>
          {this.props.category.map((value, i) => {
            return (
              // <span>
              <CategoryCard
                key={i}
                categoryClickHandler={() => this.routeToCategoryHandler(value)}
                imageUrl={value.imageUrl}
                name={value.name}
              />
              // </span>
            );
          })}
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
