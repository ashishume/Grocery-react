import React, { Fragment } from "react";
import "./MyOrdersTable.css";
import { Table, Icon, Divider } from "semantic-ui-react";

const MyOrdersTable = (props) => {
  const convertCase = (value) => {
    const result = value.replace(/([A-Z])/g, " $1");
    const finalResult = result.charAt(0).toUpperCase() + result.slice(1);
    return finalResult;
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
                  <td>{items.Address}</td>
                  <td>{items.modeOfPayment}</td>
                  <td>{items.deliveryStatus}</td>
                  <td>{new Date(items.orderedDate).toLocaleDateString()}</td>
                  {items.deliveredDate ? (
                    <td>
                      {new Date(items.deliveredDate).toLocaleDateString()}
                    </td>
                  ) : null}
                  {items.inRouteDate ? (
                    <td>{new Date(items.inRouteDate).toLocaleDateString()}</td>
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
