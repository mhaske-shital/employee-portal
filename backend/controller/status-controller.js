const status = require("../modal/status-modal");
const requestModal = require("../modal/request-modal");

exports.addStatus = async (req, res) => {
  try {
    const result = await status.create(req.body);
    res.json({
      count: result.length,
      success: true,
      message: "status added",
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

exports.getStatus = async (req, res) => {
  console.log(req.body);
  const statusType = req.query.type;
  try {
    const m = await requestModal.count({
      status: statusType,
    });
    console.log(m);
    res.json(m);
  } catch (err) {
    console.log(err);
  }
};
