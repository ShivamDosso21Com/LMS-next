import Link from "next/link";
import { IoHomeOutline, IoBookOutline } from "react-icons/io5";
import { MdOutlineVideoSettings } from "react-icons/md";
import { GoProject } from "react-icons/go";
import { FaChalkboard, FaYoutube, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoGiftOutline } from "react-icons/io5";

interface SidebarProps {
  isOpen: boolean;
  handleClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, handleClose }) => {
  const options = [
    { label: "Home", value: "/home", icon: IoHomeOutline },
    { label: "Learn", value: "/home/learn", icon: IoBookOutline },
    { label: "Classroom", value: "/home/classroom", icon: FaChalkboard },
    { label: "Practice", value: "/home/practice", icon: MdOutlineVideoSettings },
    { label: "Projects", value: "/home/projects", icon: GoProject },
    { label: "Refer and Earn", value: "/home/refer_and_earn", icon: IoGiftOutline },
  ];

  const medias = [
    { icon: FaYoutube },
    { icon: FaInstagram },
    { icon: FaLinkedin },
    { icon: FaXTwitter },
  ];

  return (
    <div className={`bg-white flex flex-col h-screen shadow-2xl fixed top-0 left-0 z-40 w-fit transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out sm:translate-x-0 sm:static sm:shadow-none`}>
      <ul className="flex-grow mt-16">
        {options.map((option, index) => (
          <li
            key={index}
            className="flex items-center gap-4 mt-3 hover:bg-gray-200 hover:text-black hover:rounded-lg"
          >
            <Link href={option.value}>
              <button className="p-3 flex items-center w-full hover:text-black" onClick={handleClose}>
                <option.icon className="mr-2" />
                {option.label}
              </button>
            </Link>
          </li>
        ))}
      </ul>
      <div className="bg-gray-100 p-4">
        <h1 className="text-gray-700 mb-3">Follow us on social media</h1>
        <div className="flex justify-around">
          {medias.map((media, index) => (
            <button
              key={index}
              className="text-gray-600 hover:text-gray-900 p-2"
            >
              <media.icon size={24} />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
