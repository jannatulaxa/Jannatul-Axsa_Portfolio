import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";


const Contact = () => {
    return (
        <div className="text-white w-[60%] mx-auto mt-32 mb-20">
        <Helmet title="Contact"></Helmet>
                <form action="" className=" space-y-3 text-center w-[35%] mx-auto">
                    <p className="text-3xl -mt-20 mb-10 "> <span className="text-[#FD02FE]">Connect</span> With Me</p>
                    <p className="bg-[#1E001E] rounded-lg p-2">Dhaka, Bangladesh.</p>
                    <p className="bg-[#1E001E] rounded-lg p-2">+8801996699586</p>
                    <p className="bg-[#1E001E] rounded-lg p-2">jannatulaxajanifa586@gmail.com</p>
                    <p className="bg-[#1E001E] rounded-lg p-2"><a href="http://www.facebook.com/profile.php?id=100078129848082" target="_blank" rel="noopener noreferrer">Facebook</a></p>
                    <p className="bg-[#1E001E] rounded-lg p-2"><a href="https://www.linkedin.com/in/jannatul-axsa-9bba441b5/" target="_blank" rel="noopener noreferrer">Linkedin</a></p>
                </form>
                <p className="text-center py-5">. . . . . . . . . . . .  . . .  . . .  . . .  . . .  . . .  . . .  . . .  . . .  . . .  . . .  . . .  . . .  . . .  . . .</p>
                <form className="text-lg flex flex-col w-[40%] mx-auto space-y-5" action="">
                    <p className="bg-[#1E001E] p-2 rounded-lg">
                    Name : <input className="text-sm bg-[#1E001E] " type="text" placeholder="enter you name"/>
                    </p>
                    <p className="bg-[#1E001E] p-2 rounded-lg">
                    Email : <input className="bg-[#1E001E] text-sm" type="email" placeholder="enter you mail@.com" />
                    </p>
                    <p className="bg-[#1E001E] p-2 rounded-lg" className="flex gap-2">
                    <span className="p-2 bg-[#1E001E] w-[100%]">Massage :  <textarea className="textarea w-[100%] bg-[#1E001E]" placeholder="write your massage"></textarea></span>
                    </p>
                    <button className=" mt-10 text-xl font-semibold text-[#FD02FE] border pt-3 pb-3 pl-6 pr-6  hover:bg-[#FE00FF] hover:bg-opacity-20 flex rounded-full w-[55.5%] mx-auto">Send Massage</button>
                </form>
        </div>
    );
};

export default Contact;