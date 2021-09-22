import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.scss';
import Header from './components/Header';
import About from './pages/About';
import Footer from './components/Footer';
import Home from './pages/Home';

export default function App() {
  return (
    <main>
      <Header />

      <Switch>
        <Route path="/about">
          <About />
        </Route>

        <Route exact path="/">
          <Home />
        </Route>
      </Switch>

      <section>
        <Footer />
      </section>
    </main>
  );
}
