import React from "react";
import { Link } from "react-router-dom";

export default function ProfileLink({ label, id }) {
  return <Link to={`/profile/:${id}`}>{label}</Link>;
}
