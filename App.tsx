
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Certification from './pages/Certification';
import SupportPrograms from './pages/SupportPrograms';
import Membership from './pages/Membership';
import Partners from './pages/Partners';
import Casting from './pages/Casting';
import Contact from './pages/Contact';

const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState<string>(window.location.hash || '#/');

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPath(window.location.hash || '#/');
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderPage = () => {
    const path = currentPath.replace('#', '');
    switch (path) {
      case '/':
      case '':
        return <Home />;
      case '/about':
        return <About />;
      case '/certification':
        return <Certification />;
      case '/support':
        return <SupportPrograms />;
      case '/casting':
        return <Casting />;
      case '/membership':
        return <Membership />;
      case '/partners':
        return <Partners />;
      case '/contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar currentPath={currentPath} />
      <main className="flex-grow pt-16">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
