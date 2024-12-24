import React from 'react';
import Navbar from './components/nav/Navbar';
import Hero from './components/hero/Hero';
import Footer from './components/Footer/footer';

const App = () => {

  return (
    <div className="min-h-screen bg-gray-100 md:px-4">
      <Navbar />
      <main>
        <Hero />
        <Footer />
      </main>
    </div>
  );
};

export default App;
