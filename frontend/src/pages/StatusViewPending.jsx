import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./style.css";
import { Paper, Grid, Typography, Stack } from "@mui/material";
import { useParams } from "react-router-dom";
import { getRequestAction } from "../actions/request-action";
import StopwatchImage from "./stopwatch.png";
export default function StatusView({ match }) {
  const dispatch = useDispatch();
  const [first, setfirst] = useState([]);
  const { userInfo } = useSelector((state) => state.user)
  let id = match.params.id;
  const [request, setrequest] = useState([]);
  useEffect(() => {
    // dispatch(getRequestAction())

    const getDate = async () => {
      const config={
        headers:{
          Authorization:userInfo?.token
        }
      }
      const { data } = await axios.get(`/get-request`,config);
      console.log(data);
      setfirst(data.data);
    };
    getDate();
    // getRequest()
  }, []);
  // console.log(match.params.id);

  useEffect(() => {
    const getRequest = async () => {
      const data = first.filter((item) => item.employeId === id);
      console.warn(data);
      setrequest(data);
      console.log(request);
    };
    getRequest();
  }, [first]);
  return (
    <>
      <Paper elevation={0}>
        <Grid container sx={{ bgcolor: "", mb: 5, height:"100vh" }} mt={5}>
          <Grid
            item
            xl={9}
            lg={9}
            md={9}
            sm={9}
            xs={9}
            marginTop={6}
            sx={{ mx: "auto" }}
          >
            <Paper sx={{ height: "60px", borderRadius: "0px" }} elevation={0}>
              <Typography sx={{ textalign: "center", fontSize: "26px" }}>
                My Pendig Request
              </Typography>
            </Paper>
          </Grid>
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            <Grid
              container
              sx={{ overflowY: "scroll", maxHeight: "100vh", mb: 5 }}
            >
              {request.map((d, i) => {
                if (d.status === false) {
                  return (
                    <Grid
                      key={i}
                      item
                      xl={9}
                      lg={9}
                      md={9}
                      sm={9}
                      xs={9}
                      sx={GridStyle}
                    >
                      <Grid container>
                        <Grid
                          item
                          xl={1}
                          lg={1}
                          md={1}
                          sm={1}
                          xs={3}
                          marginTop="10px"
                          marginBottom="10px"
                          sx={{ textAlign: "center" }}
                        >
                          <img
                            src={StopwatchImage}
                            alt="image"
                            width="60px"
                            marginTop="10px"
                            style={{ marginLeft: "auto", marginRight: "auto" }}
                          />
                        </Grid>
                        <Grid item xl={10} lg={10} md={9} sm={8} xs={7}>
                          <Stack>
                            <Typography sx={{ color: "black" }}>
                              {i + 1} |
                              {d.Description ? <>{d.Description}</> : <>NA</>}
                            </Typography>
                            <Typography sx={{ color: "black" }}>
                              Approval Name :
                              {d.Approvalname ? <>{d.Approvalname}</> : <>NA</>}
                              | Subject:
                              {d.Subject ? <>{d.Subject}</> : <>NA</>} | Type:
                              {d.type ? <>{d.type}</> : <>NA</>}
                            </Typography>
                            <Typography sx={{ color: "black" }}>
                              Status : {d.status ? <>Granted</> : <>Pending</>}{" "}
                              | Created At :
                              {d.createdAt ? <>{d.createdAt}</> : <>NA</>}
                            </Typography>
                          </Stack>
                        </Grid>
                      </Grid>
                    </Grid>
                  );
                }
              })}
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}

const GridStyle = {
  boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
  bgcolor: "white",
  mx: "auto",
  mt: 1,
  borderRadius: "10px",
  mb: 1,
};

// return (
//   <div
//     className="row w-100 pb-5 m-0 "
//     style={{ height: "100%", background: "#A9A9A9" }}
//   >
//     <div
//       className="shadow mx-auto  mt-5 ml-5   "
//       style={{
//         background: "white",
//         width: "1200px",
//       }}
//     >
//       <div className="Summary-Div-Wrap">
//         <div className="row w-100 m-0 p-0">
//           <div className="col mt-2">
//             <h3>My Pending Requests</h3>
//           </div>
//         </div>
//       </div>
//     </div>
//     <div
//       className="info mx-auto pb-5 "
//       style={{
//         overflowY: "scroll",
//         maxHeight: "100vh",
//         background: "#A9A9A9",
//       }}
//     >
//       {request.map((item, index) => {
//         if (item.status === false) {
//           return (
//             <div
//               className="shadow"
//               style={{
//                 background: "white",
//                 width: "1200px",
//                 minWidth: "100px",
//                 height: "90px",
//                 marginLeft: "10%",
//               }}
//               key={index}
//             >
//               {/* <div className="Summary-Div-Wrap">
//                 <div className="row w-100 m-0 p-0"> */}
//               <div
//                 className="row w-100 m-0 p-0 pb-5 viewStatusTable"
//                 style={{ height: "100%" }}
//               >
//                 <div className="col-1">
//                   <div
//                     className="shadow sticker"
//                     style={{
//                       width: "70px",
//                       height: "70px",
//                       marginLeft: "10px",
//                       marginTop: "10px",
//                       // background: "red",
//                     }}
//                   >
//                     <img src={StopwatchImage} alt="img" width="70px" />
//                   </div>
//                 </div>
//                 <div className="col-11 ">
//                   <div className="row w-100 atext">
//                     <div className="col-12" style={{ height: "25px" }}>
//                       {index + 1} |
//                       <c>
//                         {item.Description ? <>{item.Description}</> : <>NA</>}
//                       </c>
//                     </div>
//                     <div className="col-12" style={{ height: "25px" }}>
//                       Approval Name :
//                       {item.Approvalname ? <>{item.Approvalname}</> : <>NA</>}
//                       | Subject:
//                       {item.Subject ? <>{item.Subject}</> : <>NA</>} | Type:
//                       {item.type ? <>{item.type}</> : <>NA</>}
//                     </div>
//                     <div className="col-12" style={{ height: "25px" }}>
//                       Status : {item.status ? <>Granted</> : <>Pending</>} |
//                       Created At :
//                       {item.createdAt ? <>{item.createdAt}</> : <>NA</>}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             // </div>
//           );
//         }
//       })}
//     </div>
//   </div>
// );
// }
