import React, { Component, Fragment } from "react";
import CategoryForm from "../components/CategoryForm/CategoryForm";
import { Grid, Container, List, Icon, Image, Popup } from "semantic-ui-react";
import { connect } from "react-redux";
import {
  showCategory,
  addCategory,
  archiveCategory,
} from "../store/actions/category";
import Navbar from "../Shared/Navbar/Navbar";

class Category extends Component {
  submitCategoryHandler = async (e, image) => {
    if (image !== "") {
      const body = {
        ...e,
        imageUrl: image,
      };
      await this.props.addCategory(body);
      await this.props.showCategory();
    } else {
      alert("Please upload image");
      return false;
    }
  };
  archiveCategory = async (e) => {
    await this.props.archiveCategory(e._id);
    await this.props.showCategory();
  };
  // componentDidMount() {
  //   // this.props.showCategory();
  // }
  render() {
    return (
      <Fragment>
        <Navbar />
        <Container style={{ marginTop: "20px" }}>
          <Grid columns={2}>
            <h2>Category Configurations</h2>
            <Grid.Row>
              <Grid.Column width={8}>
                <CategoryForm
                  submitCategoryHandler={(e, image) =>
                    this.submitCategoryHandler(e, image)
                  }
                />
              </Grid.Column>
              <Grid.Column width={8}>
                <List divided relaxed>
                  {this.props.category.map((value, i) => {
                    return (
                      <Fragment key={i}>
                        <List.Item>
                          <Image size="medium" rounded src={value.imageUrl} />
                          <List.Content>
                            <List.Header as="a">{value.name}</List.Header>
                            <Popup
                              content="Delete category"
                              trigger={
                                <Icon
                                  name="archive"
                                  onClick={() => this.archiveCategory(value)}
                                />
                              }
                            />
                          </List.Content>
                        </List.Item>
                      </Fragment>
                    );
                  })}
                </List>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    category: state.category.category,
  };
};
export default connect(mapStateToProps, {
  archiveCategory,
  addCategory,
  showCategory,
})(Category);
