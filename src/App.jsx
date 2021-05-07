import Greetings from "./components/Greetings";
import Particles from "react-particles-js";

import particlesJson from './utils/particlesjs-config.json';

import './App.scss';
import Header from "./components/Header";

export default function App() {
  return (
    <main className="App">
      <Header />
      <Particles
        className="particles"
        params={ particlesJson }
      />
      <Greetings />
    </main>
  );
}
