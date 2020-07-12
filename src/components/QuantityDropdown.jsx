import React from "react";
import { Dropdown } from "semantic-ui-react";
import _ from "lodash";

const QuantityDropdown = (props) => {
  const getOptions = (number, prefix = "Choice ") => {
    return _.times(number, (index) => ({
      key: index,
      text: `${prefix}${index}`,
      value: index,
    }));
  };
  return (
    <Dropdown
      placeholder="Qty"
      compact
      value={props.qty}
      onChange={(e, data) => props.changeQuantityHandler(data)}
      selection
      options={getOptions(10, "")}
    />
  );
};

export default QuantityDropdown;
