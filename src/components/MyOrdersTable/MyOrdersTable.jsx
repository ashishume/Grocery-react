import React, { Fragment, useState, useEffect } from "react";
import "./MyOrdersTable.css";
import { Dropdown, Input } from "semantic-ui-react";

const MyOrdersTable = (props) => {
  const options = [
    {
      key: 2,
      text: "In Route",
      value: 2,
    },
    {
      key: 3,
      text: "Delivered Completed",
      value: 3,
    },
  ];
  const defaultDeliveryOptions = [
    {
      key: 2,
      text: "In Route",
      value: 2,
    },
    {
      key: 3,
      text: "Delivered",
      value: 3,
    },
    {
      key: 1,
      text: "Ordered",
      value: 1,
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

  // ORDERED: "Ordered", //1
  // ROUTE: "In Route", //2
  // DELIVERED: "Delivered", //3
  const [orders, setOrders] = useState([]);
  const [searchOrders, setSearchOrders] = useState([]);
  useEffect(() => {
    setOrders(props.orders);
  }, [searchOrders]);

  const onSearchOrders = (data) => {
    let tempArray = [];
    if (data.value == 3) {
      props.orders.map((value) => {
        if (value.deliveryStatus == "Delivered") tempArray.push(value);
      });
      setOrders(tempArray);
    } else if (data.value == 2) {
      props.orders.map((value) => {
        if (value.deliveryStatus == "In Route") tempArray.push(value);
      });
      setOrders(tempArray);
    } else if (data.value == 1) {
      props.orders.map((value) => {
        if (value.deliveryStatus == "Ordered") tempArray.push(value);
      });
      setOrders(tempArray);
    }
  };

  return (
    <Fragment>
      <Dropdown
        placeholder="Select Filter"
        fluid
        selection
        onChange={(e, data) => onSearchOrders(data)}
        options={defaultDeliveryOptions}
      />
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
            {orders.map((items, i) => {
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
                  <td>{new Date(items.orderedDate).toDateString()}</td>
                  {items.deliveredDate !== "N/A" ? (
                    <td>{new Date(items.deliveredDate).toDateString()}</td>
                  ) : (
                    <td>N/A</td>
                  )}
                  {items.inRouteDate !== "N/A" ? (
                    <td>{new Date(items.inRouteDate).toDateString()}</td>
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
