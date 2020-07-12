import React, { Fragment, Component } from "react";
import { Container, Button, List, Message, Icon } from "semantic-ui-react";
import { connect } from "react-redux";
import { showAllImages, updateImage } from "../../store/actions/images";
import AdminNavbar from "../../Shared/AdminNavbar/AdminNavbar";
import ImageLinkForm from "../ImageLinkForm/ImageLinkForm";
class ImageLinksTable extends Component {
  componentDidMount() {
    this.props.showAllImages();
  }
  state = {
    toggleModal: false,
    id: "",
  };

  editImageLinkHandler = (e) => {
    this.setState({
      toggleModal: true,
      id: e._id,
    });
  };

  handleUploadedUrl = async (e) => {
    const body = {
      imageUrl: e,
      id: this.state.id,
    };
    await this.props.updateImage(body);
    await this.props.showAllImages();
  };
  render() {
    return (
      <Fragment>
        <AdminNavbar />
        <Container>
          <List divided relaxed>
            {this.props.images.map((value, i) => {
              return (
                <Fragment key={i}>
                  <List.Item>
                    <List.Content>
                      <List.Header>
                       {i+1}) <Message>
                          {value.imageUrl}
                          <div
                            onClick={() => this.editImageLinkHandler(value)}
                            style={{ cursor: "pointer", float: "right" }}
                          >
                            <Icon name="edit" />
                          </div>
                        </Message>
                      </List.Header>
                    </List.Content>
                  </List.Item>
                </Fragment>
              );
            })}
          </List>
        </Container>
        {this.state.toggleModal ? (
          <ImageLinkForm
            handleUploadedUrl={(e) => this.handleUploadedUrl(e)}
            toggleModal={this.state.toggleModal}
            closeModal={() => this.setState({ toggleModal: false })}
          />
        ) : null}
      </Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    images: state.images.images,
  };
};
export default connect(mapStateToProps, { showAllImages, updateImage })(
  ImageLinksTable
);
