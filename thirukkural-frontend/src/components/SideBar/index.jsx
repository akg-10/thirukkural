import { TiSocialLinkedin } from "react-icons/ti";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const SideBar = () => {
  return (
    <div className="relative grow-0 inset-x-0 bottom-0 w-full h-20 flex flex-row justify-center items-center pb-5">
                    
        <SideBarIcon link='https://www.linkedin.com/in/gokul-a-k/'text="My Linkedin profile" icon={<TiSocialLinkedin size="28" />} />
        <SideBarIcon link='https://github.com/akg-10' text="Checkout my Github" icon={<FaGithub size="20" />} />
        <SideBarIcon link='mailto:akgv2002@gmail.com'text="Mail me" icon={<IoIosMail size="20" />} />
        <SideBarIcon link='https://x.com/_akg10' text="My Twitter profile"icon={<FaTwitter size="20" />} />
        
    </div>
  );
};

const SideBarIcon = ({ icon, text, link}) => (
  <div className="sidebar-icon group">
    <a href={link}>{icon}</a>
    <span class="sidebar-tooltip group-hover:scale-100">
      {text}
    </span>
  </div>
);
export default SideBar;