const intialState = {
  name: "",
  city: "",
};

const myReducer = (store = intialState, action) => {
  //action = {type:"NAME",payload:"------"}
  //Custom Logic to update Redux Store
  if (action.type === "NAME") {
    var newData = {
      ...store,
      name: action.payload,
    };
    store = newData;
  }
  return store;
};

export default myReducer;
