import React, { Component, Fragment } from "react";
import { Grid, Dropdown, Container } from "semantic-ui-react";
import ProductForm from "../components/ProductForm/ProductForm";
import { showCategory } from "../store/actions/category";
import { connect } from "react-redux";
import {
  showProductsByCategoryId,
  addProducts,
  updateProduct,
} from "../store/actions/products";
import ProductTable from "../components/ProductTable/ProductTable";
import AdminNavbar from "../Shared/AdminNavbar/AdminNavbar";
import ProductEditModal from "../Shared/Modals/ProductEditModal";

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
    toggleProductModal: false,
    editData: [],
  };

  handleDropdownChange = (e, data) => {
    this.setState({
      categorySelected: true,
    });
    this.props.showProductsByCategoryId(data.value);
  };
  editClickHandler = (data) => {
    this.setState({
      toggleProductModal: true,
      editData: data,
    });
  };

  submitEditProductHandler = async (data) => {
    await this.props.updateProduct(data._id, data);
    await this.props.showProductsByCategoryId(data.categoryId);
  };
  render() {
    let categoryOptions = [];
    this.props.category.map((data, i) => {
      return categoryOptions.push({ key: i, value: data._id, text: data.name });
    });

    return (
      <Fragment>
        {/* <Navbar /> */}
        <AdminNavbar />
        <Container>
          <Grid columns={16}>
            <Grid.Row>
              <Grid.Column width={16}>
                <h2>Add New Product</h2>
                <ProductForm
                  isEditableRequired={true}
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

                {this.props.categoryProducts ? (
                  <ProductTable
                    onClickEditButton={(data) => this.editClickHandler(data)}
                    isSelected={this.state.categorySelected}
                    products={this.props.categoryProducts}
                  />
                ) : null}

                <br />
                <br />
                <br />
                <br />
              </Grid.Column>
            </Grid.Row>
          </Grid>
          {this.state.toggleProductModal ? (
            <ProductEditModal
              submitEditProductHandler={(data) =>
                this.submitEditProductHandler(data)
              }
              content={this.state.editData}
              toggleProductModal={this.state.toggleProductModal}
              closeModal={() => this.setState({ toggleProductModal: false })}
            />
          ) : null}
        </Container>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    category: state.category.category,
    // products: state.products.products,
    categoryProducts: state.products.categoryProducts,
  };
};
export default connect(mapStateToProps, {
  showCategory,
  showProductsByCategoryId,
  addProducts,
  updateProduct,
})(Product);
