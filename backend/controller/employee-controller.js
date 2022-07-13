const employee = require("../modal/employee");
const bcrypt = require("bcrypt");
exports.addEmployee = async (req, res) => {
  let { password } = req.body;
  const salt = await bcrypt.genSalt(10);
  password = await bcrypt.hash(password, salt);

  try {
    const result = await employee.create({
      email: req.body.email,
      name: req.body.name,
      password,
      joiningDate: req.body.joiningDate,
      empcode: req.body.empcode,
      isAdmin: req.body.isAdmin,
    });
    res.json({
      count: result.length,
      success: true,
      message: "employee added",
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

exports.deleteEmployee = async (req, res) => {
  try {
    const result = await employee.findByIdAndDelete(req.params.id);
    res.json({
      count: result.length,
      success: true,
      message: "employee delete",
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

exports.deleteManyEmployee = async (req, res) => {
  try {
    const result = await employee.deleteMany();
    res.json({
      count: result.length,
      success: true,
      message: "all employee delete",
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
exports.getEmployee = async (req, res) => {
  try {
    const result = await employee.find();
    res.json({
      count: result.length,
      success: true,
      message: "all employee ",
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
exports.updateEmployee = async (req, res) => {
  try {
    const result = await employee.findByIdAndUpdate(req.params.id, req.body);
    res.json({
      count: result.length,
      success: true,
      message: "update employee ",
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
