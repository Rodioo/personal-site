import Navbar from './layouts/Navbar/Navbar.tsx';
import {Provider} from 'react-redux';
import store from './store/store.ts';
import AnimatedOutlet from './layouts/AnimatedOutlet/AnimatedOutlet.tsx';
import React from 'react';

const App = (): React.JSX.Element => {
  return (
    <div className="flex min-h-screen max-w-full flex-col bg-onyx">
      <Navbar />
      <Provider store={store}>
        <AnimatedOutlet />
      </Provider>
    </div>
  );
}

export default App;
