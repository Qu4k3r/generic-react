import React from 'react';
import './styles.module.scss';

export default function Header() {
  return (
    <header>
      <div>
        <img src="/images/its-me.jpg" alt="It's me! Lucas Neves" />
      </div>
      <nav>
        <ul>
          <li>
            <a href="#top">Início</a>
          </li>
          <li>
            <a href="#about">Sobre mim</a>
          </li>
          <li>
            <a href="/">Trabalho</a>
          </li>
          <li>
            <a href="/">Contato</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
