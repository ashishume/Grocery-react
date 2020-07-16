import React, { Component, Fragment } from "react";
import ProductDetailCard from "../components/ProductDetails/ProductDetailCard";
import { connect } from "react-redux";
import { showProductsById } from "../store/actions/products";
import Navbar from "../Shared/Navbar/Navbar";
import {
  QuantityStorageService,
  AddToCartStorageService,
  RemoveFromCartService,
} from "../Shared/StorageService";
class ProductDetails extends Component {
  componentDidMount() {
    const { match } = this.props;
    this.props.showProductsById(match.params.id);
  }
  addProductOnCart = (value) => {
    AddToCartStorageService(value);
  };

  removeFromCartHandler = (value) => {
    RemoveFromCartService(value);
  };

  changeQuantityHandler = (qty, content) => {
    QuantityStorageService(qty, content);
  };
  render() {
    return (
      <Fragment>
        <Navbar />
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              {this.props.product.map((value, i) => {
                return (
                  <ProductDetailCard
                    addProductOnCart={() => this.addProductOnCart(value)}
                    key={i}
                    changeQuantityHandler={(qty, data) =>
                      this.changeQuantityHandler(qty, data)
                    }
                    removeFromCartHandler={() =>
                      this.removeFromCartHandler(value)
                    }
                    content={value}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return { product: state.products.productsById };
};
export default connect(mapStateToProps, { showProductsById })(ProductDetails);
