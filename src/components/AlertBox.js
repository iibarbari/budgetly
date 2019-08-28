import React from "react";
import { Alert } from "reactstrap";

const AlertBox = ({ type, text }) => {
  return <Alert color={type}>{text}</Alert>;
};

export default AlertBox;
