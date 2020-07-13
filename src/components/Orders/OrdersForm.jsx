import React from "react";
import "./OrdersForm.css";
import { Form, Button, Icon } from "semantic-ui-react";
import { Field, reduxForm } from "redux-form";
import RenderField from "../../Shared/RenderField";

const OrdersForm = (props) => {
  return (
    <Form onSubmit={props.handleSubmit((e) => props.onSubmitHandler(e))}>
      <Field component={RenderField} name="name" label="Full Name*" />
      <Field
        component={RenderField}
        name="pincode"
        label="PIN Code*"
        type="number"
      />
      <Field component={RenderField} name="city" label="City*" />
      <Field component={RenderField} name="state" label="State*" />
      <Field component={RenderField} name="address" label="Address*" />
      <Field component={RenderField} name="landmark" label="Landmark*" />
      <Field
        component={RenderField}
        name="phone"
        type="number"
        label="Phone Number*"
      />
      <Button floated="right" fluid color="blue">
        Save Address &nbsp;
        <Icon name="check" />
      </Button>
    </Form>
  );
};

const validate = (values) => {
  const errors = {};
  if (values.pincode && values.pincode.length !== 6)
    errors.pincode = "Enter valid PIN code";
  if (!values.name) errors.name = "Required";
  if (!values.city) errors.city = "Required";
  if (!values.state) errors.state = "Required";
  if (!values.address) errors.address = "Required";
  if (!values.landmark) errors.landmark = "Required";
  if (!values.phone) errors.phone = "Required";
  if (values.phone && values.phone.length !== 10)
    errors.phone = "Enter valid phone no.";
  if (!values.pincode) errors.pincode = "Required";

  return errors;
};
export default reduxForm({
  form: "OrdersForm",
  validate,
})(OrdersForm);
