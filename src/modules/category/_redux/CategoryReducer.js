import * as Types from "./Types";

const initialState = {
  isCategory: false,
};
const CategoryReducer = (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case Types.IS_CREATE_CATEGORY:
      return {
        ...state,
        isCategory: action.payload,
      };
    default:
      break;
  }
  return newState;
};
export default CategoryReducer;
