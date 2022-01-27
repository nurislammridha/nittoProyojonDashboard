import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { SubmitCategory } from "../_redux/CategoryAction";

const CreateCategory = () => {
  const [category, setCategory] = useState("");
  const isCategory = useSelector((state) => state.categoryInfo.isCategory);
  const dispatch = useDispatch();
  const handleSubmit = () => {
    dispatch(SubmitCategory(category));
  };
  return (
    <>
      <div className="row">
        <div className="col-sm-2"></div>
        <div className="col-sm-8">
          <input
            className="form-control"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          {isCategory ? (
            <a className="btn btn-success btn-sm">
              {" "}
              <span
                class="spinner-border spinner-border-sm"
                role="status"
                aria-hidden="true"
              ></span>
            </a>
          ) : (
            <a
              className="btn btn-success btn-sm"
              onClick={() => handleSubmit()}
            >
              SUBMIT
            </a>
          )}
        </div>
        <div className="col-sm-2"></div>
      </div>
    </>
  );
};

export default CreateCategory;
