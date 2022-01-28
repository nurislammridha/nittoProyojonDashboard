import * as Types from "./Types";

const initialState = {
  productList: null,
  productInput: {
    productName: "",
    categoryId: "",
    categoryName: "",
    productMRP: "",
    discountPrice: "",
    productCode: "",
    productImage: "",
    priority: "Low",
    imagePreviewUrl: "",
  },
  isCreateProduct: false,
};
const ProductReducer = (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case Types.GET_PRODUCT_INPUT:
      const productInput = { ...state.productInput };
      productInput[action.payload.name] = action.payload.value;
      return {
        ...state,
        productInput: productInput,
      };
    case Types.PRODUCT_LIST:
      return {
        ...state,
        productList: action.payload,
      };
    case Types.IS_CREATE_PRODUCT:
      return {
        ...state,
        isCreateProduct: action.payload,
      };
    case Types.AFTER_CREATE_PRODUCT:
      const productInputAfter = initialState.productInput;
      return {
        ...state,
        productInput: productInputAfter,
      };
    default:
      break;
  }
  return newState;
};
export default ProductReducer;
