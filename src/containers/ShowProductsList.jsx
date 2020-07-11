import React, { Component, Fragment } from "react";
import Navbar from "../Shared/Navbar/Navbar";
import { showProductsByCategoryId } from "../store/actions/products";
import { connect } from "react-redux";
import FoodItemCard from "../components/FoodItemCard/FoodItemCard";

class ShowProductsList extends Component {
  componentDidMount() {
    const { match } = this.props;
    this.props.showProductsByCategoryId(match.params.id);
  }

  addProductOnCart = (value) => {
    console.log(value);
  };
  render() {
    return (
      <Fragment>
        <Navbar />
        {console.log(this.props.products)}
        {this.props.products.map((value, i) => {
          return (
            <FoodItemCard
              key={i}
              content={value}
              addProductOnCart={() => this.addProductOnCart(value)}
            />
          );
        })}
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products.products,
  };
};
export default connect(mapStateToProps, { showProductsByCategoryId })(
  ShowProductsList
);
