import React, { Component, Fragment } from "react";
// import Navbar from "../Shared/Navbar/Navbar";
import { showProductsByCategoryId } from "../store/actions/products";
import { connect } from "react-redux";
import FoodItemCard from "../components/FoodItemCard/FoodItemCard";
import AdminNavbar from "../Shared/AdminNavbar/AdminNavbar";
import {
  AddToCartStorageService,
  QuantityStorageService,
} from "../Shared/StorageService";

class ShowProductsList extends Component {
  componentDidMount() {
    const { match } = this.props;
    this.props.showProductsByCategoryId(match.params.id);
  }
  addProductOnCart = (value) => {
    AddToCartStorageService(value);
  };

  onChooseItemQuantity = (e) => {
    console.log(e.value);
  };

  render() {
    return (
      <Fragment>
        {/* <Navbar /> */}
        <AdminNavbar />
        {this.props.products.map((value, i) => {
          return (
            <FoodItemCard
              onChooseItemQuantity={(e) => this.onChooseItemQuantity(e)}
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
