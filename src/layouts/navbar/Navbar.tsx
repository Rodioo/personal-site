import React from 'react';
import {Link, useLocation} from 'react-router-dom';
import Page from '../../common/types/page.type.ts';

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
        className="mx-24 hidden cursor-pointer whitespace-nowrap font-lato text-2xl font-bold text-white lg:block">
        Antonio Fălcescu
      </Link>
      <span className="flex w-full justify-evenly">
        {navButtons.map((navButton) => (
          <Link
            key={navButton.name}
            to={navButton.path}
            className={`cursor-pointer px-4 font-lato text-lg tracking-widest
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
