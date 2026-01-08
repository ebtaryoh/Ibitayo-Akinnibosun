import React from 'react';
import Nav from './components/Nav';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import Project from './components/Project';
import Footer from './components/Footer';
import './App.css';
import Contact from './components/Contact';

function App() {
  return (
    <>
    <Nav />
    <Header />
    <About />
    <Skills />
    <Services />
    <Project />
    <Contact />
    <Footer />
    </>
  );
}

export default App;
