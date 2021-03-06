import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { GetUserList, UserDelete } from "../_redux/UserAction";
const UserList = () => {
  const userList = useSelector((state) => state.userInfo.userList);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetUserList());
  }, []);
  const handleDelete = (id) => {
    confirmAlert({
      title: "Confirm To Delete",
      message: `Are you sure to delete this user?`,
      buttons: [
        {
          label: "Yes",
          onClick: () => dispatch(UserDelete(id)),
        },
        {
          label: "No",
        },
      ],
    });
  };

  return (
    <>
      <div className="d-flex justify-content-between">
        <h6>User List</h6>
      </div>
      <div className="mt-3">
        {userList != null && userList.length > 0 && (
          <table className="table table-striped">
            <thead>
              <tr>
                <th>SL</th>
                <th>Full Name</th>
                <th>Nick</th>
                <th>Phone</th>
                <th>Profession</th>
                <th>Village</th>
                <th>Village Area</th>
                <th>Gender</th>
                <th>Found Description</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {userList.map((item, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>{item.fullName}</td>
                  <td>{item.nickName}</td>
                  <td>{item.phoneNumber}</td>
                  <td>{item.profession}</td>
                  <td>{item.village}</td>
                  <td>{item.villageArea}</td>
                  <td>{item.gender}</td>
                  <td>{item.foundDescription}</td>
                  <td>
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

export default UserList;
