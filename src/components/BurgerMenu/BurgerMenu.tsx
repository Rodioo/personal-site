import React, { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import {IoMdMenu} from 'react-icons/io';
import Page from '../../common/types/page.type.ts';
import {Link} from 'react-router-dom';

type NavButton = {
  name: string;
  path: string;
};

const navButtons: NavButton[] = Object.values(Page).filter(
  (page) => page.showInNavbar
);

const BurgerMenu = (): React.JSX.Element => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 text-sm font-semibold text-white shadow-sm">
          <IoMdMenu className='w-7 h-7' />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-1 z-10 w-56 origin-top-right rounded-md bg-jet shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {navButtons.map((navButton) => (
              <Menu.Item>
                <Link
                  key={navButton.name}
                  to={navButton.path}
                  onClick={() => {
                    document.body.style.overflowY = 'auto';
                  }}
                  className={`block px-4 py-2 text-sm hover:bg-onyx hover:bg-opacity-10
                  ${
                    navButton.path === location.pathname
                      ? 'font-bold text-white'
                      : 'font-medium text-taupe-gray hover:text-white'
                  }`}>
                  {navButton.name}
                </Link>
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export default BurgerMenu;
