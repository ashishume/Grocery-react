import React from "react";
import "./ImageLinkForm.css";
import { Modal, Button } from "semantic-ui-react";
import ImageUpload from "../../containers/ImageUpload";

const ImageLinkForm = (props) => {
  return (
    <Modal open={props.toggleModal}>
      <Modal.Header>Edit Image Link</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <label>
            <strong> Image Upload</strong>
          </label>
          <ImageUpload
            name="imageUrl"
            UploadedUrl={(e) => props.handleUploadedUrl(e)}
          />
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={props.closeModal}>Close</Button>
      </Modal.Actions>
    </Modal>
  );
};

export default ImageLinkForm;
