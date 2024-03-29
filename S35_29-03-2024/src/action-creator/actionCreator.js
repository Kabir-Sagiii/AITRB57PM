export const nameActionCreator = (data) => {
  return {
    type: "NAME",
    payload: data,
  };
};

export const cityActionCreator = (cityName) => {
  return {
    type: "CITY",
    payload: cityName,
  };
};

export const cartActionCreator = (product) => {
  return {
    type: "PRODUCT",
    payload: product,
  };
};
