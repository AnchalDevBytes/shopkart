import React from "react";

const FormatPrice = ({Price}) => {
  return Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 2,
  }).format(Price / 100);
};

export default FormatPrice;
