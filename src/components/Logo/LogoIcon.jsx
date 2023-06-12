import React from "react";
import { Link } from "react-router-dom";
export default function LogoIcon({ additionalStyles }) {
  return (
    <Link to="/" style={additionalStyles} className="logo-icon">
      <img src="/logo_transparent.png" alt="logo" width={40} height={40} />
    </Link>
  );
}
