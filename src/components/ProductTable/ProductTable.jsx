import React, { Fragment } from "react";
import { Table, Message, Icon } from "semantic-ui-react";

const ProductTable = ({ products, isSelected, onClickEditButton }) => {
  let headers = [];
  if (products.length) {
    headers = Object.keys(products[0]);
  }

  const convertCase = (value) => {
    const result = value.replace(/([A-Z])/g, " $1");
    const finalResult = result.charAt(0).toUpperCase() + result.slice(1);
    return finalResult;
  };

  if (isSelected && !products.length)
    return (
      <div style={{ textAlign: "center" }}>
        <br />
        <Message>No products found</Message>
      </div>
    );
  if (!products.length)
    return (
      <div style={{ textAlign: "center" }}>
        <br />
        <Message>Please select Categories</Message>
      </div>
    );

  return (
    <Table>
      <Table.Header>
        <Table.Row>
          {headers.map((data, i) => {
            return (
              <Fragment key={i}>
                {data !== "_id" && data !== "categoryId" ? (
                  <Table.HeaderCell>{convertCase(data)}</Table.HeaderCell>
                  ) : null}

              </Fragment>
            );
          })}
          <Table.HeaderCell>Edit</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {products.map((items, i) => {
          return (
            <Table.Row key={i}>
              <Table.Cell>{items.name}</Table.Cell>
              <Table.Cell>₹ {items.originalPrice}</Table.Cell>
              <Table.Cell>₹ {items.showPrice}</Table.Cell>
              <Table.Cell>{items.maxQuantity}</Table.Cell>
              <Table.Cell>{items.description}</Table.Cell>
              <Table.Cell>
                <img
                  alt="categories"
                  src={items.image}
                  style={{ width: "200px", height: "200px" }}
                />
              </Table.Cell>
              <Table.Cell>
                {new Date(items.createdAt).toLocaleDateString()}
              </Table.Cell>
              <Table.Cell>
                {<Icon name="edit" onClick={()=>onClickEditButton(items)} />}
              </Table.Cell>
            </Table.Row>
          );
        })}
      </Table.Body>
    </Table>
  );
};

export default ProductTable;
