import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import React from 'react';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from "sweetalert2";



const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_7epp78e', 'template_gwxbomn', form.current, 'ae81gXxAu8DlvbYzP')
        .then(() => {
            form.current.reset();
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Send Email Successfully",
                showConfirmButton: false,
                timer: 1500
              });
        }, (error) => {
            console.log(error.text);
        });
    };
    return (
        <div className="text-white w-[80%] md:w-[60%] mx-auto  mb-20">
        <Helmet title="Contact"></Helmet>
                <form action="" className=" space-y-3 text-center  lg:w-[35%] mx-auto">
                    <p className="text-3xl  pt-32 mb-10 "> <span className="text-[#FD02FE]">Connect</span> With Me</p>
                    <p className="bg-[#1E001E] rounded-lg p-2">Dhaka, Bangladesh.</p>
                    <p className="bg-[#1E001E] rounded-lg p-2">+8801996699586</p>
                    <p className="bg-[#1E001E] rounded-lg p-2">jannatulaxajanifa586@gmail.com</p>
                    <p className="bg-[#1E001E] rounded-lg p-2"><a href="http://www.facebook.com/profile.php?id=100078129848082" target="_blank" rel="noopener noreferrer">Facebook</a></p>
                    <p className="bg-[#1E001E] rounded-lg p-2"><a href="https://www.linkedin.com/in/jannatul-axsa-9bba441b5/" target="_blank" rel="noopener noreferrer">Linkedin</a></p>
                </form>
                <p className="text-center py-5">. . . . . . . . . . . .  . . .  . . .  . . .  . . .  . . .  . . .  . . .  . . .  . . .  . . .  . . .  . . .</p>
                <form ref={form} onSubmit={sendEmail} className="text-lg flex flex-col lg:w-[40%] mx-auto space-y-5" action="">
                    <p className="bg-[#1E001E] p-2 rounded-lg">
                    Name : <input name="from_name" className="text-sm bg-[#1E001E] " type="text" placeholder="enter you name"/>
                    </p>
                    <p className="bg-[#1E001E] p-2 rounded-lg">
                    Email : <input name="from_email" className="bg-[#1E001E] text-sm" type="email" placeholder="enter you mail@.com" />
                    </p>
                    <p className="bg-[#1E001E] p-2 rounded-lg flex gap-2">
                    <span className="p-2 bg-[#1E001E] w-[100%]">Massage :  <textarea name="message" className="textarea w-[100%] bg-[#1E001E]" placeholder="write your massage"></textarea></span>
                    </p>
                    <button className=" mt-10 text-xl font-semibold text-[#FD02FE] border pt-3 pb-3 pl-6 pr-6  hover:bg-[#FE00FF] hover:bg-opacity-20 flex rounded-full lg:w-[55.5%] mx-auto">Send Massage</button>
                </form>
        </div>
    );
};

export default Contact;