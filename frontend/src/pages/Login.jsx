import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLoginAction } from "../actions/auth-action";
import swal from 'sweetalert'
export default function Login({ history }) {
  const [login, setlogin] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.user);
  useEffect(() => {
    if (userInfo) {
      if (userInfo?.employeeInfo?.isAdmin == true) {
        history.push("/admin");
      } else {
        // history.push("/admin")
        history.push("/dashboard");
      }
    }
  }, [userInfo]);

  const onSubmitUserLogin = async (e) => {
    e.preventDefault();
    console.log(login);
    dispatch(userLoginAction(login));
    // e.target.reset();
    // swal({
    //       title:"Login Successfully...🥰🥰🥰",
    //       icon: "success"     
    //   })
  };

  return (
    <div className="container mt-5">
      <section className="section-container">
        <div className="container py-3 ">
          <div className="row d-flex justify-content-center align-items-center ">
            <div className="col col-xl-10">
              <div className="card card-container">
                <div className="row g-0">
                  <div className="col-md-6 col-lg-5 d-none d-md-block">
                    <img
                      src="https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435"
                      alt="login form"
                      className="img-fluid img-container"
                    />
                  </div>
                  <div className="col-md-6 col-lg-7 d-flex align-items-center">
                    <div className="card-body p-3 p-lg-3 text-black">
                      <form onSubmit={onSubmitUserLogin}>
                        <div className="d-flex align-items-center mb-3 pb-1">
                          <i className="fas fa-cubes fa-2x me-3 i-container"></i>
                          <span className="h1 fw-bold mb-0">Logo</span>
                        </div>

                        <h5 className="fw-normal mb-3 pb-3 h-container">
                          Sign into your account
                        </h5>

                        <div className="form-outline mb-4">
                          <input
                            type="email"
                            id="form2Example17"
                            onChange={(e) =>
                              setlogin({ ...login, email: e.target.value })
                            }
                            className="form-control form-control-lg"
                            required
                          />
                          <label className="form-label" for="form2Example17">
                            Email address
                          </label>
                        </div>

                        <div className="form-outline mb-4">
                          <input
                            type="password"
                            id="form2Example27"
                            onChange={(e) =>
                              setlogin({ ...login, password: e.target.value })
                            }
                            className="form-control form-control-lg"
                            required
                          />
                          <label className="form-label" for="form2Example27">
                            Password
                          </label>
                        </div>

                        <div className="pt-1 mb-2">
                          <button
                            className="btn btn-dark text-warning btn-lg btn-block"
                            type="button"
                            onClick={onSubmitUserLogin}
                          >
                            Login
                          </button>
                        </div>

                        {/* <a className="small text-muted" href="#!">Forgot password?</a>
                        <p className="mb-5 pb-lg-2 p-container">Don't have an account? <Link href="#!"
                             className='pa-container' to="/register">Register here</Link></p>
                        <a href="#!" className="small text-muted">Terms of use.</a>
                        <a href="#!" className="small text-muted">Privacy policy</a> */}
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
