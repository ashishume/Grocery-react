import React, { Component } from "react";
import { connect } from "react-redux";
import { Icon, Container, Divider } from "semantic-ui-react";
import { showProductsByCategoryId } from "../store/actions/products";
import CategoryCard from "../components/CategoryCard/CategoryCard";
import history from "../history";
import Navbar from "../Shared/Navbar/Navbar";
import ItemListScroller from "./ItemListScroller";
import "../GlobalStyle.css";
import ImageCarousel from "../components/ImageCarousel/ImageCarousel";
class Dashboard extends Component {
  addProductOnCartHandler = (e) => {
    // console.log("click");
  };

  routeToCategoryHandler = (value) => {
    // console.log(value);
    history.push(`/category/${value._id}`);
  };

  onItemClickEvent = (e) => {
    // console.log(e);
  };
  
  render() {
    return (
      <div>
        <Navbar />
        <ImageCarousel onItemClickEvent={(e) => this.onItemClickEvent(e)} />
        <Container style={{margin:'0 auto',display:'block'}}>
          <h2 className="heading">
            Shop by categories <Icon name="shop" />
          </h2>
          {this.props.category.map((value, i) => {
            return (
              <CategoryCard
                key={i}
                categoryClickHandler={() => this.routeToCategoryHandler(value)}
                imageUrl={value.imageUrl}
                name={value.name}
              />
            );
          })}
          <Divider />
          <ItemListScroller />
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
