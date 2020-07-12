import React from "react";
import { Modal, Header, Button } from "semantic-ui-react";
import CategoryForm from "../../components/CategoryForm/CategoryForm";
import { updateCategory } from "../../store/actions/category";
import { connect } from "react-redux";
const CategoryEditModal = (props) => {
  const submitCategoryHandler = (data, image) => {
    props.submitEditCategoryHandler(data._id,data);
    props.closeModal();
  };
  return (
    <Modal
      style={{ width: "100vw", height: "50vh" }}
      open={props.toggleCategoryModal}
    >
      <Modal.Header>Edit Category</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <Header>Default Profile Image</Header>
          <CategoryForm
            submitCategoryHandler={(data, image) =>
              submitCategoryHandler(data, image)
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

export default connect("", { updateCategory })(CategoryEditModal);
