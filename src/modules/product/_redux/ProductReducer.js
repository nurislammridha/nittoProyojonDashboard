import * as Types from "./Types";

const initialState = {
  isCategory: false,
  productList: null,
};
const ProductReducer = (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case Types.IS_CREATE_CATEGORY:
      return {
        ...state,
        isCategory: action.payload,
      };
    case Types.PRODUCT_LIST:
      return {
        ...state,
        productList: action.payload,
      };
    default:
      break;
  }
  return newState;
};
export default ProductReducer;
