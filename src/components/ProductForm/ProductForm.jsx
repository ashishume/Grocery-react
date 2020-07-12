import React, { useState, Fragment } from "react";
import "./ProductForm.css";
import { Form, Button, FormGroup } from "semantic-ui-react";
import RenderField from "../../Shared/RenderField";
import { Field, reduxForm } from "redux-form";
import ImageUpload from "../../containers/ImageUpload";

const ProductForm = (props) => {
  const [image, setImage] = useState("");
  const handleUploadedUrl = (e) => {
    setImage(e);
  };

  return (
    <Form
      onSubmit={props.handleSubmit((e) => props.submitProductHandler(e, image))}
    >
      <FormGroup widths="equal">
        <Field name="name" component={RenderField} label="Product Name*" />
        <Field
          type="number"
          name="maxQuantity"
          component={RenderField}
          label="Max Quantity*"
        />
      </FormGroup>
      <FormGroup widths="equal">
        <Field
          type="number"
          name="originalPrice"
          component={RenderField}
          label="(₹) Original Price*"
        />
        <Field
          type="number"
          name="showPrice"
          component={RenderField}
          label="(₹) Labeled Price*"
        />
      </FormGroup>

      <Field name="description" component={RenderField} label="Description*" />
      {props.isEditableRequired ? (
        <Fragment>
          <label>
            <strong> Image Upload</strong>
          </label>
          <ImageUpload name="image" UploadedUrl={(e) => handleUploadedUrl(e)} />

          <label>
            <strong>Choose Category*</strong>
          </label>
          <div className="field">
            <Field name="categoryId" component="select">
              <option value="" disabled>
                select category
              </option>
              {props.category.map((value, i) => {
                return (
                  <option value={value._id} key={i}>
                    {value.name}
                  </option>
                );
              })}
            </Field>
          </div>
        </Fragment>
      ) : null}

      <Button color="blue">Submit</Button>
    </Form>
  );
};

const validate = (values) => {
  const errors = {};
  if (values.showPrice <= values.originalPrice) {
    errors.showPrice = "Labeled price must be greater than Original Price";
  }
  if (values.showPrice <= values.originalPrice) {
    errors.originalPrice = "Labeled price must be greater than Original Price";
  }
  if (!values.name) errors.name = "Required";
  if (!values.originalPrice) errors.originalPrice = "Required";
  if (!values.showPrice) errors.showPrice = "Required";

  if (!values.maxQuantity) errors.maxQuantity = "Required";
  if (!values.description) errors.description = "Required";
  if (!values.categoryId) errors.categoryId = "Required";
  return errors;
};
export default reduxForm({
  form: "ProductForm",
  validate,
})(ProductForm);
