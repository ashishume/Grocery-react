import React from "react";
import { Form, Button, Icon } from "semantic-ui-react";
import { Field, reduxForm } from "redux-form";
import RenderField from "../../../Shared/RenderField";
const PhoneForm = (props) => {
  return (
    <Form
      onSubmit={props.handleSubmit((e) =>
        props.submitOtpHandler(e)
      )}
    >
      <Field
        component={RenderField}
        name="phoneOTP"
        label="Enter 6 digit OTP"
      />
      <Button floated="right" fluid color="blue">
        Continue
        <Icon name="arrow right" />
      </Button>
    </Form>
  );
};

const validate = (values) => {
  const errors = {};
  if (!values.phone) errors.phone = "Required";
  return errors;
};
export default reduxForm({
  form: "PhoneForm",
  validate,
})(PhoneForm);
