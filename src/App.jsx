import React from 'react';
import Particles from 'react-particles-js';
import Greetings from './components/Greetings';

import particlesJson from './utils/particlesjs-config.json';

import './App.scss';
import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';

export default function App() {
  return (
    <main>
      <section className="App">
        <Header />
        <Particles
          className="particles"
          params={particlesJson}
        />
        <Greetings />
      </section>
      <section>
        <About />
      </section>
      <section>
        <Footer />
      </section>
    </main>
  );
}
