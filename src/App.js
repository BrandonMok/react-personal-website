import React from 'react';
import './App.scss';
import Header from './components/header';
import Banner from './components/banner';
import About from './components/about';
import Skills from './components/skills';
import Footer from './components/footer';
import anime from 'animejs/lib/anime.es.js';


function App() {

  // anime({
  //   targets: '.App',
  //   translateY: [200, 0],
  //   easing: 'easeOutExpo',
  //   opacity: [0, 1],
  //   delay: (el, i) => 700 + 300 * i
  // })

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
