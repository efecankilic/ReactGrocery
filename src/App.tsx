import { Outlet } from 'react-router-dom';
import Navigation from './pages/Navigation';
import Footer from './pages/Footer';
import { LanguageContextProvider } from './context/LanguageContext';

import './App.css';

const App = () => {
  return (
    <LanguageContextProvider>
      <div>
        <Navigation />
        <Outlet />
        <Footer />
      </div>
    </LanguageContextProvider>
  );
};

export default App;
