import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { useHistory } from "react-router-dom";
import { GetproductList, ProductDelete } from "../_redux/ProductAction";
const ProductList = () => {
  const history = useHistory();

  const productArrList = useSelector((state) => state.productInfo.productList);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetproductList());
  }, []);
  const handleDelete = (id) => {
    confirmAlert({
      title: "Confirm To Delete",
      message: `Are you sure to delete this product?`,
      buttons: [
        {
          label: "Yes",
          onClick: () => dispatch(ProductDelete(id)),
        },
        {
          label: "No",
        },
      ],
    });
  };
  const handleEdit = (data) => {
    // dispatch(PreUpdateProduct(data))
  };
  return (
    <>
      <div className="d-flex justify-content-between">
        <h4>Product List</h4>
        <a
          className="btn btn-success btn-sm text-light"
          onClick={() => history.push("/product-add")}
        >
          Add Product
        </a>
      </div>
      <div className="mt-3">
        {productArrList != null && productArrList.length > 0 && (
          <table className="table table-striped">
            <thead>
              <tr>
                <th>SL</th>
                <th>Product Name</th>
                <th>Category</th>
                <th>Discount</th>
                <th>Code</th>
                <th>Priority</th>
                <th>Status</th>
                <th>Photo</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {productArrList.map((item, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>{item.productName}</td>
                  <td>{item.categoryName}</td>
                  <td>{item.discountPrice}</td>
                  <td>{item.productCode}</td>
                  <td>{item.priority}</td>
                  <td>{item.isActive ? "Active" : "Inactive"}</td>
                  <td>
                    <img
                      src={
                        process.env.REACT_APP_IMG_URL +
                        item.productImage.substring(2)
                      }
                      width="60"
                      height="40"
                    />
                  </td>
                  <td>
                    <a
                      className="btn btn-outline-success btn-sm mr-2"
                      onClick={() => handleEdit(item)}
                    >
                      <i className="fa fa-pencil"></i>
                    </a>
                    <a
                      className="btn btn-danger btn-sm"
                      onClick={() => handleDelete(item._id)}
                    >
                      <i className="fa fa-trash"></i>
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
};

export default ProductList;
