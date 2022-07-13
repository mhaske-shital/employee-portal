const jwt = require("jsonwebtoken");
const user = require("../modal/employee");
exports.authGuard = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    console.log(token);
    if (!token) {
      return res.status(401).json({
        success: false,
        message: "no token provided",
      });
    }
    await jwt.verify(token, process.env.JWT_SECRET_KEY);
    next();
  } catch (error) {
    res.status(401).json({
      success: false,
      message: "invalid token" + error,
    });
  }
};
exports.isAdmin = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const { userId } = jwt.verify(token, process.env.JWT_SECRET_KEY);
    const { isAdmin } = await user.findById(userId).select("isAdmin");
    if (isAdmin) {
      next();
    } else {
      res.status(401).json({
        success: false,
        message: "unuthorize user, you are not admin",
      });
    }
  } catch (error) {
    res.json({
      success: false,
      message: "error" + error,
    });
  }
};
