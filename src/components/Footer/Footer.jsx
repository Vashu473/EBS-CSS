import React, { useContext } from "react";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsPinterest,
} from "react-icons/bs";
import { motion } from "framer-motion";
import { AuthContext } from "../context/AuthContext";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const { moveToNext } = useContext(AuthContext);
  let arr2 = [
    { data: "Privacy Policy", id: 1, url: "privacy/#" },
    { data: "Sitemap", id: 2, url: "/" },
    { data: "Careers", id: 3, url: "/" },
    { data: "Terms & Conditions", id: 4, url: "terms/#" },
  ];

  return (
    <motion.div
      initial={{ height: 0 }}
      whileInView={{ height: "auto" }}
      transition={{ duration: 1 }}
      className="bg-Teal p-10"
    >
      <div className="grid md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 place-items-start gap-8 text-white">
        <div>
          <div className="font-bold mb-6">Get Started</div>
          <p className="text-sm leading-7">
            Just enroll on Earn By Skill (EBS-HTML) to start your career journey with
            us.
          </p>
        </div>
        <div>
          <div className="font-bold mb-6">Services</div>
          <div className="flex flex-col gap-4">
            <NavLink to="/" className="text-sm hover:underline">
              HTML
            </NavLink>
            <NavLink to="/" className="text-sm hover:underline">
            HTML
            </NavLink>
            <NavLink to="/" className="text-sm hover:underline">
            HTML
            </NavLink>
            <NavLink to="/" className="text-sm hover:underline">
            HTML
            </NavLink>
          </div>
        </div>
        <div>
          <div className="font-bold mb-6">Company</div>
          <div className="flex flex-col gap-4">
            {arr2.map((data) => (
              <a
                href="#"
                key={data.id}
                className="text-sm hover:underline cursor-pointer"
                onClick={() => moveToNext(data.url)}
              >
                {data.data}
              </a>
            ))}
          </div>
        </div>
        <div>
          <div className="font-bold mb-6">Follow us</div>
          <div className="text-sm mb-4">ebstechnology085@gmail.com</div>
          <div className="text-sm">+91 8736079780</div>
          <div className="flex gap-4 mt-4">
            <a href="#" className="hover:scale-110 text-xl">
              <BsFacebook />
            </a>
            <a href="#" className="hover:scale-110 text-xl">
              <BsInstagram />
            </a>
            <a href="#" className="hover:scale-110 text-xl">
              <BsTwitter />
            </a>
            <a href="#" className="hover:scale-110 text-xl">
              <BsPinterest />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;
