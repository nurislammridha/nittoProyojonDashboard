import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const CreateProduct = () => {
  // const [category, setCategory] = useState("");
  // const isCategory = useSelector((state) => state.categoryInfo.isCategory);
  // const dispatch = useDispatch();
  // const handleSubmit = () => {
  //   dispatch(SubmitCategory(category));
  // };
  return (
    <>
      <div className="row">
        <div className="col-sm-6">
          <div>
            <h6>product Name</h6>
            <input className="form-control" />
          </div>
        </div>
        <div className="col-sm-6">
          <div>
            <h6>product Name</h6>
            <input className="form-control" />
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateProduct;
