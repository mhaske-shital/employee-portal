import React from "react";
import { Link } from "react-router-dom";
import "../search.css";

export default function RequestView() {
  return (
    <div className=" container-fluid vh-100 alert alert-danger mt-5">
      <h1 className="text-center"> What is category do you need help</h1>
      <div className="sb-example-1">
        <div className="search ">
          <input
            type="text"
            style={{ color: "black", maxHeight: "50px" }}
            className="searchTerm"
            placeholder="What are you looking for?"
          />
          <button type="submit" className="searchButton">
            <i class="fa fa-search"></i>
          </button>
        </div>
      </div>
      {/* card start */}

      <div className="row mt-5">
        <div className="col-sm-3">
          <div className="card border-light">
            <div className="card-body bg-dark text-warning">
              <h1>
                <i class="bi bi-server"></i>
              </h1>
              <Link to="/request-details" className="nav-link active text-warning">
                Change data
              </Link>
            </div>
          </div>
        </div>

        <div className="col col-sm-3 ">
          <div className="card border-light">
            <div className="card-body bg-dark text-warning">
              <h1>
                <i class="bi bi-envelope-check"></i>
              </h1>
              <Link to="/request-details" className="nav-link active text-warning">
                Database
              </Link>
            </div>
          </div>
        </div>
        <div className="col col-sm-3 ">
          <div className="card border-light">
            <div className="card-body bg-dark text-warning">
              <h1>
                <i class="bi bi-envelope-check"></i>
              </h1>
              <Link to="/request-details" className="nav-link active text-warning">
                SQl
              </Link>
            </div>
          </div>
        </div>
        <div className="col col-sm-3 ">
          <div className="card border-light">
            <div className="card-body bg-dark text-warning">
              <h1>
                <i className="bi bi-envelope-check"></i>
              </h1>
              <Link to="/request-details" className="nav-link active text-warning">
                To acess login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
