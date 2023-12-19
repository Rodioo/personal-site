import React from 'react';
import {Link, useLocation} from 'react-router-dom';
import Page from '../../common/types/page.type.ts';
import ComputerDesktopIcon from "@heroicons/react/24/outline/ComputerDesktopIcon"

type NavButton = {
  name: string;
  path: string;
};

const navButtons: NavButton[] = Object.values(Page);

const Navbar = (): React.JSX.Element => {
  const location = useLocation();

  return (
    <div className="flex w-full">
      <Link
        to="/"
        className="mx-24 hidden cursor-pointer whitespace-nowrap font-lato text-2xl font-bold text-white lg:flex gap-2">
          <ComputerDesktopIcon className='w-6 h-6 m-auto' />
          Antonio Falcescu
      </Link>
      <span className="flex w-full justify-around gap-4">
        {navButtons.map((navButton) => (
          <Link
            key={navButton.name}
            to={navButton.path}
            className={`cursor-pointer font-lato text-lg tracking-widest
            ${
              navButton.path === location.pathname
                ? 'font-bold text-white'
                : 'font-medium text-taupe-gray hover:text-white'
            }`}>
            {navButton.name}
          </Link>
        ))}
      </span>
    </div>
  );
};

export default Navbar;
