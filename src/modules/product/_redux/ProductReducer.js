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
  afterUpdate: false,
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
    case Types.AFTER_UPDATE_PRODUCT:
      return {
        ...state,
        afterUpdate: action.payload,
      };
    case Types.PRE_UPDATE_PRODUCT:
      console.log("action.payload", action.payload);
      const {
        _id,
        productName,
        categoryId,
        categoryName,
        productMRP,
        discountPrice,
        productCode,
        priority,
        productImage,
      } = action.payload;
      let productEdit = initialState.productInput;
      productEdit.productName = productName;
      productEdit.categoryId = categoryId;
      productEdit.categoryName = categoryName;
      productEdit.productMRP = productMRP;
      productEdit.discountPrice = discountPrice;
      productEdit.productCode = productCode;
      productEdit.priority = priority;
      productEdit.imagePreviewUrl =
        process.env.REACT_APP_IMG_URL + productImage.substring(2);
      productEdit.id = _id;

      return {
        ...state,
        productInput: productEdit,
      };
    default:
      break;
  }
  return newState;
};
export default ProductReducer;
