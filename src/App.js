import React, { useState, useEffect} from 'react';
import './App.scss';
import $ from 'jquery';
import Header from './components/header';
import Banner from './components/banner';
import About from './components/about';
import Skills from './components/skills';
import Footer from './components/footer';
import anime from 'animejs/lib/anime.es.js';


function App() {
  const [ openMobileNav, setOpenMobileNav ] = useState(false);

  // anime({
  //   targets: '.App',
  //   translateY: [200, 0],
  //   easing: 'easeOutExpo',
  //   opacity: [0, 1],
  //   delay: (el, i) => 700 + 300 * i
  // })
  
  useEffect(() => {
    let percentWidth = openMobileNav ? "45%" : "0";
    $("#mobile-nav").css("width", percentWidth);
  },[openMobileNav]);

  return (
    <div className="App">
      <Header onClick={setOpenMobileNav} />
      <Banner />
      <About />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
