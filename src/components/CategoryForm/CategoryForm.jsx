import React, { useState,Fragment } from "react";
import "./CategoryForm.css";
import { Form, Button } from "semantic-ui-react";
import RenderField from "../../Shared/RenderField";
import { Field, reduxForm } from "redux-form";
import ImageUpload from "../../containers/ImageUpload";
const CategoryForm = (props) => {
  const [image, setImage] = useState("");
  const handleUploadedUrl = (e) => {
    setImage(e);
  };

  return (
    <Form
      onSubmit={props.handleSubmit((e) =>
        props.submitCategoryHandler(e, image)
      )}
    >
      <Field name="name" component={RenderField} label="Category Name" />
      {props.isImage ? (
        <Fragment>
          <label>
            <strong> Image Upload</strong>
          </label>
          <ImageUpload name="image" UploadedUrl={(e) => handleUploadedUrl(e)} />
        </Fragment>
      ) : null}
      <Button color="blue">Submit</Button>
    </Form>
  );
};
const validate = (values) => {
  const errors = {};
  if (!values.name) errors.name = "Required";
  return errors;
};
export default reduxForm({
  form: "CategoryForm",
  validate,
})(CategoryForm);
