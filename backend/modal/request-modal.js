const mongoose = require("mongoose");
const { type } = require("os");

const RequestSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    Requestname: {
      type: String,
      required: true,
    },
    Approvalname: {
      type: String,
      required: true,
    },
    Description: {
      type: String,
      required: true,
    },
    Subject: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    status: {
      // type:mongoose.Types.ObjectId,
      // ref:"status",
      type: Boolean,
      required: true,
      default: false,
    },
    employeId: {
      type: mongoose.Types.ObjectId,
      ref: "employee",
      required: true,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("request", RequestSchema);
