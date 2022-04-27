import React from 'react';
import './App.scss';
import $ from 'jquery';
import Header from './components/header';
import Banner from './components/banner';
import About from './components/about';
import Skills from './components/skills';
import Footer from './components/footer';
import MoreInfo from './components/moreinfo';

class App extends React.Component {
  updateMobileNavState() {
    this.setState({
      openMobileNav: !this.state.openMobileNav
    });

    if (this.state.openMobileNav) {
      $("#mobile-nav").css("width", "45%");
    }
    else {
      $("#mobile-nav").css("width", "0");
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      openMobileNav: false
    }
  }

  render() {
    return (
      <div className="App">
        <Header onClick={() => this.updateMobileNavState()} />
        <Banner />
        <About />
        <Skills />
        <MoreInfo />
        <Footer />
      </div>
    );
  }
}

export default App;
