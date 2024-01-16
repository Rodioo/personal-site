import {Outlet} from 'react-router-dom';
import Navbar from './layouts/navbar/Navbar.tsx';
import {Provider} from 'react-redux';
import store from './store/store.ts';

function App() {
  return (
    <div className="flex min-h-screen max-w-full flex-col bg-onyx py-8">
      <Navbar />
      <Provider store={store}>
        <Outlet />
      </Provider>
    </div>
  );
}

export default App;
