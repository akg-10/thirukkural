import { TiSocialLinkedin } from "react-icons/ti";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";

const SideBar = () => {
  return (
    <div className="fixed bg-slate-300 grow-0 inset-x-0 bottom-0 w-full h-20 flex flex-row justify-center items-center pb-5">
                    
        <SideBarIcon link='https://www.linkedin.com/in/gokul-a-k/'text="My Linkedin profile" icon={<TiSocialLinkedin size="28" />} />
        <SideBarIcon link='https://github.com/akg-10' text="Checkout my Github" icon={<FaGithub size="20" />} />
        <SideBarIcon link='https://www.instagram.com/_me._.gokul._.10_/'text="My Insta profile" icon={<IoLogoInstagram size="20" />} />
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