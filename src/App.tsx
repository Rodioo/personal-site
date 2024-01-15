import {Outlet} from 'react-router-dom';
import Navbar from './layouts/navbar/Navbar.tsx';

function App() {
  return (
    <div className="flex min-h-screen max-w-full flex-col bg-onyx py-8">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
