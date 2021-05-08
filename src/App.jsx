import Greetings from './components/Greetings';
import Particles from 'react-particles-js';

import particlesJson from './utils/particlesjs-config.json';

import './App.scss';
import Header from './components/Header';
import About from './components/About';

export default function App() {
  return (
    <main>
      <section className="App">
        <Header />
        <Particles
          className="particles"
          params={ particlesJson }
        />
        <Greetings />
      </section>
      <section>
        <About />
      </section>
    </main>
  );
}
