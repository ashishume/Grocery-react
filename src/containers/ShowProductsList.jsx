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
import { Message, Container, Button } from "semantic-ui-react";
import history from "../history";

class ShowProductsList extends Component {
  componentDidMount() {
    const { match } = this.props;
    this.props.showProductsByCategoryId(match.params.id);
  }
  addProductOnCart = (value) => {
    AddToCartStorageService(value);
  };

  onChooseItemQuantity = (qty, value) => {
    QuantityStorageService(qty.value, value);
  };

  render() {
    return (
      <Fragment>
        {/* <Navbar /> */}
        <AdminNavbar />
        {this.props.products.length ? (
          this.props.products.map((value, i) => {
            return (
              <FoodItemCard
                onChooseItemQuantity={(e) =>
                  this.onChooseItemQuantity(e, value)
                }
                key={i}
                content={value}
                addProductOnCart={() => this.addProductOnCart(value)}
              />
            );
          })
        ) : (
          <Container textAlign="center">
            <Message>No products found</Message>
            <Button onClick={()=>history.push('/')}>Go back</Button>
          </Container>
        )}
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
