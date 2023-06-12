import React from "react";
import { Link } from "react-router-dom";
export default function Logo({ additionalStyles }) {
  return (
    <span className="logo" style={additionalStyles}>
      LinkUp
    </span>
  );
}
