import {useLocation, useOutlet} from 'react-router-dom';
import Navbar from './layouts/Navbar/Navbar.tsx';
import {Provider} from 'react-redux';
import store from './store/store.ts';
import {AnimatePresence} from 'framer-motion';
import React from 'react';

function App() {
  const location = useLocation();
  const element = useOutlet();

  return (
    <div className="flex min-h-screen max-w-full flex-col bg-onyx py-8">
      <Navbar />
      <Provider store={store}>
        <AnimatePresence
          mode="wait"
          initial={true}>
          {/*
            Problem:
              can't use <Outlet /> because it has its own Provider component as a direct child
              which causes AnimatePresence to not be able to animate the "exit" event of the pages
            Workaround:
              manually render each page with React.cloneElement with the useOutlet hook
              (same outcome because <Outlet /> also uses this useOutlet hook to render the pages)
          */}
          {element && React.cloneElement(element, {key: location.pathname})}
        </AnimatePresence>
      </Provider>
    </div>
  );
}

export default App;
