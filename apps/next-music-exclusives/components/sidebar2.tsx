'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import 'react-icons/hi';
import { HiMenuAlt3 } from 'react-icons/hi';
import { MdOutlineDashboard, MdOutlineLibraryMusic } from 'react-icons/md';
import { RiSettings4Line, RiVipDiamondLine } from 'react-icons/ri';
import { BsQuestionLg } from 'react-icons/bs';
import { FaRegNewspaper } from 'react-icons/fa';
import { AiOutlineUser } from 'react-icons/ai';
import { FiMessageSquare } from 'react-icons/fi';

const Sidebar2 = () => {
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
    <div
      className={`bg-[#0e0e0e] min-h-screen ${
        open ? 'w-56' : 'w-16'
      } duration-500 text-gray-100 px-4`}
    >
      <div className="py-3 flex justify-end">
        <HiMenuAlt3
          size={26}
          className="cursor-pointer"
          onClick={() => setOpen(!open)}
        />
      </div>
      <div className="mt-4 flex flex-col gap-4 relative">
        {menus.map((item, i) => (
          <Link
            href={item.link}
            key={i}
            className={` ${
              item.margin && 'mt-5'
            } group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}
          >
            <div>{React.createElement(item.icon, { size: '20' })}</div>
            <h2
              style={{ transitionDelay: `${i + 3}00ms` }}
              className={`whitespace-pre duration-500 ${
                !open && 'opacity-0 translate-x-28 overflow-hidden'
              }`}
            >
              {item.name}
            </h2>
            <h2
              className={`${
                open && 'hidden'
              } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
            >
              {item.name}
            </h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar2;
