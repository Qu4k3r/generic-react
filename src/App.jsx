import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.scss';
import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';
import Home from './components/Home';

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
