import React from "react";
import hero from "../../assets/hero.png";
const CommonHeader = () => {
  let signupEnable = false;
  return (
    <div className="md:flex items-center justify-center">
      <div>
        <div className="font-bold text-xs text-Teal mb-4">
          Your E-learning Partner
        </div>
        <div className="sm:text-[2.5rem] text-[1.825rem] font-bold">
          This is <br /> the new way <br /> to learn online
        </div>
        <p className="text-sm leading-7 text-gray max-w-sm">
          Earn By Skill (EBS) gives you the best education and career advice for
          free, so that your career can grow very well and it will be very easy
          for you to get a job.
        </p>
        {signupEnable && (
          <div className="mt-6">
            <button className="px-6 py-3 font-bold text-white bg-Teal rounded-lg mr-4 text-sm">
              Take Test
            </button>
            <button className="px-6 py-3 font-bold border border-solid border-gray rounded-lg text-sm">
              Submit
            </button>
          </div>
        )}
        <a href="#common">
          <div className="font-bold text-xs text-Teal mt-5">
            GO DOWN TO SEE YOUR SELECTED VIDEO
          </div>
        </a>
      </div>
      <div className="md:w-[60%]">
        <img src={hero} alt="" />
      </div>
    </div>
  );
};

export default CommonHeader;
