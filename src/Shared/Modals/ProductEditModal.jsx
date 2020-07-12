import React from "react";
import { Modal, Header, Button, Image, Icon } from "semantic-ui-react";
import CategoryForm from "../../components/CategoryForm/CategoryForm";
import { updateProduct } from "../../store/actions/products";
import { connect } from "react-redux";
import ProductForm from "../../components/ProductForm/ProductForm";
const ProductEditModal = (props) => {
  const submitProductHandler = (data, image) => {
    props.submitEditProductHandler(data);
    props.closeModal();
  };

  return (
    <Modal
      style={{ width: "100vw", height: "80vh" }}
      open={props.toggleProductModal}
    >
      <Modal.Header>Edit Category</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <Header>Default Profile Image</Header>
          <ProductForm
            isEditableRequired={false}
            submitProductHandler={(data, image) =>
              submitProductHandler(data, image)
            }
            isImage={false}
            initialValues={props.content}
          />
        </Modal.Description>
        <Modal.Actions>
          <Button floated="right" onClick={props.closeModal}>
            Close
          </Button>
        </Modal.Actions>
      </Modal.Content>
    </Modal>
  );
};

export default connect("", { updateProduct })(ProductEditModal);
