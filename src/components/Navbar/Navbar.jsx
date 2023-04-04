import React, { useContext, useEffect, useState } from "react";
import { navLinks } from "../../Data";
import { HiMenuAlt1, HiX } from "react-icons/hi";
import MobileNavLinks from "./MobileNavLinks";
import Nav from "./Nav";
import { motion } from "framer-motion";
import { AuthContext } from "../context/AuthContext";
import { Box } from "@mui/material";
import { NavLink } from "react-router-dom";

const Navbar = ({ isLogin }) => {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState(null);
  const { moveToNext, profileData, logout } = useContext(AuthContext);
  useEffect(() => {
    const scrollActive = () => {
      setActive(window.scrollY > 20);
    };
    window.addEventListener("scroll", scrollActive);
    return () => window.removeEventListener("scroll", scrollActive);
  }, [active]);

  return (
    <div
      id="#"
      className={`${
        active ? "shadow-lg bg-Solitude" : ""
      } fixed w-full top-0 left-0 z-20`}
    
    >
      <div>
        <div
          className={`${
            active ? "py-2 transition-all duration-300" : "py-4"
          } container  mx-auto flex items-center justify-between px-2`}
        >
          <div className="flex items-center gap-4">
            <HiMenuAlt1
              className="text-3xl sm:hidden cursor-pointer"
              onClick={() => setToggle(true)}
            />
            <NavLink to="/">
              <div className="text-xl text-Teal uppercase tracking-wide font-bold">
                EBS-CSS
              </div>
            </NavLink>
          </div>
          <div className="sm:flex items-center hidden">
            {navLinks.map((navLink) => {
           
              return (
                <Nav
                  key={navLink.id}
                  {...navLink}
                  isLogin={isLogin}
                  userCourse={profileData.course}
                />
              );
            })}
          </div>
          {toggle && (
            <motion.div
              initial={{ x: -500, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="fixed h-full w-96 top-0 left-0 z-20 bg-Teal text-white flex flex-col justify-center items-center shadow-lg gap-8 py-8"
            >
              {navLinks.map((navLink) => {
                if (!isLogin) {
                  delete navLink["profile"];
                }
                return (
                  <MobileNavLinks
                    key={navLink.id}
                    {...navLink}
                    isLogin={isLogin}
                    userCourse={profileData.course}
                    close={setToggle}
                  />
                );
              })}
              <HiX
                className="absolute right-12 top-12 text-3xl cursor-pointer"
                onClick={() => setToggle((prev) => !prev)}
              />
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
