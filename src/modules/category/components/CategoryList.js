import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const CategoryList = () => {
  const categoryList = (useSelector = (state) =>
    state.categoryInfo.categoryList);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetCategoryList());
  }, []);

  return (
    <>
      <div className="d-flex justify-content-between">
        <h6>Category List</h6>
        <a className="btn btn-success btn-sm">Add Category</a>
      </div>
      <div>
        {categoryList && categoryList !== null && categoryList.length > 0 && (
          <table className="table table-striped">
            <thead>
              <tr>
                <th>SL</th>
                <th>Category Name</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {CategoryList.map((item, index) => {
                <tr>
                  <td>{index + 1}</td>
                  <td>{item.categoryName}</td>
                  <td>{item.isActive ? "Active" : "Inactive"}</td>
                  <td>
                    <a
                      className="btn btn-danger btn-sm"
                      onClick={() => handleDelete(item._id)}
                    >
                      <i className="fa fa-delete">Remove</i>
                    </a>
                  </td>
                </tr>;
              })}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
};

export default CategoryList;
