import { combineReducers } from "redux";
import AuthReducer from "src/modules/auth/_redux/AuthReducer";
import CategoryReducer from "src/modules/category/_redux/CategoryReducer";
import ProductReducer from "src/modules/product/_redux/ProductReducer";
import UserReducer from "src/modules/user/_redux/UserReducer";

// combine all of the reducers here
const rootReducer = combineReducers({
  authInfo: AuthReducer,
  categoryInfo: CategoryReducer,
  productInfo: ProductReducer,
  userInfo: UserReducer,
});

export default rootReducer;
