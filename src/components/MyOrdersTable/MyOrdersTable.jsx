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

  const onClickEditButton = (item) => {
    console.log(item);
  };

  return (
    <Fragment>
      <Table>
        <Table.Header>
          <Table.Row>
            {headers.map((data, i) => {
              return (
                <Fragment key={i}>
                  {data !== "_id" && data !== "customerId" ? (
                    <Table.HeaderCell>{convertCase(data)}</Table.HeaderCell>
                  ) : null}
                </Fragment>
              );
            })}
            <Table.HeaderCell>Edit</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {props.orders.map((items, i) => {
            return (
              <Table.Row key={i}>
                <Table.Cell>{items.customerName}</Table.Cell>
                <Table.Cell>₹ {items.totalPricePaid}</Table.Cell>
                <Table.Cell>
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
                        <Divider />
                      </Fragment>
                    );
                  })}
                </Table.Cell>
                <Table.Cell>{items.Address}</Table.Cell>
                <Table.Cell>{items.deliveryStatus}</Table.Cell>

                <Table.Cell>
                  {new Date(items.orderedDate).toLocaleDateString()}
                </Table.Cell>
                {items.deliveredDate ? (
                  <Table.Cell>
                    {new Date(items.deliveredDate).toLocaleDateString()}
                  </Table.Cell>
                ) : null}
                {items.inRouteDate ? (
                  <Table.Cell>
                    {new Date(items.inRouteDate).toLocaleDateString()}
                  </Table.Cell>
                ) : null}
                <Table.Cell>
                  {
                    <Icon
                      name="edit"
                      onClick={() => onClickEditButton(items)}
                    />
                  }
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </Fragment>
  );
};

export default MyOrdersTable;
