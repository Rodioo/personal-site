import {useLocation, useOutlet} from 'react-router-dom';
import Navbar from './layouts/Navbar/Navbar.tsx';
import {Provider} from 'react-redux';
import store from './store/store.ts';
import {AnimatePresence} from 'framer-motion';
import React from 'react';

//TODO: check why does the refreshed page does not render after switching once
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
          {element && React.cloneElement(element, {key: location.pathname})}
        </AnimatePresence>
      </Provider>
    </div>
  );
}

export default App;
