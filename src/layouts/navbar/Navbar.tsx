import React from 'react';
import {Link, useLocation} from 'react-router-dom';
import Page from '../../common/types/page.type.ts';
import {FaLaptopCode} from 'react-icons/fa6';

type NavButton = {
  name: string;
  path: string;
};

const navButtons: NavButton[] = Object.values(Page).filter(
  (page) => page.showInNavbar
);

const Navbar = (): React.JSX.Element => {
  const location = useLocation();

  return (
    <div className="flex w-full">
      <Link
        to="/"
        onClick={() => {
          document.body.style.overflowY = 'auto';
        }}
        className="mx-24
        hidden cursor-pointer gap-2 whitespace-nowrap font-lato text-2xl font-bold text-white lg:flex">
        <FaLaptopCode className="m-auto h-7 w-7" />
        Antonio Falcescu
      </Link>
      <span className="flex w-full justify-around gap-4">
        {navButtons.map((navButton) => (
          <Link
            key={navButton.name}
            to={navButton.path}
            onClick={() => {
              document.body.style.overflowY = 'auto';
            }}
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
