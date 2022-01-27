import { combineReducers } from "redux";
import AuthReducer from "src/modules/auth/_redux/AuthReducer";
import CategoryReducer from "src/modules/category/_redux/CategoryReducer";

// combine all of the reducers here
const rootReducer = combineReducers({
  authInfo: AuthReducer,
  categoryInfo: CategoryReducer,
});

export default rootReducer;
