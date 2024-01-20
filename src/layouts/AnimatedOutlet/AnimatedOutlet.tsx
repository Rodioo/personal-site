import React from 'react';
import {useLocation, useOutlet} from 'react-router-dom';
import {AnimatePresence} from 'framer-motion';

/*
Problem:
can't use <Outlet /> because it has its own Provider component as a direct child
which causes AnimatePresence to not be able to animate the "exit" event of the pages
Workaround:
manually render each page with React.cloneElement with the useOutlet hook
(same outcome because <Outlet /> also uses this useOutlet hook to render the pages)
*/

const AnimatedOutlet = (): React.JSX.Element => {
  const location = useLocation();
  const element = useOutlet();

  return (
    <AnimatePresence
      mode="wait"
      initial={true}>
      {element && React.cloneElement(element, {key: location.pathname})}
    </AnimatePresence>
  );
};

export default AnimatedOutlet;
