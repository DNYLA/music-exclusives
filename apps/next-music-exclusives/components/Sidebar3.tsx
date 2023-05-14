'use client';
import React, { useState } from 'react';
import { HiMenuAlt3 } from 'react-icons/hi';
import { MdOutlineDashboard, MdOutlineLibraryMusic } from 'react-icons/md';
import { RiSettings4Line, RiVipDiamondLine } from 'react-icons/ri';
import { BsQuestionLg } from 'react-icons/bs';
import { FaRegNewspaper, FaRegUserCircle } from 'react-icons/fa';
import { AiFillProfile, AiOutlineUser } from 'react-icons/ai';
import { FiMessageSquare } from 'react-icons/fi';
import Link from 'next/link';

const Sidebar3 = () => {
  const menus = [
    { name: 'Home', link: '/', icon: MdOutlineDashboard },
    { name: 'Library', link: '/', icon: MdOutlineLibraryMusic },
    { name: 'Tickets', link: '/', icon: FiMessageSquare },
    { name: 'Profile', link: '/', icon: AiOutlineUser, margin: true },
    { name: 'VIP', link: '/', icon: RiVipDiamondLine },
    { name: 'News', link: '/', icon: FaRegNewspaper, margin: true },
    { name: 'FAQ', link: '/', icon: BsQuestionLg },
    { name: 'Setting', link: '/', icon: RiSettings4Line },
  ];

  const [open, setOpen] = useState(true);
  return (
    <div className="flex items-center justify-center w-screen h-screen p-10 space-x-6 bg-gray-300">
      <div
        className={`flex flex-col items-center ${
          open ? 'w-40' : 'w-16'
        } duration-500 h-full overflow-hidden text-gray-400 bg-gray-900 rounded`}
      >
        <a
          className={`flex items-center ${
            open ? 'w-full px-3' : 'justify-center'
          } mt-3`}
          href="#"
          onClick={() => setOpen(!open)}
        >
          <svg
            className="w-8 h-8 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
          </svg>
          {open && <span className="ml-2 text-sm font-bold">The App</span>}
        </a>
        <div className="w-full px-2">
          <div className="flex flex-col items-center w-full mt-3 border-t border-gray-700">
            {menus.map((item, i) => (
              <Link
                href={item.link}
                key={i}
                className={`${
                  item.margin && 'mt-5'
                } flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300`}
              >
                <div>{React.createElement(item.icon, { size: '20' })}</div>
                <span
                  style={{ transitionDelay: `${i + 3}00ms` }}
                  className={`whitespace-pre duration-500 ${
                    !open && 'opacity-0 translate-x-28 overflow-hidden'
                  } ml-2 text-sm font-medium`}
                >
                  {item.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
        <a
          className={`flex items-center justify-center ${
            open ? 'w-full' : 'w-16'
          } h-16 mt-auto bg-gray-800 hover:bg-gray-700 hover:text-gray-300`}
          href="#"
        >
          <FaRegUserCircle size={25} className="w-6 h-6 stroke-current" />
          <span
            // style={{ transitionDelay: `150ms` }}
            className={`whitespace-pre duration-500 ${
              !open && 'opacity-0 translate-x-28 overflow-hidden'
            } ml-2 text-sm font-medium`}
          >
            Account
          </span>
        </a>
      </div>
    </div>
  );
};

export default Sidebar3;
