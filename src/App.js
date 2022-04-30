import React from 'react';
import './App.scss';
import Header from './components/header';
import Banner from './components/banner';
import About from './components/about';
import Skills from './components/skills';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <About />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
