import React, { Component } from 'react';
import { Router,withRouter } from 'react-router';
import ReactDOM from 'react-dom';
import TitleSection from './sections/TitleSection';
import AboutSection from './sections/AboutSection';
import SkillSection from './sections/SkillSection';
import MenuSection  from './sections/MenuSection';
import ScrollToTop  from './sections/Index';
import './App.css';



class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="navigation" />
        <ScrollToTop />
        <MenuSection /> 
        <TitleSection />
        <AboutSection />
        <SkillSection />
      </div>
    );
  }
}

export default App;
