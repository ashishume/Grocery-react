export const AddToCartStorageService = (item) => {
  let array = [];
  const renderData = (item) => {
    item.quantity = 0;
    const getItem = localStorage.getItem("cartItems");
    if (getItem !== null) {
      const tempArray = JSON.parse(getItem);
      tempArray.push(item);
      const data = JSON.stringify(tempArray);
      localStorage.setItem("cartItems", data);
    } else {
      array.push(item);
      localStorage.setItem("cartItems", JSON.stringify(array));
    }
  };

  return renderData(item);
};
export const QuantityStorageService = (item) => {
  let array = [];
  const renderData = (item) => {
    item.quantity = 0;
    const getItem = localStorage.getItem("cartItems");
    if (getItem !== null) {
      const tempArray = JSON.parse(getItem);
      tempArray.push(item);
      const data = JSON.stringify(tempArray);
      localStorage.setItem("cartItems", data);
    } else {
      array.push(item);
      localStorage.setItem("cartItems", JSON.stringify(array));
    }
  };

  return renderData(item);
};
