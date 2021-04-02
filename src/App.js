import React from 'react';
import './App.scss';
import Header from './components/header';
import Banner from './components/banner';
import About from './components/about';
import PrimaryTech from './components/primarytechnologies';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <About />
      <PrimaryTech />
      <Footer />
    </div>
  );
}

export default App;
