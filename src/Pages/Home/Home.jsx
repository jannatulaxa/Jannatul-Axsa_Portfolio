import axios from "axios";
import fileDownload from "js-file-download";
import { Helmet } from "react-helmet";
import { FaCloudDownloadAlt } from "react-icons/fa";


const Home = () => {
  const handleDownload = () => {
    axios.get("https://jannatulaxsa.vercel.app",{responseType:'blob'}).then((res) => {
      console.log(res.data)
      fileDownload(res.data, "Resume.pdf");
});}
  return (
    <div>
      <Helmet title="Home"></Helmet>

      <div className="flex text-white">
        <div className="w-[80%] mx-auto mt-28 mb-20"> 
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
        
      </div>
    </div>
  );
};

export default Home;
