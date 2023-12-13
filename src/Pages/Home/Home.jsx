import axios from "axios";
import fileDownload from "js-file-download";
import { Helmet } from "react-helmet";
import { FaCloudDownloadAlt } from "react-icons/fa";
import Skills from "./Skills";
import Education from "./Education";
import "./bg.css"
import ProjectView from "./ProjectView/ProjectView";
import React from 'react';
import image from '../../assets/Fav-icone-image/images.png';


const Home = () => {
  const handleDownload = () => {
    axios.get("https://jannatulaxsa.vercel.app",{responseType:'blob'}).then((res) => {
      console.log(res.data)
      fileDownload(res.data, "Resume.pdf");
});}
  return (
    <div>
      <Helmet title="Home"></Helmet>

      <div className="flex flex-col md:flex-row justify-around  mx-auto w-[90%] text-white ">
        <div className=" mt-28 mb-20"> 
          <h1 className=" md:text-7xl text-4xl">
            <span className="text-2xl md:text-6xl">Hi, This is</span> <br /> <span className="">
            Jannatul Axsa
            </span>
          </h1>
          <p className="mt-10 text-lg text-[#A4A4A4]">
          A Front-end Developer Knowledge with React.js, JavaScript, Taillwind, <br /> MUI, HTML, CSS, MongoDB, Express.js, Node.js stack <br /> from Dhaka, Bangladesh        </p>

          <button onClick={handleDownload} className=" mt-10 text-3xl font-semibold text-[#FD02FE] border pt-3 pb-3 pl-6 pr-6  hover:bg-[#FE00FF] hover:bg-opacity-20 flex rounded-full">
               <span className="pr-3">Resume</span>  <FaCloudDownloadAlt className="mt-1" />

          </button>
        </div>
        <div className="border rounded-full border-[#FD02FE] shadow-lg  mt-28 mb-20"
          style={{ boxShadow: "0px 0px 20px 0px #FD02FE, 0 0px 0px 0px #FD02FE" }}
          >
        <img src={image} alt="" className="rounded-full h-96 w-96"/>

        </div>
      </div>
      <Skills/>
      <Education/>
      <ProjectView/>
    </div>
  );
};

export default Home;
