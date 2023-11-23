type NavButton = {
  name: string;
  isVisible: boolean;
};

const navButtons: NavButton[] = [
  {
    name: 'HOME',
    isVisible: true,
  },
  {
    name: 'ABOUT',
    isVisible: false,
  },
  {
    name: 'PROJECTS',
    isVisible: false,
  },
  {
    name: 'ARTICLES',
    isVisible: false,
  },
  {
    name: 'CONTACT',
    isVisible: false,
  },
];

const Navbar = () => {

  return (
    <div className="flex w-screen">
      <span className="mx-24 hidden whitespace-nowrap font-lato text-2xl font-bold text-white lg:block cursor-pointer">
        Antonio Falcescu
      </span>
      <span className="flex w-full justify-evenly">
        {navButtons.map((navButton) => (
          <span
            key={navButton.name}
            className={`cursor-pointer px-2 font-lato text-lg tracking-widest text-white
            ${
              navButton.isVisible
                ? 'font-bold'
                : 'font-medium text-gray-500 hover:text-gray-400'
            }`}>
            {navButton.name}
          </span>
        ))}
      </span>
    </div>
  );
};

export default Navbar;
