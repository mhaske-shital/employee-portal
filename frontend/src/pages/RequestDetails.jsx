import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { requestAction } from "../actions/request-action";
export default function RequestDetails() {
  const { userInfo } = useSelector((state) => state.user);
  const [requestDetail, setrequestDetail] = useState({
    name: userInfo.employeeInfo.email,
    type: " ",
    Requestname: " ",
    employeId: userInfo.employeeInfo._id,
  });
  const { register, handleSubmit, reset } = useForm();

  const [requestName, setrequestName] = useState("database");
  const dispatch = useDispatch();
  const { requestInfo } = useSelector((state) => state.request);

  const handleChange = async (e, form) => {
    e.preventDefault();
    dispatch(requestAction(requestDetail));
    console.log(requestName);
    
    alert("Request Sent Successfully");
    e.target.reset();
     
  };
  return (
    <div className="container-fluid alert alert-danger mt-5">
      <br />
      <h1 classNameName="text-center ">RequestDetails</h1>
      <br />
      <div classNameName="row">
        <div classNameName="col-sm-8 offset-sm-2"  >
          <div classNameName="card">
            <div classNameName="card-body">
              <form onSubmit={handleChange}>
                <div className="form-group row">
                  <label className="col-sm-2">Name</label>
                  <div className="col-sm-6">
                    <input
                      type="text"
                      className="form-control"
                      id="disabledInput"
                      value={userInfo.employeeInfo.email}
                      disabled
                      minLength={5} 
                    />
                  </div>
                </div>
                <br />
                <div className="form-group row">
                  <label className="col-sm-2">Employe Id</label>
                  <div className="col-sm-6">
                    <input
                      type="text"
                      className="form-control"
                      id="disabledInput"
                      value={userInfo.employeeInfo._id}
                      disabled
                    />
                  </div>
                </div>
                <br />
                <div className="form-group row">
                  <label className="col-sm-2 col-form-label">
                    Request Name
                  </label>
                  <div className="col-sm-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Request name"
                      onChange={(e) => {
                        setrequestDetail({
                          ...requestDetail,
                          Requestname: e.target.value,
                        });
                      }}
                      minLength={1} maxLength={25}
                    />
                  </div>
                </div>
                <br />

                <div className="form-group row">
                  <label className="col-sm-2 col-form-label">
                    Approval From
                  </label>
                  <div className="col-sm-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Approval Name"
                      onChange={(e) => {
                        setrequestDetail({
                          ...requestDetail,
                          Approvalname: e.target.value,
                        });
                      }}
                      minLength={1} maxLength={25}
                    />
                  </div>
                </div>
                <br />

                <div className="form-group row">
                  <label className="col-sm-2 col-form-label">Description</label>
                  <div className="col-sm-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Description"
                      onChange={(e) => {
                        setrequestDetail({
                          ...requestDetail,
                          Description: e.target.value,
                        });
                      }}
                      minLength={1}  
                    />
                  </div>
                </div>
                <br />

                <div className="form-group row">
                  <label className="col-sm-2 col-form-label">Subject</label>
                  <div className="col-sm-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Subject"
                      onChange={(e) => {
                        setrequestDetail({
                          ...requestDetail,
                          Subject: e.target.value,
                        });
                      }}
                      minLength={1} maxLength={25}
                    />
                  </div>
                </div>
                <br />

                <div className="form-group row">
                  <label className="col-sm-2 col-form-label">
                    Request type
                  </label>

                  <div className="col-sm-6">
                    <select
                      className="form-select"
                      aria-label="Default select example"
                      onChange={(e) => {
                        setrequestDetail({
                          ...requestDetail,
                          type: e.target.value,
                        });
                      }}
                    >
                      <option selected>Open this select menu</option>
                      <option value="high">high</option>
                      <option value="medium">medium</option>
                      <option value="low">low</option>
                    </select>
                  </div>
                </div>
                <br />
                <button
                  className="btn btn-dark text-warning ms-5 text-center"
                  style={{ width: 180 }}
                  onClick={(handleSubmit) => reset()}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
