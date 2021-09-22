import React from 'react';
import Particles from 'react-particles-js';
import Greetings from '../Greetings';

import particlesJson from '../../utils/particlesjs-config.json';

export default function Home() {
  return (
    <section className="App">
      <Particles
        className="particles"
        params={particlesJson}
      />
      <Greetings />
    </section>
  );
}
