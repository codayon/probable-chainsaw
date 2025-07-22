import React from "react";
import { Link } from "react-router";

const MenuItem = ({ to, className, label }) => {
  return (
    <li>
      <Link to={to} className={`${className}`}>
        {label}
      </Link>
    </li>
  );
};

export default MenuItem;
