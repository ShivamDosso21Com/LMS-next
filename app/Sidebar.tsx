import Link from "next/link";
import { IoHomeOutline, IoBookOutline, IoGiftOutline } from "react-icons/io5";
import { MdOutlineVideoSettings } from "react-icons/md";
import { GoProject } from "react-icons/go";
import { BsGraphUpArrow } from "react-icons/bs";
import { LuUserSquare2 } from "react-icons/lu";
import { FaChalkboard } from "react-icons/fa";
import { RiCommunityLine } from "react-icons/ri";
import { IoMdCode } from "react-icons/io";
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
    // { label: "Mentorship", value: "/mentorship", icon: LuUserSquare2 },
    // { label: "Job board", value: "/job_board", icon: IoMdCode },
    // { label: "Refer and Earn", value: "/refer_and_earn", icon: IoGiftOutline },
    // { label: "Community", value: "/community", icon: RiCommunityLine },
  ];

  const medias = [
    { icon: FaYoutube },
    { icon: FaInstagram },
    { icon: FaLinkedin },
    { icon: FaXTwitter },
  ];

  return (
    <div className="bg-white flex flex-col w-fit sm:w-1/4 lg:w-1/5 xl:w-1/6 ml-2 mt-16 shadow-2xl h-auto">
      <ul className="bg-white">
        {options.map((option, index) => (
          <li key={index} className="flex items-center mt-3 gap-4 hover:w-full hover:rounded-md hover:bg-gray-200">
            <Link href={option.value}>
              <button className="text-gray-600 p-3 flex items-center hover:text-color hover:bg-gray-200 mt-3 w-full text-left">
                <option.icon className="mr-2" />
                {option.label}
              </button>
            </Link>
          </li>
        ))}
      </ul>
      <div className="bg-gray-100 w-fit mt-5 p-4">
        <h1 className="text-gray-700 mb-3">Follow us on social media</h1>
        <div className="flex">
          {medias.map((media, index) => (
            <button key={index} className="text-gray-600 hover:text-gray-900 p-2">
              <media.icon size={24} />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
