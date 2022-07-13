import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

export default function Navbar({ history }) {
  const dispatch = useDispatch();

  const { userInfo } = useSelector((state) => state.user);

  //  console.log(userInfo.admin);

  return (
    <div>
      <nav
        className="navbar navbar-expand-sm px-5 bg-dark fixed-top"
        style={{ width: "auto" }}
      >
        <div className="container-fluid">
          <Link to="/" href="/" className="navbar-brand text-warning">
            EMPLOYEE PORTAL
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarID"
            aria-controls="navbarID"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarID">
             
              <ul className="navbar-nav ms-auto">
                {userInfo ? (
                  <div className="dropdown ">
                    <button
                      className="btn btn-warning dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {userInfo?.employeeInfo?.name}
                    </button>
                    <ul
                      className="dropdown-menu bg-dark text-warning "
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <Link
                          className="dropdown-item  text-warning"
                          to="/logout"
                        >
                          Logout
                        </Link>
                      </li>
                      {userInfo?.employeeInfo?.isAdmin ? (
                        <div>
                          <li>
                            <Link
                              className="dropdown-item text-warning"
                              to="/add-employee"
                            >
                              Add Employee
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item text-warning"
                              to="/admin"
                            >
                              Admin
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item text-warning"
                              to="/all-employee"
                            >
                              All Employee
                            </Link>
                          </li>
                          {/* <li><Link className="dropdown-item text-dark" to='/add-product' >Add Product</Link></li>
                                        <li><Link className="dropdown-item text-dark" to='/adminOrders' >Admin orders</Link></li> */}
                        </div>
                      ) : (
                        <li>
                          <Link
                            className="dropdown-item  text-warning"
                            to="/dashboard"
                          >
                            Dashboard
                          </Link>
                        </li>
                      )}
                    </ul>
                  </div>
                ) : (
                  <li>
                    <Link
                      className="nav-link active text-warning"
                      aria-current="page"
                      to="/login"
                    >
                      Login
                    </Link>
                    {/* <Link className="dropdown-item text-dark" to="/dashboard">Dashboard</Link> */}
                  </li>
                )}
              </ul>
            </div>
           
        </div>
      </nav>
    </div>
  );
}
