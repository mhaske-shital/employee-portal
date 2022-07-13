import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./style.css";
import { useParams } from "react-router-dom";
import { getRequestAction } from "../actions/request-action";
import ApprovedImage from "./approved.png";
import { Paper, Grid, Typography, Stack } from "@mui/material";

export default function StatusView({ match }) {
  const dispatch = useDispatch();
  const [first, setfirst] = useState([]);
  let id = match.params.id;
  const [request, setrequest] = useState([]);
  const { userInfo } = useSelector((state) => state.user)
  useEffect(() => {
    const getDate = async () => {
      const config={
        headers:{
          Authorization:userInfo?.token
        }
      }
      const { data } = await axios.get(`/get-request`,config);
      setfirst(data.data);
    };
    getDate();
  }, []);

  useEffect(() => {
    const getRequest = async () => {
      const data = first.filter((item) => item.employeId === id);
      setrequest(data);
    };
    getRequest();
  }, [first]);

  return (
    <div>
      <Paper elevation={0}>
        <Grid container sx={{ bgcolor: "", mb: 5,height:"100vh" }}mt={5}>
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
                My Completed Request
              </Typography>
            </Paper>
          </Grid>
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            <Grid
              container
              sx={{ overflowY: "scroll", maxHeight: "100vh", mb: 5 }}
            >
              {request.map((d, i) => {
                if (d.status === true) {
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
                            src={ApprovedImage}
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
    </div>
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
