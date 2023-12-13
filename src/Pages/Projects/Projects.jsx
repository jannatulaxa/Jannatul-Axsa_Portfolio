import { Helmet } from "react-helmet";
import React from "react";

// import React from "react";
import coffee1 from "../../assets/Fav-icone-image/ProjectViewImg/coffee1.png";
// import coffee2 from "../../assets/Fav-icone-image/ProjectViewImg/coffee2.png";
// import coffee3 from "../../assets/Fav-icone-image/ProjectViewImg/coffee3.png";
import hotel1 from "../../assets/Fav-icone-image/ProjectViewImg/hotel1.png";
// import hotel2 from "../../assets/Fav-icone-image/ProjectViewImg/hotel2.png";
// import hotel3 from "../../assets/Fav-icone-image/ProjectViewImg/hotel3.png";
import employee1 from "../../assets/Fav-icone-image/ProjectViewImg/employee1.png";
// import employee2 from "../../assets/Fav-icone-image/ProjectViewImg/employee2.png";
// import employee3 from "../../assets/Fav-icone-image/ProjectViewImg/employee3.png";
import { SiCoffeescript } from "react-icons/si";
import { MdManageAccounts } from "react-icons/md";
import { FaHotel } from "react-icons/fa6";
import "../Home/ProjectView/ProjectView.css"; // Import your stylesheet
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className="text-white">
      <Helmet title="Projects"></Helmet>
      <div className="flex justify-center items-center">
        {/* <div>Go to Live link  </div>
        <div>Go to Live link <a  target="_blank" rel="noopener noreferrer" className="text-purple-400">Here</a> </div>
        <div>Go to Live link <a  target="_blank" rel="noopener noreferrer" className="text-purple-400">Here</a> </div>
         */}

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
                className="project-container w-[33%]"
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
                <p className="p-10 ml-2 font-thin">
                  <h1 className="-ml-6 font-semibold">Feture:</h1>
                  #Client Can Choose His/Her Coffee Items. <br />
                  #Admin Can Add And Update Coffees White Proper Information.{" "}
                  <br />
                  #User Can Add Coffees in cart and also delete from the cart.{" "}
                  <br />
                  #User need to Resister/login first to see details and add to
                  cart. <br />
                  #Here also Used Two type of Themes: light and Cupcake. User
                  Can Use it.
                </p>

                <div className="flex justify-end -mt-7 mr-7" data-aos="flip-up">
                  <div
                    className="text-xl  font-semibold bg-[#FD02FE] text-black  pt-2 pb-2 pl-5 pr-5 rounded-sm hover:bg-[#FE00FF] hover:text-[#FE00FF] hover:bg-opacity-20"
                  >
                    <a href="https://my-cafe-house.web.app/" target="_blank" rel="noopener noreferrer">Live Link</a>
                  </div>
                  
                </div>
              </div>
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
                className="project-container w-[33%]"
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
                <p className="p-10 ml-2 font-thin">
                  <h1 className="-ml-6 font-semibold">Feture:</h1>
                  #User Can book rooms. <br />
                  #Invalid User Can not see the room Details.
                  <br />
                  #User Can Add Coffees in cart and also delete from the cart.
                  <br />
                  #User Can Use Special Offer. <br />
                  #The User Can Extend the Booking Date.

                </p>

                <div className="flex justify-end -mt-7 mr-7" data-aos="flip-up">
                  <div
                    className="text-xl  font-semibold bg-[#FD02FE] text-black  pt-2 pb-2 pl-5 pr-5 rounded-sm hover:bg-[#FE00FF] hover:text-[#FE00FF] hover:bg-opacity-20"
                  >
                    <a href="https://hotel-booking-web-c8f4f.web.app/" target="_blank" rel="noopener noreferrer">Live Link</a>
                  </div>
                  
                </div>
              </div>
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
                className="project-container w-[33%]"
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
                <p className="p-10 ml-2 font-thin">
                  <h1 className="-ml-6 font-semibold">Feture:</h1>
                  #User Authentication and Authorization. <br />
                  #Employee Information Database.
                  <br />
                  #Attendance and Leave Management.
                  <br />
                  #Performance Evaluation and Feedback. <br />
                  #Communication and Notification System.
                </p>

                <div className="flex justify-end -mt-7 mr-7" data-aos="flip-up">
                  <div
                    className="text-xl  font-semibold bg-[#FD02FE] text-black  pt-2 pb-2 pl-5 pr-5 rounded-sm hover:bg-[#FE00FF] hover:text-[#FE00FF] hover:bg-opacity-20"
                  >
                    <a href="https://management-employee.surge.sh/" target="_blank" rel="noopener noreferrer">Live Link</a>
                  </div>
                  
                </div>
              </div>
            </div>
            


          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
