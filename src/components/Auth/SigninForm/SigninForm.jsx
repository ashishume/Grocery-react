import React from "react";
import "./SigninForm.css";
import { Form, Button, Icon } from "semantic-ui-react";
import { Field, reduxForm } from "redux-form";
import RenderField from "../../../Shared/RenderField";

const SigninForm = (props) => {
  return (
    <Form onSubmit={props.handleSubmit((e) => props.submitHandler(e))}>
      <Field component={RenderField} name="email" label="Email" type="email" />
      <Field
        component={RenderField}
        name="password"
        label="password"
        type="password"
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
  if (!values.email) errors.email = "Required";
  if (
    values.email &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
  )
    errors.email = "Enter valid email";
  if (!values.password) errors.password = "Required";
  return errors;
};
export default reduxForm({
  form: "SigninForm",
  validate,
})(SigninForm);
