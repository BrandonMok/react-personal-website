import React from 'react';
import './App.scss';
import $ from 'jquery';
import Header from './components/header';
import Banner from './components/banner';
import About from './components/about';
import PrimaryTech from './components/primarytechnologies';
import Footer from './components/footer';
import MobileNav from './components/mobilenav';

class App extends React.Component {
  openNav() {
    $("#mobile-nav").css("width", "60%");
  }
  closeNav() {
    $("#mobile-nav").css("width", "0");
  }

  render() {
    return (
      <div className="App">
        <MobileNav onClick={() => this.closeNav()} />
        <Header onClick={() => this.openNav()} />
        <Banner />
        <About />
        <PrimaryTech />
        <Footer />
      </div>
    );
  }
}



export default App;
