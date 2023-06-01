'use client';
import React, { useState } from 'react';
import { MdOutlineDashboard, MdOutlineLibraryMusic } from 'react-icons/md';
import { RiSettings4Line, RiVipDiamondLine } from 'react-icons/ri';
import {
  BsFileMusicFill,
  BsFillFileMusicFill,
  BsQuestionLg,
} from 'react-icons/bs';
import { FaRegNewspaper, FaRegUserCircle } from 'react-icons/fa';
import { AiOutlineUser } from 'react-icons/ai';
import { FiMessageSquare } from 'react-icons/fi';
import { IoIosMusicalNotes, IoMdMusicalNotes } from 'react-icons/io';
import Link from 'next/link';

// export default function Sidebar3() {
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

  const [active, setActive] = useState('Tickets');

  const [open, setOpen] = useState(true);
  const [isPermOpen, setPermOpen] = useState(true);

  // const handleMouseEnter = () => {
  //   if (open === true) return;
  //   if (!open) {
  //     setPermOpen(false);
  //     setOpen(true);
  //   }
  // };

  // const handleMouseLeave = () => {
  //   if (!open && !isPermOpen) setOpen(false);
  // };

  return (
    <div
      className={`flex flex-col items-center h-screen ${
        open ? 'w-40' : 'w-16'
      } duration-500 h-full overflow-hidden text-gray-400 bg-me-secondary`}
    >
      <a
        className={`flex items-center ${
          open ? 'w-full px-3' : 'justify-center'
        } mt-3`}
        href="#"
        onClick={() => setOpen(!open)}
      >
        {/* <BsFileMusicFill size={30} /> */}
        {/* <IoIosMusicalNotes size={30} /> */}
        <IoMdMusicalNotes size={30} />
        {open && (
          <span className="ml-2 text-sm font-bold">
            {process.env.NEXT_PUBLIC_PROJECT_TITLE}
          </span>
        )}
      </a>
      <div className="w-full px-2">
        <div className="flex flex-col items-center w-full mt-3 border-t border-gray-700">
          {menus.map((item, i) => (
            <Link
              href={item.link}
              key={i}
              className={` ${
                item.margin && 'mt-5'
              } flex items-center  w-full h-12 px-3 mt-2 rounded ${
                item.name === active
                  ? 'bg-gray-700 hover:bg-me-primary'
                  : 'hover:bg-me-primary hover:text-gray-300'
              }`}
              onClick={() => setActive(item.name)}
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
  );
};

export default Sidebar3;
