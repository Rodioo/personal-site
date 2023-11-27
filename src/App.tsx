import {Outlet} from 'react-router-dom';

import Navbar from './layouts/navbar/Navbar.tsx';

function App() {
  return (
    <div className="max-w-screen min-h-screen overflow-x-hidden bg-onyx py-8">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
