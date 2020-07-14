import React, { Fragment } from "react";
import "./MyOrdersTable.css";
import { Dropdown } from "semantic-ui-react";

const MyOrdersTable = (props) => {
  const options = [
    {
      key: "In Route",
      text: "In Route",
      value: 2,
    },
    {
      key: "In Delivered",
      text: "In Delivered",
      value: 3,
    },
  ];

  const convertCase = (value) => {
    const result = value.replace(/([A-Z])/g, " $1");
    const finalResult = result.charAt(0).toUpperCase() + result.slice(1);
    return finalResult;
  };
  const onChangeOrderStatus = (data, item) => {
    const body = {
      deliveryStatus: data.value,
      orderId: item._id,
    };
    props.updateOrderStatus(body);
  };
  let headers = [];
  if (props.orders.length) {
    headers = Object.keys(props.orders[0]);
  }
  return (
    <Fragment>
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              {headers.map((data, i) => {
                return (
                  <Fragment key={i}>
                    {data !== "_id" && data !== "customerId" ? (
                      <td>{convertCase(data)}</td>
                    ) : null}
                  </Fragment>
                );
              })}
              {props.isAdminOrders ? <td>Change Delivery Status</td> : null}
            </tr>
          </thead>
          <tbody>
            {props.orders.map((items, i) => {
              return (
                <tr key={i}>
                  <td>{items.customerName}</td>
                  <td>₹ {items.totalPricePaid}</td>
                  <td>
                    {items.productDetails.map((value, index) => {
                      return (
                        <Fragment key={index}>
                          <strong>Name:</strong>
                          <span className="productDetailsTable">
                            {value.productName}
                          </span>
                          <br />
                          <strong>Quantity:</strong>
                          <span className="productDetailsTable">
                            {value.quantity}
                          </span>
                          <br />
                          <strong>Price:</strong>
                          <span className="productDetailsTable">
                            ₹ {value.rate}
                          </span>
                          <br />
                        </Fragment>
                      );
                    })}
                  </td>
                  <td>{items.modeOfPayment}</td>
                  <td>{items.Address}</td>
                  <td>{items.deliveryStatus}</td>
                  <td>{new Date(items.orderedDate).toLocaleDateString()}</td>
                  {items.deliveredDate !== "N/A" ? (
                    <td>
                      {new Date(items.deliveredDate).toLocaleDateString()}
                    </td>
                  ) : (
                    <td>N/A</td>
                  )}
                  {items.inRouteDate !== "N/A" ? (
                    <td>{new Date(items.inRouteDate).toLocaleDateString()}</td>
                  ) : (
                    <td>N/A</td>
                  )}
                  {props.isAdminOrders ? (
                    <td>
                      <Dropdown
                        placeholder="Select Status"
                        fluid
                        selection
                        onChange={(e, data) => onChangeOrderStatus(data, items)}
                        options={options}
                      />
                    </td>
                  ) : null}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Fragment>
  );
};

export default MyOrdersTable;
