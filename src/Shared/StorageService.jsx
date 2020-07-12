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
export const QuantityStorageService = (qty, item) => {
  const renderData = (qty, item) => {
    const getItem = localStorage.getItem("cartItems");
    if (getItem !== null) {
      const tempArray = JSON.parse(getItem);
      tempArray.map((value) => {
        if (value._id === item._id) value.quantity = qty;
      });

      const data = JSON.stringify(tempArray);
      localStorage.setItem("cartItems", data);
    }
  };

  return renderData(qty, item);
};
export const RemoveFromCartService = (item) => {
  const renderData = (item) => {
    const getItem = localStorage.getItem("cartItems");
    if (getItem !== null) {
      const tempArray = JSON.parse(getItem);
      let filterItems = tempArray.filter((value) => value._id !== item._id);
      const data = JSON.stringify(filterItems);
      localStorage.setItem("cartItems", data);
    }
  };

  return renderData(item);
};
export const GetAllStorageData = () => {
  const renderData = () => {
    const getItem = localStorage.getItem("cartItems");
    if (getItem !== null) {
      const tempArray = JSON.parse(getItem);
      return tempArray;
    }
    return []
  };

  return renderData();
};
