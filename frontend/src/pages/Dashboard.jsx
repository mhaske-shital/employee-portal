import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import "../search.css";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
// import { useState } from "react";
// import laptop from "./laptop.jpg";
export default function Dashboard() {
  const [storeDataCountP, setDataCountP] = useState();
  const [storeDataCountG, setDataCountG] = useState();
  const { userInfo } = useSelector((state) => state.user);

  async function getAllRequest() {
    await axios.get("/get-status/status?type=false").then((res) => {
      setDataCountP(res.data);
    });
    await axios.get("/get-status/status?type=true").then((res) => {
      setDataCountG(res.data);
    });
  }
  useEffect(() => {
    getAllRequest();
  }, []);

  return (
    <>
      <div
        className="row w-100 dashboardImage mt-5"
        // style={}
      >
        <div class="d-flex sb-example-1">
          <div class="d-flex search">
            <input
              type="text"
              style={{ color: "black", maxHeight: "50px" }}
              class="searchTerm"
              placeholder="What are you looking for?"
            />
            <button type="submit" class="searchButton">
              <i class="fa fa-search"></i>
            </button>
          </div>
        </div>

        <div className="row">
          <div className="Need-Something-Div ">
            <div
              className="card "
              style={{ background: "#01BC8A", minWidth: "250px" }}
            >
              <div className="card-body">
                <div className="d-flex justify-content-around">
                  <div>
                    <br />
                    <h1>
                      <i
                        class=" shadow bi bi-plus-square-fill"
                        style={{ color: "white" }}
                      ></i>
                    </h1>
                  </div>
                  <div className=" text-start">
                    <span
                      class="req-dashboard-inner-head ml-0"
                      style={{
                        color: "white",
                        textAlign: "left",
                      }}
                    >
                      I need something
                    </span>
                    <br />

                    <span
                      class="req-dashboard-inner-h2 ml-0"
                      style={{
                        color: "white",
                        fontSize: "28px",
                        width: "100%",
                      }}
                    >
                      <b
                        style={{
                          textAlign: "left",
                        }}
                      >
                        New
                      </b>
                    </span>
                    <br />
                    <Link
                      className="btn btn-light text-success"
                      to="/request-view"
                    >
                      <b style={{ color: "#01BC8A" }}>Request to service</b>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className=" row w-100 p-0 m-0 mx-auto text-center pb-5  "
        style={{ background: "#E7E9E8", width: "auto" }}
      >
        <div
          className="shadow m-auto p-0 mt-5 rounded "
          style={{
            background: "white",
            // maxWidth: "500px",
            width: "auto",
            // minWidth: "100px",
            minHeight: "250px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <div className="Summary-Div-Wrap ">
            <div className="row w-100 m-0 p-0 ">
              <div
                className="col-12 mt-2 text-start  "
                style={{ width: "auto" }}
              >
                <h3>Summary</h3>
              </div>
              <div className="col-12 p-0 m-0 ">
                <div
                  className=""
                  style={{
                    color: "#7B7A78",
                    height: "35px",
                    width: "auto",
                    background: "#f5f5f5",
                    paddingLeft: "13px",
                    paddingTop: "5px",
                  }}
                >
                  <h5 className="text-start ">Requests</h5>
                </div>
              </div>
              <div className="col-12 mt-3 " style={{ height: "auto" }}>
                <div className="row w-100 m-0 p-0">
                  <div
                    className="col-xl-6 col-lg-6 col-md-6 col-sm-10 pr-3 mr-3"
                    style={{ height: "auto", boxShadow: "0px 0px 3px 0px " }}
                  >
                    <div className="text-center pt-5 ">
                      <h4>{storeDataCountP}</h4>
                      <h5>
                        <Link
                          style={{ color: "red", textDecoration: "none" }}
                          to={`/request-status-p/${userInfo?.employeeInfo?._id}`}
                        >
                          Pending
                        </Link>
                      </h5>
                    </div>
                  </div>
                  <div
                    className="col-xl-6 col-lg-6 col-md-6 col-sm-10 pl-3 ml-3"
                    style={{ height: "auto", boxShadow: "0px 0px 3px 0px " }}
                  >
                    <div className="text-center pt-5">
                      <h4>{storeDataCountG}</h4>
                      <h5>
                        <Link
                          style={{ color: "green", textDecoration: "none" }}
                          to={`/request-status-g/${userInfo?.employeeInfo?._id}`}
                        >
                          Granted
                        </Link>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
