import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRequestAction } from "../actions/request-action";

export default function Admin() {
  const dispatch = useDispatch();
  const { allRequest } = useSelector((state) => state.getRequest);
  const [request, setrequest] = useState("");
  const { userInfo } = useSelector((state) => state.user)
  console.warn(allRequest);
  useEffect(() => {
    dispatch(getRequestAction());
    console.warn();
  }, []);

  const handleUpdateRequestStatus = async () => {
    const config={
      headers:{
        Authorization:userInfo?.token
      }
    }
    await axios.put(`http://localhost:5000/get-request/${request}`, {
      status: true,
    },config);
    dispatch(getRequestAction());
  };

  return (
    <div className="container-fluid alert alert-danger vh-100 mt-5">
        <div className="col col-sm-8 offset-2 mt-5">
           <div className="table-responsive">
              <table className="table table-bordered">
                <thead className="bg-warning">
                  <tr>
                    <th scope="col">Sr. No.</th>
                    <th scope="col">Email</th>
                    <th scope="col">Request Name</th>
                    <th scope="col">Approval From</th>
                    <th scope="col">Description</th>
                    <th scope="col">Subject</th>
                    <th scope="col">Type</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead >
                <tbody className="bg-dark text-light font-weight-bold w-100">
                  {allRequest &&
                    allRequest?.length > 0 &&
                    allRequest?.map((item, index) => (
                      <tr>
                        <th scope="row">{index + 1}</th>
                        <td className="text-capitalize">{item.name}</td>
                        <td className="text-capitalize">{item.Requestname}</td>
                        <td className="text-capitalize">{item.Approvalname}</td>
                        <td className="text-capitalize">{item.Description}</td>
                        <td className="text-capitalize">{item.Subject}</td>
                        <td className="text-capitalize">{item.type}</td>
                        <td>
                          {item.status ? (
                            <>Granted</>
                          ) : (
                            <button
                              className="btn btn-warning"
                              data-bs-target="#update"
                              data-bs-toggle="modal"
                              onClick={(e) => setrequest(item._id)}
                            >
                              Accept
                            </button>
                          )}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
           </div>

          <div class="modal fade" id="update">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header bg-warning">Request Granted ?</div>
                <div class="modal-body bg-dark">
                  <button
                    className="btn btn-success px-4"
                    data-bs-dismiss="modal"
                    onClick={handleUpdateRequestStatus}
                  >
                    {" "}
                    Yes{" "}
                  </button>
                  <button
                    className="btn btn-outline-danger ms-2 px-4"
                    data-bs-dismiss="modal"
                  >
                    No
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
     
  );
}
