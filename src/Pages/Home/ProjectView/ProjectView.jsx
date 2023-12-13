import React from "react";
import coffee1 from "../../../assets/Fav-icone-image/ProjectViewImg/coffee1.png";
import coffee2 from "../../../assets/Fav-icone-image/ProjectViewImg/coffee2.png";
import coffee3 from "../../../assets/Fav-icone-image/ProjectViewImg/coffee3.png";
import hotel1 from "../../../assets/Fav-icone-image/ProjectViewImg/hotel1.png";
import hotel2 from "../../../assets/Fav-icone-image/ProjectViewImg/hotel2.png";
import hotel3 from "../../../assets/Fav-icone-image/ProjectViewImg/hotel3.png";
import employee1 from "../../../assets/Fav-icone-image/ProjectViewImg/employee1.png";
import employee2 from "../../../assets/Fav-icone-image/ProjectViewImg/employee2.png";
import employee3 from "../../../assets/Fav-icone-image/ProjectViewImg/employee3.png";
import { SiCoffeescript } from "react-icons/si";
import { MdManageAccounts } from "react-icons/md";
import { FaHotel } from "react-icons/fa6";
import "./ProjectView.css"; // Import your stylesheet
import { Link } from "react-router-dom";

const ProjectView = () => {
  return (
    <div className="w-[80%]  mx-auto  mb-20">
      <p className="text-3xl text-white text-center pt-32 mb-10 ">
        Recent <span className="text-[#FD02FE]">Project View</span>
      </p>

      <div className="text-xl text-white mb-32 ">
        <p className=" mb-5 bg-[#1E001E] py-1 text-[#FD02FE] flex justify-center">
          <span className="text-2xl mt-.5">
            <SiCoffeescript />
          </span>
          <span className="px-2">Coffee Palace</span>
        </p>

        <div className="flex space-x-5">
          <div
            className="project-container flex-1"
            data-aos="zoom-in-up"
            data-aos-duration="1000"
          >
            <img
              className="project-image"
              width="300px"
              src={coffee1}
              alt="Coffee"
            />
          </div>
          <div
            className="project-container flex-1"
            data-aos="zoom-in-up"
            data-aos-duration="2000"
          >
            <img
              className="project-image"
              width="300px"
              src={coffee2}
              alt="Coffee"
            />
          </div>
          <div
            className="project-container flex-1"
            data-aos="zoom-in-up"
            data-aos-duration="3000"
          >
            <img
              className="project-image"
              width="300px"
              src={coffee3}
              alt="Coffee"
            />
          </div>
        </div>
        <div className="flex justify-center" data-aos="flip-up">
          <Link
            to={"/projects"}
            className="text-xl  font-semibold text-[#FD02FE] border mt-6 pt-2 pb-2 pl-5 pr-5 rounded-sm hover:bg-[#FE00FF] hover:bg-opacity-20"
          >
            Explore Now
          </Link>
        </div>
      </div>
      <div className="text-xl text-white mb-32 ">
        <p className=" mb-5 bg-[#1E001E] py-1 text-[#FD02FE] flex justify-center">
          <span className="text-2xl mt-.5">
            <FaHotel />
          </span>
          <span className="px-2">Golden Palace-Hotel Managemet</span>
        </p>

        <div className="flex space-x-5">
          <div
            className="project-container flex-1"
            data-aos="zoom-in-up"
            data-aos-duration="1000"
          >
            <img
              className="project-image"
              width="300px"
              src={hotel1}
              alt="hotel"
            />
          </div>
          <div
            className="project-container flex-1"
            data-aos="zoom-in-up"
            data-aos-duration="2000"
          >
            <img
              className="project-image"
              width="300px"
              src={hotel3}
              alt="hotel"
            />
          </div>
          <div
            className="project-container flex-1"
            data-aos="zoom-in-up"
            data-aos-duration="3000"
          >
            <img
              className="project-image"
              width="300px"
              src={hotel2}
              alt="hotel"
            />
          </div>
        </div>
        <div className="flex justify-center" data-aos="flip-up">
          <Link
            to={"/projects"}
            className="text-xl  font-semibold text-[#FD02FE] border mt-6 pt-2 pb-2 pl-5 pr-5 rounded-sm hover:bg-[#FE00FF] hover:bg-opacity-20"
          >
            Explore Now
          </Link>
        </div>
      </div>
      <div className="text-xl text-white mb-32 ">
        <p className=" mb-5 bg-[#1E001E] py-1 text-[#FD02FE] flex justify-center">
          <span className="text-2xl mt-.5">
            <MdManageAccounts />
          </span>
          <span className="px-2">HR-Employee Management</span>
        </p>

        <div className="flex space-x-5">
          <div
            className="project-container flex-1"
            data-aos="zoom-in-up"
            data-aos-duration="1000"
          >
            <img
              className="project-image"
              width="300px"
              src={employee1}
              alt="employee"
            />
          </div>
          <div
            className="project-container flex-1"
            data-aos="zoom-in-up"
            data-aos-duration="2000"
          >
            <img
              className="project-image"
              width="300px"
              src={employee2}
              alt="employee"
            />
          </div>
          <div
            className="project-container flex-1"
            data-aos="zoom-in-up"
            data-aos-duration="3000"
          >
            <img
              className="project-image"
              width="300px"
              src={employee3}
              alt="employee"
            />
          </div>
        </div>
        <div className="flex justify-center" data-aos="flip-up">
          <Link
            to={"/projects"}
            className="text-xl  font-semibold text-[#FD02FE] border mt-6 pt-2 pb-2 pl-5 pr-5 rounded-sm hover:bg-[#FE00FF] hover:bg-opacity-20"
          >
            Explore Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectView;
