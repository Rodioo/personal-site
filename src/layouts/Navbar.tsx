import {Link, useLocation} from 'react-router-dom';

type NavButton = {
  name: string;
  path: string;
};

const navButtons: NavButton[] = [
  {
    name: 'HOME',
    path: '/',
  },
  {
    name: 'ABOUT',
    path: '/about',
  },
  {
    name: 'PROJECTS',
    path: '/projects',
  },
  {
    name: 'ARTICLES',
    path: '/articles',
  },
  {
    name: 'CONTACT',
    path: '/contact',
  },
];

const Navbar = () => {
  const location = useLocation()

  return (
    <div className="flex w-screen">
      <Link
        to="/"
        className="mx-24 hidden cursor-pointer whitespace-nowrap font-lato text-2xl font-bold text-white lg:block"
      >
        Antonio Fălcescu
      </Link>
      <span className="flex w-full justify-evenly">
        {navButtons.map((navButton) => (
          <Link
            key={navButton.name}
            to={navButton.path}
            className={`cursor-pointer px-2 font-lato text-lg tracking-widest text-white
            ${
              navButton.path === location.pathname
                ? 'font-bold'
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
