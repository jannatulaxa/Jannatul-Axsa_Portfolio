import React from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { PolarArea } from "react-chartjs-2";

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

const Skills = () => {
  const data = {
    labels: [ "React", "JavaScript","Tailwind", "Node.js", "Firebase", "ExpressJS"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
            "rgba(255, 99, 132, 0.5)",
            "rgba(153, 102, 255, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(255, 159, 64, 0.5)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className="lg:w-[60%] md:w-[85%] mx-auto">
        <p className=" mt-20 text-3xl  mb-10 text-white text-center"> My <span className="text-[#FD02FE]">Skills</span></p>        
        <PolarArea data={data} />
    </div>
  );
};

export default Skills;
