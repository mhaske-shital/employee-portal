const request = require("../modal/request-modal");
const jwt = require("jsonwebtoken");
const requestModal = require("../modal/request-modal");
exports.addrequestEmployee = async (req, res) => {
  try {
    const { userId } = await jwt.verify(
      req.headers.authorization,
      process.env.JWT_SECRET_KEY
    );
    req.body.userId = userId;
    const result = await request.create(req.body);
    res.json({
      success: true,
      message: "request added",

      result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: "error" + error,
      result: null,
    });
  }
};
exports.getrequestEmployee = async (req, res) => {
  try {
    // const m = await requestModal.count({
    //   status: true,
    // });
    // // res.json(m);
    // return;
    // console.log(m);
    const result = await request.find();
    res.json({
      count: result.length,
      success: true,
      message: " all request  ",
      data: result,
    });
  } catch (error) {
    res.json({
      success: true,
      message: "something went wrong" + error,
      data: null,
    });
  }
};

exports.getSingleRequest = async (req, res) => {
  try {
    const result = await request.findOne({ _id: req.params.id });
    res.json({
      success: true,
      count: result.length,
      message: "get single request",
      result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: "Error" + error,
      result: null,
    });
  }
};
exports.updateSingleRequest = async (req, res) => {
  try {
    const result = await request.findByIdAndUpdate(req.params.id, req.body);
    res.json({
      success: true,
      count: result.length,
      message: "update single request",
      result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: "Error" + error,
      result: null,
    });
  }
};

exports.deleterequestEmployee = async (req, res) => {
  try {
    const result = await request.deleteMany();
    res.json({
      count: result.length,
      success: true,
      message: " deleted  ",
      data: result,
    });
  } catch (error) {
    res.json({
      success: true,
      message: "something went wrong" + error,
      data: null,
    });
  }
};
