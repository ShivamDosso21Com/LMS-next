import Link from "next/link";
import { IoHomeOutline, IoBookOutline } from "react-icons/io5";
import { MdOutlineVideoSettings } from "react-icons/md";
import { GoProject } from "react-icons/go";
import { BsGraphUpArrow } from "react-icons/bs";
import { FaChalkboard } from "react-icons/fa";
import { FaYoutube, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Sidebar() {
  const options = [
    { label: "Home", value: "/home", icon: IoHomeOutline },
    { label: "Learn", value: "/about", icon: IoBookOutline },
    { label: "Classroom", value: "/services", icon: FaChalkboard },
    { label: "Practice", value: "/contact", icon: MdOutlineVideoSettings },
    { label: "Projects", value: "/projects", icon: GoProject },
    { label: "Career", value: "/career", icon: BsGraphUpArrow },
  ];

  const medias = [
    { icon: FaYoutube },
    { icon: FaInstagram },
    { icon: FaLinkedin },
    { icon: FaXTwitter },
  ];

  return (
    <div className="bg-white flex flex-col h-screen mt-16 shadow-2xl">
      <ul className="flex-grow">
        {options.map((option, index) => (
          <li
            key={index}
            className="flex items-center mt-3 gap-4 hover:bg-color hover:text-white hover:rounded-lg"
          >
            <Link href={option.value}>
              <button className="p-3 flex items-center w-full hover:text-white">
                <option.icon className="mr-2" />
                {option.label}
              </button>
            </Link>
          </li>
        ))}
       
      </ul>
      <div className="bg-gray-100 w-full p-4 mb-16">
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
}
