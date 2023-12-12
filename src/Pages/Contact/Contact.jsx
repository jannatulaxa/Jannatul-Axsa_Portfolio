import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";


const Contact = () => {
    return (
        <div className="text-white w-[60%] mx-auto mt-32 mb-20">
        <Helmet title="Contact"></Helmet>
                <form action="" className="border">
                    <p className="bg-[#1E001E] mb-2">Dhaka, Bangladesh.</p>
                    <p className="bg-[#1E001E] mb-2">+8801996699586</p>
                    <p className="bg-[#1E001E] mb-2">jannatulaxajanifa586@gmail.com</p>
                    <p className="bg-[#1E001E] mb-2"><a href="http://www.facebook.com/profile.php?id=100078129848082" target="_blank" rel="noopener noreferrer">Facebook</a></p>
                    <p className="bg-[#1E001E] mb-2"><a href="https://www.linkedin.com/in/jannatul-axsa-9bba441b5/" target="_blank" rel="noopener noreferrer">Linkedin</a></p>
                </form>
        </div>
    );
};

export default Contact;