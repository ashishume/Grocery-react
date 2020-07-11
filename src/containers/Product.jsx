import React, { Component, Fragment } from "react";
import { Grid, Dropdown, Container } from "semantic-ui-react";
import ProductForm from "../components/ProductForm/ProductForm";
import { showCategory } from "../store/actions/category";
import { connect } from "react-redux";
import {
  showProductsByCategoryId,
  addProducts,
} from "../store/actions/products";
import ProductTable from "../components/ProductTable/ProductTable";
import Navbar from "../Shared/Navbar/Navbar";
class Product extends Component {
  submitProductHandler = (e, imageValue) => {
    if (imageValue !== "") {
      const body = {
        ...e,
        image: imageValue,
      };
      this.props.addProducts(body);
    } else {
      alert("Please upload image");
      return false;
    }
  };

  state = {
    categorySelected: false,
  };

  componentDidMount() {
    // this.props.showCategory();
  }
  handleDropdownChange = (e, data) => {
    this.setState({
      categorySelected: true,
    });
    this.props.showProductsByCategoryId(data.value);
  };
  render() {
    let categoryOptions = [];
    this.props.category.map((data, i) => {
      return categoryOptions.push({ key: i, value: data._id, text: data.name });
    });

    return (
      <Fragment>
        <Navbar />
        <Container>
          <Grid columns={16}>
            <Grid.Row>
              <Grid.Column width={16}>
                <h2>Add New Product</h2>
                <ProductForm
                  category={this.props.category}
                  submitProductHandler={(e, image) =>
                    this.submitProductHandler(e, image)
                  }
                />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={16}>
                <h2>Display Products</h2>
                <Dropdown
                  placeholder="Select Country"
                  fluid
                  search
                  selection
                  onChange={this.handleDropdownChange}
                  options={categoryOptions}
                />

                {this.props.products ? (
                  <ProductTable
                    isSelected={this.state.categorySelected}
                    products={this.props.products}
                  />
                ) : null}
                <br />
                <br />
                <br />
                <br />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Fragment>
    );
  }
}
// categoryId: "5f085f9224e4fa7908aa7e8d";
// description: "This is a fruit which is only found in summer";
// image: "https://firebasestorage.googleapis.com/v0/b/shopnsave38.appspot.com/o/images%2Fdownload.jpeg?alt=media&token=62e5c4d9-8c10-4b25-b7b4-c93f0a882d77";
// maxQuantity: 100;
// name: "Mangoes";
// originalPrice: 200;
// showPrice: 250;
// _id: "5f08620d24e4fa7908aa7e90";
const mapStateToProps = (state) => {
  return {
    category: state.category.category,
    products: state.products.products,
  };
};
export default connect(mapStateToProps, {
  showCategory,
  showProductsByCategoryId,
  addProducts,
})(Product);
