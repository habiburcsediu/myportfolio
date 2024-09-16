import { useState } from "react";
import logo from "../assets/images/habibur.jpeg";
import { Link } from "react-scroll";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="fixed z-[2] left-[20px] md:left-[40px] top-9 right-[20px] md:right-[40px] flex items-center justify-between">
      <div className="w-[120px] xs:w-[240px] md:w-[500px] bg-[#000319] border border-[#16192D] rounded-md px-3 py-2 flex items-center justify-between">
        <div className="flex items-center justify-center gap-2 cursor-pointer">
          <img className="w-7 h-7 rounded-full" src={logo} alt="Logo" />
          <span className="text-lg font-semibold hidden xs:block">
            Habibur Rahman
          </span>
        </div>
        <div className="hidden md:block">
          <ul className="flex items-center justify-center gap-4">
            <li className="duration-300 cursor-pointer hover:text-[#8b5cf6]">
              <Link
                to="about"
                smooth={true}
                offset={-80}
                duration={500}
                spy={true}
                activeClass="active"
              >
                About
              </Link>
            </li>
            <li className="duration-300 cursor-pointer hover:text-[#8b5cf6]">
              <Link
                to="projects"
                smooth={true}
                offset={-80}
                duration={500}
                spy={true}
                activeClass="active"
              >
                Projects
              </Link>
            </li>
            <li className="duration-300 cursor-pointer hover:text-[#8b5cf6]">
              <Link
                to="contact"
                smooth={true}
                offset={-80}
                duration={500}
                spy={true}
                activeClass="active"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div
          className="md:hidden cursor-pointer"
          onClick={() => setToggle(!toggle)}
        >
          <i className="bx bx-menu text-2xl"></i>
        </div>

        {/* responsive menu */}
        {toggle && (
          <div className="fixed inset-0 bg-[#000319] md:hidden">
            <i
              className="bx bx-x fixed top-5 right-5 text-3xl cursor-pointer"
              onClick={() => setToggle(!toggle)}
            ></i>
            <ul className="mt-24 flex flex-col items-center">
              <li className="block w-full" onClick={() => setToggle(false)}>
                <Link
                  to="about"
                  smooth={true}
                  offset={-80}
                  duration={500}
                  spy={true}
                  activeClass="active"
                  className="text-center duration-300 hover:bg-[#0C1324] block w-full h-full py-2 cursor-pointer"
                  onClick={() => setToggle(false)}
                >
                  About
                </Link>
              </li>
              <li className="block w-full">
                <Link
                  to="projects"
                  smooth={true}
                  offset={-80}
                  duration={500}
                  spy={true}
                  activeClass="active"
                  className="text-center duration-300 hover:bg-[#0C1324] block w-full h-full py-2 cursor-pointer"
                  onClick={() => setToggle(false)}
                >
                  Projects
                </Link>
              </li>
              <li className="block w-full" onClick={() => setToggle(false)}>
                <Link
                  to="contact"
                  smooth={true}
                  offset={-80}
                  duration={500}
                  spy={true}
                  activeClass="active"
                  className="text-center duration-300 hover:bg-[#0C1324] block w-full h-full py-2 cursor-pointer"
                  onClick={() => setToggle(false)}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
      <div>
        <button
          className="bg-[#38309D] px-8 py-[10px] rounded-md text-md font-semibold duration-300 hover:bg-transparent hover:ring-2"
          type="button"
        >
          Hire Me
        </button>
      </div>
    </div>
  );
}
