import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
const Nav = ({ href, link }) => {
  const { moveToNext } = useContext(AuthContext);

  return (
    <li
      className="list-none cursor-pointer mr-8"
      onClick={() => moveToNext(href)}
    >
      {link}
    </li>
  );
};

export default Nav;
