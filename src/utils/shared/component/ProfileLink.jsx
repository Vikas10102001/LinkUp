import React from "react";
import { Link } from "react-router-dom";

export default function ProfileLink({ label, id, additionalStyles }) {
  return (
    <Link to={`/profile/${id}`} className="link" style={additionalStyles}>
      {label}
    </Link>
  );
}
