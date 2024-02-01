import React from 'react';
import {Link, useLocation} from 'react-router-dom';
import Page from '../../common/types/page.type.ts';
import {FaLaptopCode} from 'react-icons/fa6';
import BurgerMenu from '../../components/BurgerMenu/BurgerMenu.tsx';

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
    <div className="fixed z-50 flex w-full justify-between gap-4 border-b border-b-black px-6 py-2 backdrop-blur-lg md:px-4 xl:px-24">
      <Link
        to="/"
        onClick={() => {
          document.body.style.overflowY = 'auto';
        }}
        className="mb-1 flex cursor-pointer gap-2 whitespace-nowrap font-lato text-2xl font-bold text-white">
        <FaLaptopCode className="mt-0.5 h-7 w-7" />
        Antonio Falcescu
      </Link>
      <span className="mb-auto mt-auto hidden w-full justify-around md:flex">
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
      <span className="fixed right-0 z-50 md:hidden">
        <BurgerMenu />
      </span>
    </div>
  );
};

export default Navbar;
