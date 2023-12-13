import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Education = () => {
  return (
    <div className="text-white w-[90%] mx-auto">
        <p className=" text-3xl mt-10 mb-5 text-white text-center">  Edu<span className="text-[#FD02FE]">cation</span></p>        
      <div className="my-10"  data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#FD02FE", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #FD02FE" }}
          date="2023 - present"
          iconStyle={{ background: "#FD02FE", color: "#fff" }}
          // icon={<WorkIcon />}
        >
          <h3 className="font-semibold  vertical-timeline-element-title">Graduation</h3>
          <h4 className="text-xl font-semibold vertical-timeline-element-subtitle">City University</h4>
          <p>
            B. Sc in CSE (Bachelor Science in Computer Science and Engineering)
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#7C0193", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #7C0193" }}
          date="2019 - 2020"
          iconStyle={{ background: "#7C0193", color: "#fff" }}
          // icon={<WorkIcon />}
        >
          <h3 className="font-semibold  vertical-timeline-element-title">H.S.C</h3>
          <h4 className="text-xl font-semibold vertical-timeline-element-subtitle">Govt Bangabandhu Collage</h4>
          <p>
            Science
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#17135F", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #17135F" }}
          date="2017 - 2018"
          iconStyle={{ background: "#17135F", color: "#fff" }}
          // icon={<WorkIcon />}
        >
          <h3 className="font-semibold  vertical-timeline-element-title">S.S.C</h3>
          <h4 className="text-xl font-semibold vertical-timeline-element-subtitle">City University</h4>
          <p>
            Science
          </p>
        </VerticalTimelineElement>
        
      </VerticalTimeline>
      </div>
    </div>
  );
};

export default Education;
